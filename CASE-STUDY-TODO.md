# Case study TODOs

Everything Kelly needs to fill in, hand off, or confirm across the three case-study pages.
Ordered by priority — top items matter most.

These also live in the HTML itself, as `<span class="inline-note">[Kelly: ...]</span>` right next
to where they belong — that markup is hidden on the live site (`.inline-note { display: none; }`
in `assets/css/styles.css`), so it's easy to forget it's there. This file is the visible index so
nothing gets lost in view-source. (Earlier there was a real bug where a duplicate `.inline-note`
rule made all of these visible to site visitors — that's fixed. If you ever want to see the notes
while drafting, flip that one rule to `display: inline`.)

**Current count: 16 notes** — home 3 · asah 7 · health-u 2 · scrim 4.

---

## Priority 1 — things the live site is currently missing or showing broken

### Scrim's Outcome section is close to empty

`scrim/index.html`, section `07 Outcome` — two full `.inline-note` paragraphs with nothing else
around them. The project ran March–May 2026; it's August now, so the final critique has almost
certainly already happened. This is the most out-of-date content on the whole site.

Give me, in a sentence or two each:
1. What came out of the midterm user test (one participant) — what did they hit, and what did
   you change because of it?
2. If there was a second testing round between midterm and final, what happened there.
3. How the final critique went — professor feedback, class reaction, anything you'd want a
   reviewer of this portfolio to see.

### Four broken images

Each of these is referenced in the HTML but the file has never existed in the repo, so the site
is currently showing a broken image at that spot. Save each one at the **exact path** below and
it'll appear automatically — no code changes needed on your end.

| Save as this exact path | Where it's used |
|---|---|
| `assets/images/asah/asah-old-home.png` | Asah, Decision 01 — the pre-pivot hackathon home screen, for a before/after comparison. **Currently commented out of the page** so nothing looks broken; see the note in Decision 01 for how to bring it back. |
| `assets/images/health-u/healthu-appointment-autofill.png` | Health U, Decision 01 |
| `assets/images/scrim/scrim-onboarding-1.png` | Scrim, section 06 The design |
| `assets/images/scrim/scrim-onboarding-2.png` | Scrim, section 06 The design |

---

## Priority 2 — things I wrote as an inference, need your confirmation

All three case studies now have a `Goal` section (new, inspired by Nika's template — the idea is
to state the bar the project had to clear *before* showing the solution). None of the three had
an explicit stated goal anywhere in the original copy, so I reconstructed each one from what was
already implied elsewhere in your writing. **Please read these and either confirm they're right,
or rewrite them in your own words** — they're a reasonable inference, not something you told me
directly, and Goal is exactly the kind of section where being wrong is worse than leaving blank.

- **`asah/index.html`, section `04 Goal`** — built from the pivot logic in Decision 01 and the
  "beginner-friendly" thread through the rest of the page.
- **`health-u/index.html`, section `04 Goal`** — built from the "does this make her day easier,
  or harder?" line in Research and the three design principles in 06 The design.
- **`scrim/index.html`, section `04 Goal`** — built from "make the meeting part frictionless" and
  the specific constraints in Decisions 01-03 (three-input onboarding, no dead-end screens).

Two more confirmations, both in meta strips (new `Status` row on Health U and Scrim):

- **`health-u/index.html`** — I wrote "design and demo only, never built." Confirm nothing was
  prototyped or built beyond the Figma designs.
- **`scrim/index.html`** — I left this vague ("Course project") on purpose. Your own copy in
  My role says "...hi-fi prototype, most of the build" — I can't tell from that whether "build"
  means an actual coded app or a hi-fi Figma prototype. Tell me which and I'll write the real line.
- **`asah/index.html`, section `02 My role`** — the RAG description ("pull the right business
  context into every response") — confirm it's accurate or rewrite it in your words.

---

## Priority 3 — nice to have, would make the strongest sections stronger

- **Asah** — what tools you used besides Figma (Cursor? something for the backend/RAG work?).
- **Asah** — a real number/source for the startup failure-rate stat in Research (a specific figure
  lands harder than "most startups fail because of operations, not the idea").
- **Asah** — name 2-3 real competitor products instead of "existing tools," in Research.
- **Asah** — one line of test/feedback result for the hero snapshot outcome blurb, if you have any.
- **Health U** — a grade, rubric note, or specific professor comment beyond "well done," if one
  exists — Outcome currently only has classmate reactions.
- **All three** — once any of these has real usage, the qualitative Goal/Impact language should
  get replaced with an actual measurable bar (activation rate, retention, completion rate, etc.).

---

## Structural note (for me, not you)

Asah, Health U, and Scrim all now share the same 8-section shape:
`01 Context & problem · 02 My role · 03 Research · 04 Goal · 05 ★ Decisions & tradeoffs ·
06 The design · 07 Outcome · 08 Reflection`. Any future case study should start from this shape
rather than the old 7-section one.
