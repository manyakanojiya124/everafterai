import unittest

from app.services.safety_service import detect_crisis, detect_dependency_language, build_system_prompt


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

    def test_system_prompt_forbids_claiming_to_be_the_person_and_includes_context(self):
        class FakePerson:
            full_name = "Grandma Rosa"
            relationship_type = "grandmother"
            speaking_style = "gentle"
            communication_style = "warm"
            personality_traits = ["funny", "kind"]
            humor_level = "playful"
            hobbies = "gardening"
            nickname_for_user = "mija"
            topics_to_avoid = "her illness"

        prompt = build_system_prompt(FakePerson(), turn_count=1, retrieved_context="She loved Sunday pancakes.")
        self.assertIn("You are NOT Grandma Rosa", prompt)
        self.assertIn("She loved Sunday pancakes.", prompt)
        self.assertIn("RELEVANT MEMORIES", prompt)


if __name__ == "__main__":
    unittest.main()
