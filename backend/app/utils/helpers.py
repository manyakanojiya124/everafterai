import re
import secrets
from pathlib import Path


def safe_filename(original_name: str) -> str:
    stem = Path(original_name).stem
    suffix = Path(original_name).suffix
    slug = re.sub(r"[^a-zA-Z0-9_-]+", "-", stem).strip("-")[:60] or "file"
    return f"{slug}-{secrets.token_hex(8)}{suffix.lower()}"
