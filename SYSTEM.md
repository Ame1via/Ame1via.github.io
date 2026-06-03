# Site System

This document preserves the current internal logic of the site for future Codex sessions. It is an internal maintenance document and must not be published as a public page.

## Core Structure

```text
/
Entrance

/blog/
Fragments

/hidden/
Stage

/room/nun-agent/
Cell
```

## Layer Definitions

- **Entrance**: the exterior. It should not explain the owner. It offers only the entry into Fragments and the presence of Nun Agent.
- **Fragments**: the public language layer. It contains posts, symbols, dates, axis navigation, excerpts, archive access, and individual fragment pages.
- **Stage**: the hidden meta-level at `/hidden/`. It contains the sentence `我们来解构这一切吧`. The word `解构` is the active entry into Cell and reveals `défaire` on hover.
- **Atlas**: the object of deconstruction at `/atlas/`. It is the relation space for place, time, state, theory, and future diagrammatic structures.
- **Cell**: Nun Agent's operating room at `/room/nun-agent/`. It is not the object being deconstructed. It is a scene layer where Nun Agent manages fragments and triggers low-intensity events.

## Conceptual Roles

- **Nun Agent**: current working name only. It is the manager/guardian of the Cell, not the master. The final name is undecided. Keep the visual identity stable.
- **a / remainder**: the absent master. It is not a character, avatar, or explicit object. It is the remainder that cannot be fully expressed by language but drives creation.
- **The Other**: language/system/stage. It is the symbolic field where fragments can be written and organized.

Current system logic:

```text
language-expressible material -> Fragments
processing / decomposition -> Stage and Cell
unabsorbed remainder -> a
manager of processing -> Nun Agent
```

## Current Interactions

- Homepage:
  - `Fragments` leads to `/blog/`.
  - Nun Agent reacts to the entry hover.
  - Repeated interaction with the mark can reveal Stage.

- Fragments:
  - Each post has `symbol`, `accent`, optional glow coordinates.
  - Hover reveals only a short excerpt.
  - A subtle right-side axis maps posts.
  - The language waterfall must not appear here.

- Stage:
  - Shows `我们来解构这一切吧`.
  - Hover on `我们` shifts the speaker toward `你`, making the observer responsible for the act.
  - `解构` is the link to Atlas.
  - Nun Agent is present on Stage. Clicking Nun Agent enters Cell.
  - Hover on `解构` reveals `défaire` and a subtle decomposition animation.

- Cell:
  - Background is `assets/nun-agent-room-bg.png`.
  - Nun Agent uses existing stable assets.
  - Clicking Nun Agent triggers a translated/symbolic language waterfall.
  - Shelf scene shows fragment symbols.
  - Window scene changes light and shows a short system phrase.
  - Desk scene shows latest fragment title/excerpt and uses the reading state.
  - Language waterfall uses Latin/symbol/concept tokens, not raw fragment text.

## Nun Agent Asset Rules

- Do not redraw the character from scratch unless the user provides a clear new character specification.
- Preserve the current visual identity: silhouette, outfit, face, proportions, and dark gothic tone.
- Safe derived states:
  - `nun-agent-idle.gif`
  - `nun-agent-waving.gif`
  - `nun-agent-running-left.gif`
  - `nun-agent-running-right.gif`
  - `nun-agent-reading.gif`
  - `nun-agent-compiling.gif`
- New states should be derived from existing assets when possible.

## Fragment Front Matter

Use this shape:

```yaml
---
layout: post
title: "Title"
symbol: "lack"
accent: "#6f1720"
glow_x: 78
glow_y: 32
moon_x: 19
moon_y: 20
---
```

Guidelines:

- `symbol`: short conceptual tag, e.g. `lack`, `vertigo`, `rule`, `wine`, `dream`.
- `accent`: article accent color.
- `glow_x`, `glow_y`, `moon_x`, `moon_y`: optional Fragments hover glow coordinates.
- Fragment pages should stay concise unless a longer mode is intentionally introduced.

## Publishing Rules

- Default workflow: modify locally, preview if requested, publish only after user confirmation.
- Exception: if user explicitly says to publish directly, commit and push.
- Never commit `CODEX_CONTEXT.md`.
- Internal docs must stay excluded from Jekyll output.
- Current Git executable is GitHub Desktop bundled Git:

```text
C:\Users\123\AppData\Local\GitHubDesktop\app-3.5.12\resources\app\git\cmd\git.exe
```

## Internal Files

Keep these excluded from site output:

- `PROJECT.md`
- `CODEX_CONTEXT.md`
- `FRAGMENTS_GUIDE.md`
- `SYSTEM.md`
- `blog1.html`
- `scripts/`

## Current Risk Areas

- Cell can become too complex. Add scenes only if they support the processing/management concept.
- Do not make Nun Agent into a mascot/chat character. It is a manager.
- Do not make `a` explicit as a character or icon. Its power is absence/remainder.
- Mobile behavior needs practical checks after changes.
- Avoid turning Fragments into a dense dashboard. Archive handles full indexing.

## Atlas Rules

- Atlas uses a retroconstructive method: fragments are written first, then decomposed into relations.
- Current axes: `place`, `time`, `body`, `state`, `theory`.
- Public Atlas should be medium-narrative and high-implication, with minimal explanatory text.
- The primary Atlas visual should preserve a tree / branching diagram image.
- Atlas maps only the expressible and arrangeable material.
- `a / remainder` stays outside the map and should not become a visible character, mascot, or complete diagram node.
- `ATLAS.md` is the internal maintenance table for fragment decomposition and must stay excluded from public output.
