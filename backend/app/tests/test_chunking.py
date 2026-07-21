import unittest

from app.utils.text_chunking import chunk_text


class ChunkTextTests(unittest.TestCase):
    def test_empty_text_returns_no_chunks(self):
        self.assertEqual(chunk_text(""), [])
        self.assertEqual(chunk_text("   "), [])

    def test_short_text_returns_a_single_chunk(self):
        self.assertEqual(chunk_text("Hello there."), ["Hello there."])

    def test_long_text_is_split_with_overlap(self):
        text = ("Sentence one is here. " * 200).strip()
        chunks = chunk_text(text, chunk_size=200, overlap=40)
        self.assertGreater(len(chunks), 1)
        for chunk in chunks:
            self.assertLessEqual(len(chunk), 200)

    def test_rejects_overlap_larger_than_chunk_size(self):
        with self.assertRaises(ValueError):
            chunk_text("some text", chunk_size=50, overlap=50)

    def test_every_chunk_is_non_empty(self):
        text = "A" * 3000
        chunks = chunk_text(text, chunk_size=500, overlap=50)
        self.assertTrue(all(c.strip() for c in chunks))


if __name__ == "__main__":
    unittest.main()
