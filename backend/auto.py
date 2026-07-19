from pathlib import Path

ROOT = Path("app")
OUTPUT = Path("backend.md")


def build_tree(directory: Path, prefix=""):
    lines = []
    items = sorted(
        directory.iterdir(),
        key=lambda x: (x.is_file(), x.name.lower())
    )

    for index, item in enumerate(items):
        connector = "└── " if index == len(items) - 1 else "├── "
        lines.append(prefix + connector + item.name)

        if item.is_dir():
            extension = "    " if index == len(items) - 1 else "│   "
            lines.extend(build_tree(item, prefix + extension))

    return lines


with OUTPUT.open("w", encoding="utf-8") as md:

    md.write("# EverAfter AI Backend Source\n\n")

    md.write("Generated automatically.\n\n")

    md.write("---\n\n")

    md.write("## Project Tree\n\n")

    md.write("```text\n")
    md.write("app\n")

    for line in build_tree(ROOT):
        md.write(line + "\n")

    md.write("```\n\n")

    md.write("---\n\n")

    py_files = sorted(ROOT.rglob("*.py"))

    for file in py_files:

        relative = file.relative_to(ROOT.parent)

        md.write(f"# {relative}\n\n")

        md.write(f"**Location:** `{relative}`\n\n")

        md.write("```python\n")

        try:
            md.write(file.read_text(encoding="utf-8"))
        except UnicodeDecodeError:
            md.write(file.read_text(encoding="latin-1"))

        md.write("\n```\n\n")

        md.write("---\n\n")

print(f"Done! Generated {OUTPUT.resolve()}")