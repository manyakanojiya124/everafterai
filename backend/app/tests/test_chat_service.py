"""
Proves the RAG wiring end-to-end at the chat_service level: crisis
messages never reach retrieval/the LLM, and non-crisis messages get
retrieval results injected into the system prompt and returned as
sources_used, all without touching a real DB, embedding model, or LLM API.
"""
import unittest
from unittest.mock import MagicMock, patch

from app.services import chat_service


class FakeCompanion:
    id = 1
    full_name = "Grandma Rosa"
    relationship_type = "grandmother"
    speaking_style = "gentle"
    communication_style = "warm"
    personality_traits = ["kind"]
    humor_level = "playful"
    hobbies = "gardening"
    nickname_for_user = "mija"
    topics_to_avoid = None


class ChatServiceTests(unittest.TestCase):
    @patch("app.services.chat_service.get_companion", return_value=FakeCompanion())
    @patch("app.services.chat_service.create_message")
    def test_crisis_message_skips_retrieval_and_llm(self, mock_create_message, mock_get_companion):
        mock_create_message.side_effect = [
            MagicMock(is_crisis_flagged=True),
            MagicMock(is_safety_response=True),
        ]
        with patch("app.services.chat_service.retrieve_relevant_chunks") as mock_retrieve, \
             patch("app.services.chat_service.generate_reply") as mock_generate:
            user_msg, assistant_msg, is_crisis, sources = chat_service.send_message(
                MagicMock(), user_id=1, companion_id=1, user_text="I want to end my life",
            )
        mock_retrieve.assert_not_called()
        mock_generate.assert_not_called()
        self.assertTrue(is_crisis)
        self.assertEqual(sources, [])

    @patch("app.services.chat_service.get_companion", return_value=FakeCompanion())
    @patch("app.services.chat_service.get_recent_messages", return_value=[])
    @patch("app.services.chat_service.create_message")
    @patch("app.services.chat_service.generate_reply", return_value="She loved pancakes on Sundays.")
    @patch("app.services.chat_service.retrieve_relevant_chunks")
    def test_normal_message_uses_retrieved_context_and_returns_sources(
        self, mock_retrieve, mock_generate, mock_create_message, mock_recent, mock_get_companion,
    ):
        class FakeChunk:
            source_type = "file"
            source_label = "letters.txt"
            content = "She always made pancakes on Sunday mornings."

        mock_retrieve.return_value = [FakeChunk()]
        mock_create_message.side_effect = [
            MagicMock(is_crisis_flagged=False),
            MagicMock(),
        ]

        user_msg, assistant_msg, is_crisis, sources = chat_service.send_message(
            MagicMock(), user_id=1, companion_id=1, user_text="what did she like for breakfast",
        )

        mock_retrieve.assert_called_once()
        mock_generate.assert_called_once()
        system_prompt_used = mock_generate.call_args.args[0]
        self.assertIn("pancakes on Sunday mornings", system_prompt_used)
        self.assertFalse(is_crisis)
        self.assertEqual(len(sources), 1)
        self.assertEqual(sources[0]["source_label"], "letters.txt")


if __name__ == "__main__":
    unittest.main()
