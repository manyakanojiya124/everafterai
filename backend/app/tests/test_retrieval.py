import unittest
from unittest.mock import MagicMock, patch

from app.services.retrieval_service import format_chunks_for_prompt, retrieve_relevant_chunks


class FakeChunk:
    def __init__(self, source_type, source_label, content):
        self.source_type = source_type
        self.source_label = source_label
        self.content = content


class RetrievalServiceTests(unittest.TestCase):
    @patch("app.services.retrieval_service.similarity_search")
    @patch("app.services.retrieval_service.embed_text")
    def test_retrieve_embeds_query_then_searches_by_person(self, mock_embed, mock_search):
        mock_embed.return_value = [0.1, 0.2, 0.3]
        mock_search.return_value = [FakeChunk("file", "letters.txt", "She loved Sunday pancakes.")]
        db = MagicMock()

        result = retrieve_relevant_chunks(db, memory_person_id=3, query="what did she like for breakfast", top_k=5)

        mock_embed.assert_called_once_with("what did she like for breakfast")
        mock_search.assert_called_once_with(db, memory_person_id=3, query_embedding=[0.1, 0.2, 0.3], top_k=5)
        self.assertEqual(len(result), 1)

    def test_format_chunks_labels_each_source(self):
        chunks = [
            FakeChunk("file", "letters.txt", "She loved Sunday pancakes."),
            FakeChunk("profile", None, "Warm and funny."),
        ]
        formatted = format_chunks_for_prompt(chunks)
        self.assertIn("[From: letters.txt]", formatted)
        self.assertIn("[From: Profile]", formatted)
        self.assertIn("She loved Sunday pancakes.", formatted)

    def test_empty_chunks_format_to_empty_string(self):
        self.assertEqual(format_chunks_for_prompt([]), "")


if __name__ == "__main__":
    unittest.main()
