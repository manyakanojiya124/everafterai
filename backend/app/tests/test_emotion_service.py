import unittest

from app.services.emotion_service import score_emotional_intensity, should_auto_generate_voice


class EmotionServiceTests(unittest.TestCase):
    def test_high_emotion_reply_crosses_threshold(self):
        text = "I miss you so much, my dear. I remember when we used to bake together — I'm always here, and I'm so proud of you."
        self.assertTrue(should_auto_generate_voice(text))
        self.assertGreaterEqual(score_emotional_intensity(text), 3)

    def test_plain_factual_reply_does_not_trigger(self):
        text = "The recipe calls for two cups of flour and a teaspoon of salt."
        self.assertFalse(should_auto_generate_voice(text))

    def test_mildly_warm_reply_alone_does_not_trigger(self):
        text = "That sounds nice."
        self.assertFalse(should_auto_generate_voice(text))


if __name__ == "__main__":
    unittest.main()
