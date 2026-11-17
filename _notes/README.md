# Publishing Obsidian notes

Copy selected Markdown notes into this folder (subfolders are supported). Add YAML front matter:

```yaml
---
title: My first note
publish: true
tags: [research, ideas]
aliases: [Another name]
---
```

Only notes with the boolean `publish: true` become website pages. Notes without it are excluded from the notes collection and graph. This is a publishing filter, not repository privacy: never commit confidential material to a public repository.

Supported connections: `[[Note name]]`, `[[folder/Note name]]`, `[[Note name|Display text]]`, and `[[Note name#Heading]]`. Titles, filenames, paths, and aliases resolve case-insensitively. Use folder paths when filenames are ambiguous. Missing, ambiguous, or unpublished targets appear as plain text with a dotted underline. Code examples are left unchanged.

Use standard Markdown for images: `![Description](/assets/img/notes/image.png)`. Copy the selected images to `assets/img/notes/`. Obsidian `![[embeds]]`, block references, and plugin-specific syntax are not supported yet. Standard Markdown links work but do not currently create graph connections or backlinks. The graph supports node dragging, background panning, scroll zoom, zoom buttons, and reset. The topic sidebar, note list, and graph follow search and topic filters; mobile uses a topic dropdown.

The Notes tab, search, graph, and backlinks update during the existing Jekyll build/deploy workflow. Do not copy `.obsidian`, your entire vault, or private attachments into the repository.


## Imported library

The current library was imported from `ObsidianNotes/MyDocs`; movies, templates, scripts, hidden files, and empty placeholders were excluded. Source files were left unchanged.

Refresh notes with `python3 scripts/import_notes.py /path/to/ObsidianNotes`. Rebuild the reference data with the Jekyll bundle: `bundle exec ruby scripts/notes_bibliography.rb < /path/to/References.bib > _data/notes_references.json`. The export retains public bibliographic fields and omits local Zotero file paths and abstracts.

Imported PNG embeds are converted to standard Markdown images. Known `@citationKey` references link to a bibliography beneath each note; the complete bibliography is under `/notes/references/`. Original citation keys are retained when unresolved.

Known source issues: missing image `Pasted image 20250203213833.png`; unmatched citation keys `HighAerodynamicLift` and `thomasAerodynamicsBirdsTails1997`. Correct these in the source vault before reimporting.

The importer also excludes BioinspiredAero, Birds List, Finance, bookSummary, and linStab. It remaps Assets/Images/Propellant Feed System to Concepts/Rocket Propulsion. Imported attachments not referenced by retained notes were removed.

Bibliography display and citation conversion are currently disabled. Reference data is retained for future use. Matching opening note titles are omitted during the build because the page layout supplies the title.

Course metadata links to the note’s topic on `/notes/?topic=...`. Topic and search filters are stored in the URL so filtered views can be bookmarked and shared.
