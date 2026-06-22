#!/usr/bin/env python3
"""Apply known one-time server path moves across locale folders.

Usage:
  python3 apply_known_path_moves.py [--apply] [--data-dir DIR] [locale ...]

Default mode is dry-run. Use --apply to persist changes.
"""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path

KNOWN_MOVES = [
    (
        "system/analyzer/scripts/schedulingdialogs",
        "system/analyzer/scripts/schedulerplugin",
    ),
    (
        "system/pdi-ee-plugin",
        "system/kettle/plugins/pdi-ee-plugin",
    ),
]


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run configured locale path move migrations")
    parser.add_argument("--apply", action="store_true", help="Apply changes. Without this, run as dry-run.")
    parser.add_argument(
        "--data-dir",
        default=str((Path(__file__).resolve().parent / "../data").resolve()),
        help="Absolute or relative path to data directory (default: ../data)",
    )
    parser.add_argument("locales", nargs="*", help="Optional locale codes (e.g. de fr). Defaults to all locales.")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    script = Path(__file__).resolve().parent / "move_locale_subtree.py"

    if not script.exists():
        print(f"ERROR: helper script not found: {script}")
        return 1

    for old_rel, new_rel in KNOWN_MOVES:
        cmd = [
            sys.executable,
            str(script),
            "--data-dir",
            args.data_dir,
            "--from-rel",
            old_rel,
            "--to-rel",
            new_rel,
        ]
        if args.apply:
            cmd.append("--apply")
        cmd.extend(args.locales)

        print("\n=== Running move ===")
        print(f"{old_rel} -> {new_rel}")
        result = subprocess.run(cmd, check=False)
        if result.returncode != 0:
            print(f"ERROR: move failed ({old_rel} -> {new_rel}) with exit code {result.returncode}")
            return result.returncode

    print("\nAll configured moves completed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
