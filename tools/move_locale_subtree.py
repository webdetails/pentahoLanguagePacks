#!/usr/bin/env python3
"""One-time migration helper for locale subtree moves.

Usage:
  python3 move_locale_subtree.py \
    --from-rel REL --to-rel REL [--apply] [locale ...]

By default this runs in dry-run mode and only prints planned changes.
Use --apply to perform filesystem changes.
"""

from __future__ import annotations

import argparse
import os
import shutil
from pathlib import Path

def discover_locales(data_dir: Path, requested_locales: list[str]) -> list[Path]:
    if requested_locales:
        return [data_dir / code for code in requested_locales]
    return sorted([p for p in data_dir.iterdir() if p.is_dir()])


def ensure_parent(path: Path, apply_changes: bool) -> None:
    if apply_changes:
        path.parent.mkdir(parents=True, exist_ok=True)


def cleanup_empty_dirs(path: Path, stop_at: Path, apply_changes: bool) -> None:
    if apply_changes and path.exists() and path.is_dir():
        # First remove empty directories inside the moved source subtree.
        for root, _, _ in os.walk(path, topdown=False):
            current = Path(root)
            try:
                if not any(current.iterdir()):
                    current.rmdir()
            except FileNotFoundError:
                pass

    current = path
    while current != stop_at and current.exists() and current.is_dir():
        try:
            if any(current.iterdir()):
                return
        except FileNotFoundError:
            return
        if apply_changes:
            current.rmdir()
        current = current.parent


def merge_old_into_new(old_dir: Path, new_dir: Path, locale_root: Path, apply_changes: bool) -> tuple[int, int]:
    moved = 0
    conflicts = 0
    for src in sorted(old_dir.rglob("*")):
        if src.is_dir():
            continue
        rel = src.relative_to(old_dir)
        dst = new_dir / rel

        if dst.exists():
            conflicts += 1
            print(f"  [KEEP] target exists: {dst}")
            if apply_changes:
                # Source duplicate no longer needed once destination wins conflict.
                src.unlink()
                print(f"  [DROP] source duplicate: {src}")
            continue

        print(f"  [MOVE] {src} -> {dst}")
        if apply_changes:
            ensure_parent(dst, apply_changes=True)
            shutil.move(str(src), str(dst))
        moved += 1

    cleanup_empty_dirs(old_dir, locale_root, apply_changes)
    return moved, conflicts


def migrate_locale(locale_root: Path, old_rel: Path, new_rel: Path, apply_changes: bool) -> tuple[int, int, bool]:
    old_dir = locale_root / old_rel
    new_dir = locale_root / new_rel

    if not old_dir.exists():
        return 0, 0, False

    print(f"\nLocale {locale_root.name}")

    # Fast path when destination does not exist.
    if not new_dir.exists():
        print(f"  [RENAME] {old_dir} -> {new_dir}")
        if apply_changes:
            ensure_parent(new_dir, apply_changes=True)
            shutil.move(str(old_dir), str(new_dir))
        return 1, 0, True

    # Merge path when destination already exists.
    moved, conflicts = merge_old_into_new(old_dir, new_dir, locale_root, apply_changes)
    if apply_changes and old_dir.exists() and not any(old_dir.rglob("*")):
        old_dir.rmdir()
    return moved, conflicts, True


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Rename/move locale subtrees across locale folders")
    parser.add_argument("--apply", action="store_true", help="Apply changes. Without this, run as dry-run.")
    parser.add_argument(
        "--from-rel",
        required=True,
        help="Source relative path under each locale root",
    )
    parser.add_argument(
        "--to-rel",
        required=True,
        help="Target relative path under each locale root",
    )
    parser.add_argument(
        "--data-dir",
        default=str((Path(__file__).resolve().parent / "../data").resolve()),
        help="Absolute or relative path to data directory (default: ../data)",
    )
    parser.add_argument("locales", nargs="*", help="Optional locale codes (e.g. de fr). Defaults to all locales in data dir.")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    data_dir = Path(args.data_dir).resolve()
    old_rel = Path(args.from_rel)
    new_rel = Path(args.to_rel)

    if old_rel.is_absolute() or new_rel.is_absolute():
        print("ERROR: --from-rel and --to-rel must be relative paths.")
        return 1
    if old_rel == Path('.') or new_rel == Path('.'):
        print("ERROR: --from-rel and --to-rel cannot be '.'.")
        return 1
    if old_rel == new_rel:
        print("ERROR: --from-rel and --to-rel must be different.")
        return 1

    if not data_dir.exists() or not data_dir.is_dir():
        print(f"ERROR: data directory not found: {data_dir}")
        return 1

    mode = "APPLY" if args.apply else "DRY-RUN"
    print(f"Mode: {mode}")
    print(f"Data dir: {data_dir}")
    print(f"Move: {old_rel} -> {new_rel}")

    locale_dirs = discover_locales(data_dir, args.locales)
    touched_locales = 0
    total_moves = 0
    total_conflicts = 0

    for locale_root in locale_dirs:
        if not locale_root.exists() or not locale_root.is_dir():
            print(f"\n[SKIP] locale not found: {locale_root}")
            continue

        moved, conflicts, touched = migrate_locale(locale_root, old_rel, new_rel, apply_changes=args.apply)
        if touched:
            touched_locales += 1
            total_moves += moved
            total_conflicts += conflicts

    print("\nDone")
    print(f"  locales touched: {touched_locales}")
    print(f"  move operations: {total_moves}")
    print(f"  conflicts kept at destination: {total_conflicts}")

    if not args.apply:
        print("\nDry-run only. Re-run with --apply to persist changes.")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
