"""
Tests the chunk -> embed -> store orchestration in isolation, by mocking
the embedding model and the repository layer. This keeps the suite fast
and network-free while still proving the wiring is correct; the actual
pgvector storage/query behaviour is exercised against a real Postgres
instance in staging/CI-with-db, not here.
"""
import unittest
from unittest.mock import MagicMock, patch

from app.services import ingestion_service


class IngestFileTextTests(unittest.TestCase):
    @patch("app.services.ingestion_service.replace_file_chunks")
    @patch("app.services.ingestion_service.embed_texts")
    def test_chunks_are_embedded_and_stored_together(self, mock_embed, mock_store):
        # one dummy vector per chunk, whatever the chunker actually produces —
        # this test is about the wiring, not the exact chunk count
        mock_embed.side_effect = lambda pieces: [[0.1, 0.2] for _ in pieces]
        mock_store.side_effect = lambda db, **kwargs: len(kwargs["chunks_with_embeddings"])
        db = MagicMock()

        text = ("Grandma always made tamales at Christmas. " * 60).strip()
        count = ingestion_service.ingest_file_text(
            db, memory_person_id=1, memory_file_id=7, source_label="letters.txt", text=text,
        )

        self.assertGreater(count, 0)
        mock_embed.assert_called_once()
        chunks_passed_to_embed = mock_embed.call_args.args[0]
        self.assertEqual(len(chunks_passed_to_embed), count)

        mock_store.assert_called_once()
        kwargs = mock_store.call_args.kwargs
        self.assertEqual(kwargs["memory_person_id"], 1)
        self.assertEqual(kwargs["memory_file_id"], 7)
        self.assertEqual(kwargs["source_label"], "letters.txt")
        self.assertEqual(len(kwargs["chunks_with_embeddings"]), count)

    @patch("app.services.ingestion_service.replace_file_chunks")
    @patch("app.services.ingestion_service.embed_texts")
    def test_empty_text_short_circuits_without_calling_the_model(self, mock_embed, mock_store):
        result = ingestion_service.ingest_file_text(
            MagicMock(), memory_person_id=1, memory_file_id=7, source_label="empty.txt", text="   ",
        )
        self.assertEqual(result, 0)
        mock_embed.assert_not_called()
        mock_store.assert_not_called()


class IngestProfileTests(unittest.TestCase):
    @patch("app.services.ingestion_service.replace_profile_chunks")
    @patch("app.services.ingestion_service.embed_texts")
    def test_only_populated_narrative_fields_are_embedded(self, mock_embed, mock_store):
        mock_embed.return_value = [[0.1] * 384, [0.2] * 384]

        class FakePerson:
            id = 5
            biography = "She was a teacher for 30 years."
            bond_story = "We baked cookies every winter."
            special_memories = None
            favorite_quote = ""
            communication_style = None

        ingestion_service.ingest_profile(MagicMock(), FakePerson())

        embedded_texts = mock_embed.call_args.args[0]
        self.assertEqual(len(embedded_texts), 2)
        self.assertTrue(any("teacher for 30 years" in t for t in embedded_texts))
        self.assertTrue(any("baked cookies every winter" in t for t in embedded_texts))

    @patch("app.services.ingestion_service.replace_profile_chunks")
    @patch("app.services.ingestion_service.embed_texts")
    def test_no_narrative_fields_clears_existing_chunks_without_embedding(self, mock_embed, mock_store):
        class EmptyPerson:
            id = 9
            biography = None
            bond_story = None
            special_memories = None
            favorite_quote = None
            communication_style = None

        db = MagicMock()
        result = ingestion_service.ingest_profile(db, EmptyPerson())
        self.assertEqual(result, 0)
        mock_embed.assert_not_called()
        mock_store.assert_called_once_with(db, memory_person_id=9, chunks_with_embeddings=[])


if __name__ == "__main__":
    unittest.main()
