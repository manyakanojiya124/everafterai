from pathlib import Path

# ==========================================================
# Configuration
# ==========================================================

# Root is the directory where this script is located
ROOT = Path(__file__).parent.resolve()

OUTPUT = ROOT / "frontend.md"

IGNORE_DIRS = {
    "node_modules",
    ".next",
    ".git",
    "dist",
    "build",
    "coverage",
    ".turbo",
    ".vercel",
    ".idea",
    ".vscode",
    "__pycache__",
}

ALLOWED_EXTENSIONS = {
    ".ts",
    ".tsx",
    ".js",
    ".jsx",
    ".css",
    ".scss",
    ".sass",
    ".html",
    ".json",
    ".md",
    ".txt",
    ".yaml",
    ".yml",
    ".env",
    ".mjs",
    ".cjs",
}

# ==========================================================
# Project Tree
# ==========================================================


def build_tree(directory: Path, prefix=""):
    lines = []

    try:
        items = sorted(
            [
                item
                for item in directory.iterdir()
                if item.name not in IGNORE_DIRS
            ],
            key=lambda x: (x.is_file(), x.name.lower()),
        )
    except PermissionError:
        return lines

    for index, item in enumerate(items):

        connector = "└── " if index == len(items) - 1 else "├── "

        lines.append(prefix + connector + item.name)

        if item.is_dir():

            extension = "    " if index == len(items) - 1 else "│   "

            lines.extend(build_tree(item, prefix + extension))

    return lines


# ==========================================================
# Collect Source Files
# ==========================================================


def source_files():
    files = []

    for ext in ALLOWED_EXTENSIONS:
        files.extend(ROOT.rglob(f"*{ext}"))

    filtered = []

    for file in files:

        if any(part in IGNORE_DIRS for part in file.parts):
            continue

        if file == OUTPUT:
            continue

        if file.name == Path(__file__).name:
            continue

        filtered.append(file)

    return sorted(filtered)


# ==========================================================
# Language Detection
# ==========================================================


def language(ext: str):

    mapping = {
        ".py": "python",
        ".ts": "typescript",
        ".tsx": "tsx",
        ".js": "javascript",
        ".jsx": "jsx",
        ".css": "css",
        ".scss": "scss",
        ".sass": "sass",
        ".html": "html",
        ".json": "json",
        ".md": "markdown",
        ".yaml": "yaml",
        ".yml": "yaml",
        ".env": "text",
        ".txt": "text",
        ".mjs": "javascript",
        ".cjs": "javascript",
    }

    return mapping.get(ext.lower(), "text")


# ==========================================================
# Export
# ==========================================================

with OUTPUT.open("w", encoding="utf-8") as md:

    md.write("# EverAfter AI Frontend Source\n\n")

    md.write("Automatically generated.\n\n")

    md.write("---\n\n")

    md.write("## Project Tree\n\n")

    md.write("```text\n")
    md.write(ROOT.name + "\n")

    for line in build_tree(ROOT):
        md.write(line + "\n")

    md.write("```\n\n")

    md.write("---\n\n")

    for file in source_files():

        relative = file.relative_to(ROOT)

        md.write(f"# {relative}\n\n")

        md.write(f"**Location:** `{relative}`\n\n")

        md.write(f"```{language(file.suffix)}\n")

        try:
            md.write(file.read_text(encoding="utf-8"))
        except UnicodeDecodeError:
            md.write(file.read_text(encoding="latin-1"))
        except Exception as e:
            md.write(f"<<Unable to read file: {e}>>")

        md.write("\n```\n\n")

        md.write("---\n\n")

print("=" * 70)
print("Frontend export completed successfully!")
print(f"Output: {OUTPUT}")
print("=" * 70)