"""
Proves the on-demand vs auto-trigger paths converge, and that missing
reference audio / disabled voice fail safely (never crash the chat flow).
"""
import unittest
from unittest.mock import MagicMock, patch

from app.services import message_voice_service as mvs


class FakeVoiceRow:
    def __init__(self, status="pending"):
        self.status = status
        self.id = 1


class FakeMessage:
    id = 42
    content = "I miss you so much, my dear."


class RequestVoiceForMessageTests(unittest.TestCase):
    @patch("app.services.message_voice_service.get_message_by_id", return_value=None)
    def test_missing_message_raises_404(self, mock_get_message):
        from fastapi import HTTPException
        with self.assertRaises(HTTPException):
            mvs.request_voice_for_message(MagicMock(), companion_id=1, message_id=999)

    @patch("app.services.message_voice_service.is_available", return_value=False)
    @patch("app.services.message_voice_service.get_voice_for_message", return_value=None)
    @patch("app.services.message_voice_service.get_message_by_id", return_value=FakeMessage())
    def test_unavailable_voice_backend_raises_503(self, mock_get_message, mock_get_voice, mock_available):
        from fastapi import HTTPException
        with self.assertRaises(HTTPException) as ctx:
            mvs.request_voice_for_message(MagicMock(), companion_id=1, message_id=42)
        self.assertEqual(ctx.exception.status_code, 503)

    @patch("app.services.message_voice_service.create_pending_voice")
    @patch("app.services.message_voice_service.is_available", return_value=True)
    @patch("app.services.message_voice_service.get_voice_for_message", return_value=None)
    @patch("app.services.message_voice_service.get_message_by_id", return_value=FakeMessage())
    def test_new_request_creates_a_pending_job(self, mock_get_message, mock_get_voice, mock_available, mock_create):
        mock_create.return_value = FakeVoiceRow(status="pending")
        voice_row, message = mvs.request_voice_for_message(MagicMock(), companion_id=1, message_id=42)
        mock_create.assert_called_once()
        self.assertEqual(voice_row.status, "pending")

    @patch("app.services.message_voice_service.get_voice_for_message", return_value=FakeVoiceRow(status="completed"))
    @patch("app.services.message_voice_service.get_message_by_id", return_value=FakeMessage())
    def test_already_completed_job_is_returned_without_creating_a_new_one(self, mock_get_message, mock_get_voice):
        voice_row, message = mvs.request_voice_for_message(MagicMock(), companion_id=1, message_id=42)
        self.assertEqual(voice_row.status, "completed")


class RunGenerationTests(unittest.TestCase):
    @patch("app.services.message_voice_service.mark_failed")
    @patch("app.services.message_voice_service.get_voice_reference", return_value=None)
    def test_missing_reference_marks_job_failed_not_raises(self, mock_get_ref, mock_mark_failed):
        mvs._run_generation(MagicMock(), companion_id=1, message=FakeMessage(), voice_row=FakeVoiceRow())
        mock_mark_failed.assert_called_once()

    @patch("app.services.message_voice_service.mark_completed")
    @patch("app.services.message_voice_service.mark_generating")
    @patch("app.services.message_voice_service.synthesize_speech")
    @patch("app.services.message_voice_service.get_voice_reference")
    def test_successful_generation_marks_completed_with_metadata(self, mock_get_ref, mock_synth, mock_generating, mock_completed):
        mock_get_ref.return_value = MagicMock(status="ready", file_path="/tmp/ref.wav")
        mock_synth.return_value = {"device": "cuda", "generation_ms": 4200, "file_path": "/tmp/out.wav"}

        mvs._run_generation(MagicMock(), companion_id=1, message=FakeMessage(), voice_row=FakeVoiceRow())

        mock_generating.assert_called_once()
        mock_completed.assert_called_once()
        kwargs = mock_completed.call_args.kwargs
        self.assertEqual(kwargs["device"], "cuda")
        self.assertEqual(kwargs["generation_ms"], 4200)


class AutoTriggerTests(unittest.TestCase):
    @patch("app.services.message_voice_service.settings")
    @patch("app.services.message_voice_service.get_voice_reference")
    @patch("app.services.message_voice_service.is_available", return_value=True)
    @patch("app.services.message_voice_service.create_pending_voice")
    def test_emotional_reply_with_ready_reference_schedules_background_task(self, mock_create, mock_available, mock_get_ref, mock_settings):
        mock_settings.VOICE_ENABLED = True
        mock_get_ref.return_value = MagicMock(status="ready")
        mock_create.return_value = FakeVoiceRow()
        background_tasks = MagicMock()

        mvs.trigger_auto_generation_if_needed(
            MagicMock(), companion_id=1, message=FakeMessage(),
            reply_text="I miss you so much, my dear. I'm always here, and I remember when we baked together.",
            background_tasks=background_tasks,
        )

        mock_create.assert_called_once()
        background_tasks.add_task.assert_called_once()

    @patch("app.services.message_voice_service.settings")
    @patch("app.services.message_voice_service.create_pending_voice")
    def test_plain_reply_does_not_schedule_anything(self, mock_create, mock_settings):
        mock_settings.VOICE_ENABLED = True
        background_tasks = MagicMock()

        mvs.trigger_auto_generation_if_needed(
            MagicMock(), companion_id=1, message=FakeMessage(),
            reply_text="The store closes at 9pm.", background_tasks=background_tasks,
        )

        mock_create.assert_not_called()
        background_tasks.add_task.assert_not_called()

    @patch("app.services.message_voice_service.settings")
    @patch("app.services.message_voice_service.create_pending_voice")
    def test_voice_disabled_globally_skips_even_emotional_replies(self, mock_create, mock_settings):
        mock_settings.VOICE_ENABLED = False
        background_tasks = MagicMock()

        mvs.trigger_auto_generation_if_needed(
            MagicMock(), companion_id=1, message=FakeMessage(),
            reply_text="I miss you so much, my dear, I'm always here.", background_tasks=background_tasks,
        )

        mock_create.assert_not_called()
        background_tasks.add_task.assert_not_called()


if __name__ == "__main__":
    unittest.main()
