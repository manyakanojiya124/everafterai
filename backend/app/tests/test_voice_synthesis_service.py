"""
Tests voice_synthesis_service without ever importing the real TTS/torch
packages (they're multi-GB and irrelevant to proving the orchestration
logic is correct) — patches _get_model/_get_device directly.
"""
import unittest
from pathlib import Path
from unittest.mock import MagicMock, patch

from app.services import voice_synthesis_service as vs


class VoiceSynthesisServiceTests(unittest.TestCase):
    def setUp(self):
        vs._get_device.cache_clear()
        vs._get_model.cache_clear()

    @patch("app.services.voice_synthesis_service.settings")
    def test_raises_when_voice_disabled(self, mock_settings):
        mock_settings.VOICE_ENABLED = False
        with self.assertRaises(vs.VoiceSynthesisError):
            vs.synthesize_speech(text="hello", reference_audio_path="/tmp/does-not-matter.wav", output_path="/tmp/out.wav")

    @patch("app.services.voice_synthesis_service.settings")
    def test_raises_when_reference_file_missing(self, mock_settings):
        mock_settings.VOICE_ENABLED = True
        with self.assertRaises(vs.VoiceSynthesisError):
            vs.synthesize_speech(text="hello", reference_audio_path="/tmp/definitely-not-here.wav", output_path="/tmp/out.wav")

    @patch("app.services.voice_synthesis_service._get_model")
    @patch("app.services.voice_synthesis_service._get_device", return_value="cpu")
    @patch("app.services.voice_synthesis_service.settings")
    def test_successful_generation_returns_device_and_timing(self, mock_settings, mock_device, mock_get_model, tmp_path=None):
        mock_settings.VOICE_ENABLED = True
        fake_model = MagicMock()
        mock_get_model.return_value = fake_model

        with unittest.mock.patch.object(Path, "exists", return_value=True):
            result = vs.synthesize_speech(text="hello there", reference_audio_path="/tmp/ref.wav", output_path="/tmp/out/reply.wav")

        fake_model.tts_to_file.assert_called_once()
        call_kwargs = fake_model.tts_to_file.call_args.kwargs
        self.assertEqual(call_kwargs["text"], "hello there")
        self.assertEqual(call_kwargs["speaker_wav"], "/tmp/ref.wav")
        self.assertEqual(result["device"], "cpu")
        self.assertIn("generation_ms", result)

    @patch("app.services.voice_synthesis_service._get_model")
    @patch("app.services.voice_synthesis_service._get_device", return_value="cpu")
    @patch("app.services.voice_synthesis_service.settings")
    def test_model_failure_wraps_into_voice_synthesis_error(self, mock_settings, mock_device, mock_get_model):
        mock_settings.VOICE_ENABLED = True
        fake_model = MagicMock()
        fake_model.tts_to_file.side_effect = RuntimeError("CUDA out of memory")
        mock_get_model.return_value = fake_model

        with unittest.mock.patch.object(Path, "exists", return_value=True):
            with self.assertRaises(vs.VoiceSynthesisError):
                vs.synthesize_speech(text="hello", reference_audio_path="/tmp/ref.wav", output_path="/tmp/out/reply.wav")


class DeviceDetectionTests(unittest.TestCase):
    def setUp(self):
        vs._get_device.cache_clear()

    @patch("app.services.voice_synthesis_service.settings")
    def test_explicit_device_setting_is_respected(self, mock_settings):
        mock_settings.XTTS_DEVICE = "cpu"
        self.assertEqual(vs._get_device(), "cpu")

    @patch("app.services.voice_synthesis_service.settings")
    def test_auto_falls_back_to_cpu_when_torch_missing(self, mock_settings):
        mock_settings.XTTS_DEVICE = "auto"
        with patch.dict("sys.modules", {"torch": None}):
            self.assertEqual(vs._get_device(), "cpu")


if __name__ == "__main__":
    unittest.main()
