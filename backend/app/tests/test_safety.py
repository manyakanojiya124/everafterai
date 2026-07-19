import unittest

from app.services.safety_service import detect_crisis, detect_dependency_language


class SafetyServiceTests(unittest.TestCase):
    def test_detects_direct_crisis_language(self):
        self.assertTrue(detect_crisis("I want to kill myself tonight"))
        self.assertTrue(detect_crisis("sometimes I think about suicide"))

    def test_does_not_flag_ordinary_grief_language(self):
        self.assertFalse(detect_crisis("I miss him so much it hurts"))
        self.assertFalse(detect_crisis("I wish I could talk to her one more time"))

    def test_detects_unhealthy_dependency_language(self):
        self.assertTrue(detect_dependency_language("You are him now, I don't need anyone else"))

    def test_does_not_flag_normal_affection(self):
        self.assertFalse(detect_dependency_language("It's nice to hear your voice again"))


if __name__ == "__main__":
    unittest.main()
