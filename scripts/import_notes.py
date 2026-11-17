"""Import an Obsidian vault without modifying its source files."""
import argparse
import json
import re
import shutil
from pathlib import Path
from urllib.parse import quote
import yaml

parser = argparse.ArgumentParser()
parser.add_argument('source', type=Path)
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
vault = args.source / 'MyDocs'
assets = [p for p in vault.rglob('*.png') if not any(x.startswith('.') for x in p.relative_to(vault).parts)]
lookup = {}
for p in assets:
    lookup.setdefault(p.name.lower(), []).append(p)
count = 0
missing = set()
for p in sorted(vault.rglob('*.md')):
    rel = p.relative_to(vault)
    if any(x.startswith('.') for x in rel.parts) or rel.parts[0] in {'Templates', 'Scripts', 'Entertainment', 'BioinspiredAero', 'Finance', 'bookSummary', 'linStab', 'Birds List.md'}:
        continue
    if str(rel) == 'Assets/Images/Propellant Feed System.md':
        rel = Path('Concepts/Rocket Propulsion/Propellant Feed System.md')
    raw = p.read_text(encoding='utf-8-sig')
    meta = {}
    if raw.startswith('---\n'):
        _, front, raw = raw.split('---', 2)
        meta = yaml.safe_load(front) or {}
    if not raw.strip() and not any(v for v in meta.values()):
        continue
    meta.update(title=p.stem, publish=True, category=str(rel.parent), render_with_liquid=False)
    if rel.parts[0] == 'Entertainment':
        rows = ['| Detail | Value |', '| --- | --- |']
        for key in ('year', 'genre', 'director', 'cast', 'length', 'scoreImdb', 'Status'):
            if meta.get(key):
                rows.append('| ' + key + ' | ' + str(meta[key]).replace('|', '\\|') + ' |')
        raw = '\n'.join(rows) + '\n\n' + raw
    def image(match):
        target, *label = match[1].split('|')
        found = [vault / target] if (vault / target).is_file() else lookup.get(Path(target).name.lower(), [])
        if len(found) != 1:
            missing.add(target)
            return match[0]
        source = found[0]
        dest = root / 'assets/img/notes' / source.relative_to(vault)
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, dest)
        url = '/assets/img/notes/' + quote(str(source.relative_to(vault)), safe='/')
        return '![' + (label[0] if label and not label[0].isdigit() else source.stem) + '](' + url + ')'
    raw = re.sub(r'!\[\[([^\]]+\.png(?:\|[^\]]*)?)\]\]', image, raw, flags=re.I)
    dest = root / '_notes' / rel
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text('---\n' + yaml.safe_dump(meta, allow_unicode=True, sort_keys=False) + '---\n\n' + raw.lstrip())
    count += 1
print(json.dumps({'imported': count, 'unresolved_images': sorted(missing)}, indent=2))
