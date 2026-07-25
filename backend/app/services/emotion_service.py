"""
Heuristic emotional-intensity scoring for a reply, used only to decide
whether to auto-trigger voice generation. Deliberately NOT another neural
model — this runs on every single chat reply and needs to be instant and
free. Keyword/pattern based, tuned toward grief-companion content
(comfort, tenderness, loss, reassurance) rather than general sentiment.

This is a trigger heuristic, not a mental-health signal — it does not
feed into or replace crisis/dependency detection in safety_service.py.
"""
import re

HIGH_EMOTION_PATTERNS = [
    r"\bi (miss|love) you\b", r"\bi'm (so |really )?proud of you\b",
    r"\bi remember when\b", r"\bmy (dear|sweet|darling)\b",
    r"\bi wish i could\b", r"\bit's okay to (cry|grieve|miss me)\b",
    r"\byou (will|'ll) always\b", r"\bnever forget\b",
    r"\bi'm (right |always )?here\b", r"\bhold(ing)? you\b",
    r"\bi'm sorry\b.{0,40}\b(pain|hurt|loss|gone)\b",
    r"\bthank you for (remembering|loving|being)\b",
]

MEDIUM_EMOTION_WORDS = [
    "miss", "love", "proud", "remember", "cherish", "grateful", "sorry",
    "gentle", "warm", "hold", "comfort", "always", "never forget",
    "heart", "tears", "cry", "hug",
]

# score threshold above which auto-voice fires
AUTO_TRIGGER_THRESHOLD = 3


def score_emotional_intensity(text: str) -> int:
    lowered = text.lower()
    score = 0
    score += 2 * sum(1 for pattern in HIGH_EMOTION_PATTERNS if re.search(pattern, lowered))
    score += sum(1 for word in MEDIUM_EMOTION_WORDS if word in lowered)
    return score


def should_auto_generate_voice(text: str) -> bool:
    return score_emotional_intensity(text) >= AUTO_TRIGGER_THRESHOLD
