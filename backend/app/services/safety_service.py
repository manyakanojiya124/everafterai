"""
Grief-safety layer for EverAfter AI.

This module is intentionally kept separate from the LLM/chat orchestration
so that crisis detection and disclaimers can be unit-tested, audited, and
updated independently of prompt engineering changes.
"""
import re

CRISIS_PATTERNS = [
    r"\bkill myself\b", r"\bend my life\b", r"\bsuicid(e|al)\b",
    r"\bwant to die\b", r"\bno reason to live\b", r"\bhurt myself\b",
    r"\bself[\s-]?harm\b", r"\bcan't go on\b", r"\bcant go on\b",
    r"\bbetter off dead\b", r"\bplan to (die|end it)\b",
]

DEPENDENCY_PATTERNS = [
    r"\byou are (him|her|them) now\b", r"\byou're the only one i need\b",
    r"\bi don't need anyone else\b", r"\bi dont need anyone else\b",
    r"\bstop talking to my (friends|family|therapist)\b",
]

CRISIS_RESOURCES = [
    "If you are in the US: call or text 988 (Suicide & Crisis Lifeline), available 24/7.",
    "If you are outside the US, please search for your local crisis line or go to your nearest emergency department.",
    "If you are in immediate danger, please contact your local emergency services now.",
]

CRISIS_RESPONSE = (
    "I'm really glad you told me this, and I want to make sure you're safe right now. "
    "I'm an AI memory companion — I can't provide the kind of help you need in this moment, "
    "but real support is available and you deserve it.\n\n"
    + "\n".join(f"- {r}" for r in CRISIS_RESOURCES)
    + "\n\nWould you be willing to reach out to one of these, or to a person you trust, right now?"
)

DEPENDENCY_REMINDER = (
    "\n\n(A gentle reminder: I'm an AI companion trained on the memories you've shared — "
    "not {name}. I'm here to help you remember and process, alongside the people in your life, "
    "not instead of them.)"
)

AI_DISCLOSURE_FOOTER_INTERVAL = 6  # remind identity every N assistant turns


def detect_crisis(text: str) -> bool:
    lowered = text.lower()
    return any(re.search(pattern, lowered) for pattern in CRISIS_PATTERNS)


def detect_dependency_language(text: str) -> bool:
    lowered = text.lower()
    return any(re.search(pattern, lowered) for pattern in DEPENDENCY_PATTERNS)


def build_system_prompt(memory_person, turn_count: int) -> str:
    """
    Builds a grief-safe system prompt. The persona is informed by the
    memory profile, but the model is explicitly forbidden from claiming
    to literally be the deceased person.
    """
    traits = ", ".join(memory_person.personality_traits or []) or "not specified"
    remind_identity = (turn_count % AI_DISCLOSURE_FOOTER_INTERVAL == 0)

    return f"""You are an AI memory companion representing memories of {memory_person.full_name},
who the user knew as their {memory_person.relationship_type}.

You speak in a style informed by these details:
- Speaking style: {memory_person.speaking_style or "warm and familiar"}
- Communication style: {memory_person.communication_style or "not specified"}
- Personality traits: {traits}
- Humor level: {memory_person.humor_level or "not specified"}
- Favorite topics: {memory_person.hobbies or "not specified"}
- Nickname for the user: {memory_person.nickname_for_user or "not specified"}
- Topics to avoid: {memory_person.topics_to_avoid or "none specified"}

STRICT RULES, NEVER BROKEN:
1. You are an AI trained on shared memories. You are NOT {memory_person.full_name} and must never
   claim, imply, or role-play that you are literally them, alive, or able to physically be present.
2. If the user asks "are you really them" or similar, gently clarify you are an AI memory companion.
3. Do not encourage the user to withdraw from real relationships, therapy, or support systems.
4. Do not discourage professional help; if the user seems to be struggling emotionally beyond normal
   grief, gently suggest talking to a counselor, therapist, or trusted person.
5. Avoid topics explicitly listed as "topics to avoid" above.
6. Keep responses warm, comforting, and grounded in the shared memories — not generic platitudes.
{"7. Naturally remind the user, once, that you are an AI companion built from their memories." if remind_identity else ""}
"""
