"""
Turns arbitrary uploaded JSON (chat exports, structured memory notes,
a list of Q&A pairs, whatever shape someone exports) into readable text
so it can go through the same chunker/embedder as everything else.
"""
import json


def flatten_json_to_text(data) -> str:
    lines: list[str] = []
    _walk(data, path=[], lines=lines)
    return "\n".join(lines)


def _walk(node, path: list[str], lines: list[str]) -> None:
    if isinstance(node, dict):
        for key, value in node.items():
            _walk(value, path + [str(key)], lines)
    elif isinstance(node, list):
        for index, item in enumerate(node):
            if isinstance(item, (dict, list)):
                _walk(item, path + [f"[{index}]"], lines)
            else:
                label = " > ".join(path) if path else "item"
                lines.append(f"{label}: {item}")
    else:
        if node is None or node == "":
            return
        label = " > ".join(path) if path else "value"
        lines.append(f"{label}: {node}")


def parse_and_flatten_json_bytes(raw: bytes) -> str:
    try:
        data = json.loads(raw.decode("utf-8"))
    except (json.JSONDecodeError, UnicodeDecodeError) as exc:
        raise ValueError("File is not valid UTF-8 JSON") from exc
    return flatten_json_to_text(data)
