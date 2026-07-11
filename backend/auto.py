from pathlib import Path

ROOT = Path(r"C:\O\backend\app")
OUTPUT = Path(r"C:\O\backend_master.md")

ALLOWED = {
    "api",
    "core",
    "db",
    "dependecies",
    "expectations",
    "middleware",
    "models",
    "repositories",
    "schemas",
    "services",
    "tests",
    "utils",
}

with open(OUTPUT, "w", encoding="utf-8") as out:

    out.write("# EverAfter AI Backend\n\n")

    # main.py
    main_file = ROOT / "main.py"
    if main_file.exists():
        out.write("=" * 100 + "\n")
        out.write("FILE: main.py\n")
        out.write("=" * 100 + "\n\n")
        out.write("```python\n")
        out.write(main_file.read_text(encoding="utf-8"))
        out.write("\n```\n\n")

    for folder in sorted(ALLOWED):

        folder_path = ROOT / folder

        if not folder_path.exists():
            continue

        for file in sorted(folder_path.rglob("*.py")):

            if "__pycache__" in str(file):
                continue

            relative = file.relative_to(ROOT)

            out.write("=" * 100 + "\n")
            out.write(f"FILE: {relative}\n")
            out.write("=" * 100 + "\n\n")

            out.write("```python\n")

            try:
                out.write(file.read_text(encoding="utf-8"))
            except:
                out.write(file.read_text(errors="ignore"))

            out.write("\n```\n\n")

print("DONE")
print("Saved to:", OUTPUT)