# Portfolio — Seunghee (Kelly) Chu

Kelly's personal UX portfolio site. Static HTML/CSS/JS, no build step, no framework,
no dependencies. Every page is hand-written HTML sharing one stylesheet.

**Kelly works on this from two machines (a Mac mini and a MacBook), synced only through
GitHub.** Claude Code conversation history does *not* travel between them — this file and
the docs it points to are the entire handoff. If you are starting fresh on a machine, read
this file first, then `CASE-STUDY-TODO.md`.

---

## Start here

Read in this order. Each one tells you something the code can't:

| File | What it holds |
|---|---|
| **`CASE-STUDY-TODO.md`** | **The live worklist.** Everything Kelly still needs to fill in, confirm, or hand off — organized by priority, not by page. Start any case-study work here. |
| `docs/case-study-structure.md` | Why the case studies are shaped the way they are — the 8-section structure and the decision behind it. Read before adding or restructuring a case study. |
| `PORTFOLIO-REFERENCE.md` | Transcribed external guides (Nika's case-study template in full, plus an AI-project-ideas guide). The originals are behind a Notion login that plain fetching can't reach — **read this instead of re-fetching those links.** |

---

## Layout

```
index.html                 home — hero, work index, about, playground, contact
asah/index.html            case 01 — AI business manager (hackathon → WIP product)
health-u/index.html        case 02 — course project, design only
scrim/index.html           case 03 — course project
performing-wellness/       case 04 — research project, delivered as a client book
todays-stock/              case 05 — Custom GPT built for Kelly's mom; no screens, by decision
assets/css/styles.css      the entire stylesheet, all pages
assets/js/main.js          the entire script
assets/images/<case>/      per-case exported artifacts
resume.pdf                 linked from the nav
```

**Case 05 has no images, and that is deliberate.** Today's Stock shipped as a ChatGPT Custom
GPT — the project's central decision was *not* to build an interface, so there are no screens to
export. Its artifacts are typeset instead: a forbidden/permitted vocabulary table, monospace
`.spec-block` prompt strings, and an `.answer-steps` list, all styled in `styles.css` under the
"Today's Stock — typeset artifacts" heading. Do not "fix" this by mocking up fake screens; the
absence is argued for in Decision 01 on the page itself.

(It replaced the disabled "Parents' GPT" placeholder row on 2026-08-28 — same project, renamed,
promoted from teaser to full case. Copy source: `../content-todays-stock.md`.)

## Running it

```bash
python3 -m http.server 8123
```

`.claude/launch.json` already configures this, so the preview tools can start it by name
(`portfolio-static`). Open a page directly — `http://localhost:8123/asah/`.

Use a server rather than opening the file directly: the case pages use root-relative-ish
paths (`../assets/...`) that behave differently under `file://`.

## Deploying

Push to `main`. There's no CI, no build, no bundler — what's in the repo is what ships.
That also means **a broken image path is live the moment it's pushed**; see the broken-image
table in `CASE-STUDY-TODO.md` for the ones currently parked.

---

## Conventions that aren't obvious from the code

### `.inline-note` — the TODO markup

Open questions live in the HTML itself, right where they belong:

```html
<span class="inline-note">[Kelly: which professor taught this?]</span>
```

These are **hidden on the live site** by `.inline-note { display: none; }` in
`assets/css/styles.css`. Two things to know:

1. **Every one of them is also indexed in `CASE-STUDY-TODO.md`.** If you add, resolve, or
   remove an inline note, update that file's count and its matching entry in the same commit —
   the index only works if it stays true.
2. **This pattern has failed once already.** Two conflicting `.inline-note` rules at equal
   specificity (`display:none` and `display:inline`) meant the later one won, and all 16 notes
   were visible to visitors on the live site. Fixed — but if you touch that rule, verify in a
   browser that notes are actually hidden before pushing.

### Images that don't exist yet

When a case study needs an image Kelly hasn't exported, **comment out the whole `<figure>`**
rather than leaving a live `<img>` pointing at a missing file — otherwise it renders as a broken
image on the deployed site. Leave a comment saying the exact path to save to and how to restore
it, and add a row to the broken-image table in `CASE-STUDY-TODO.md`. Several figures are parked
this way right now.

### Writing voice

Kelly's copy is plain-spoken and specific, and it states tradeoffs out loud ("we decided X was
worth more than Y"). Match it. Two standing rules from her:

- **Don't invent numbers, outcomes, or research findings.** These are student and
  hackathon projects with little quantitative data. Where a claim needs a number Kelly hasn't
  given, write an `.inline-note` asking for it — don't fill the gap with something plausible.
- **Prefer defensible over impressive.** Ownership language especially: she'd rather a case
  study survive an interviewer's follow-up question than sound bigger. Team work gets described
  as team work.

---

## Current state (Aug 2026)

- `main` — where the case-study writing happens. All five case studies are structurally
  complete; what's left is Kelly's content, tracked in `CASE-STUDY-TODO.md`.
- `redesign` — a separate branch redesigning the **home page** visuals (split stylesheet,
  real work imagery, a JS engine for scroll/lightbox). It predates both the Performing Wellness
  and Today's Stock case studies, so merging it will need both carried across. Don't mix the two lines of work.
