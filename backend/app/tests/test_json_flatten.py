import unittest

from app.utils.json_flatten import flatten_json_to_text, parse_and_flatten_json_bytes


class JsonFlattenTests(unittest.TestCase):
    def test_flattens_nested_dict(self):
        data = {"name": "Grandma Rosa", "favorites": {"food": "tamales", "song": "Bésame Mucho"}}
        text = flatten_json_to_text(data)
        self.assertIn("name: Grandma Rosa", text)
        self.assertIn("favorites > food: tamales", text)
        self.assertIn("favorites > song: Bésame Mucho", text)

    def test_flattens_list_of_memory_entries(self):
        data = [{"memory": "Taught me to cook", "year": 2005}, {"memory": "Sunday walks", "year": 2010}]
        text = flatten_json_to_text(data)
        self.assertIn("[0] > memory: Taught me to cook", text)
        self.assertIn("[1] > year: 2010", text)

    def test_skips_empty_values(self):
        data = {"note": "", "other": None, "kept": "value"}
        text = flatten_json_to_text(data)
        self.assertNotIn("note:", text)
        self.assertNotIn("other:", text)
        self.assertIn("kept: value", text)

    def test_invalid_json_bytes_raise_value_error(self):
        with self.assertRaises(ValueError):
            parse_and_flatten_json_bytes(b"{not valid json")

    def test_valid_json_bytes_round_trip(self):
        text = parse_and_flatten_json_bytes(b'{"memory": "First bike ride together"}')
        self.assertIn("memory: First bike ride together", text)


if __name__ == "__main__":
    unittest.main()
