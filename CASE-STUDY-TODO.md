# Case study TODOs

Things left for Kelly to fill in across the case-study pages. These exist in the HTML too, as
`<span class="inline-note">[Kelly: ...]</span>` right next to where they belong — that markup is
hidden on the live site (`.inline-note { display: none; }` in `assets/css/styles.css`), so it's
easy to forget it's there. This file is the visible index so nothing gets lost in view-source.

> **This was a real live-site bug, now fixed.** `styles.css` had **two** `.inline-note` rules at
> equal specificity — `display: none` near the top and `display: inline` further down — and the
> later one won the cascade. All **12** notes were therefore visible to anyone who opened the
> site: 3 on the home page, 7 on Asah, 2 on Scrim. They are now consolidated into a single rule.
> If you ever want to see them while drafting, flip that one rule to `display: inline`.

Current count: **12 notes** — home 3 · asah 7 · health-u 0 · scrim 2.

## asah/ — Goal section added, needs review

Added a new `04 Goal` section (Nika-template-inspired) that reconstructs the team's implicit
success bar from existing copy. **Please read it and confirm it's actually right, or rewrite it**
— it's a reasonable inference, not something you told me directly.

- **`asah/index.html:51`** — Tools row only lists Figma. What else did you actually use
  (Cursor? VS Code? something for the RAG/backend work?).
- **`asah/index.html:64`** — snapshot outcome blurb: one line of test/feedback result, if you have any.
- **`asah/index.html:96`** — confirm the RAG description is accurate, or rewrite it in your own words.
- **`asah/index.html:117`** — startup failure-rate stat: a real number/source lands harder than "most."
- **`asah/index.html:119`** — name 2-3 real competitors instead of "existing tools."
- **`asah/index.html:133`** — new Goal section ends with a placeholder asking for a real,
  measurable success bar once Asah has actual usage (activation rate, retention, etc.) instead of
  the qualitative bar it has today.

## ⭐ Next thing to do: drop in the hackathon-version screenshot

**Save it as exactly `assets/images/asah/asah-old-home.png`**, then open
`asah/index.html`, find the `TODO(Kelly)` comment inside Decision 01, and delete the two
comment lines wrapping the `<div class="artifact-grid">` block (plus the `.inline-note`
paragraph right after it). That restores the before/after comparison.

Why it was commented out: that file has **never existed in this repo** — not in any commit.
The markup was written expecting it, so the live site was rendering a broken image next to the
"after" shot. Commenting it out is temporary; the comparison is worth having, since Decision 01
is entirely an argument about changing direction, and a pivot lands much harder when you can see
both directions side by side. It's also the only place in the whole portfolio that shows a
version you *abandoned*, which reads as more mature than a wall of finished screens.

One thing to decide when you restore it: the "after" image is `asah-hero.png`, the same image
already used as the case hero at the top of the page. In a labeled before/after pair that repeat
is arguably fine — it anchors "the screen you saw up top is the result of this decision" — but if
you'd rather not repeat it, swap in a different screen and adjust the caption (currently
"same greeting, but it answers as someone you can talk to", which assumes a same-screen comparison).

## Other known broken images (all pre-existing)

- `health-u/index.html:133` → `assets/images/health-u/healthu-appointment-autofill.png` — 404.
- `scrim/index.html:215,225` → `assets/images/scrim/scrim-onboarding-1.png` and `-2.png` — 404 (two images).

## scrim/ — Outcome section is essentially empty

`scrim/index.html:301-302` — two full `.inline-note` paragraphs with nothing else in the section:
what came out of the midterm user test (one participant), and how the final critique went. The
project ran March–May 2026; it's August now, so the final critique has almost certainly already
happened — this is the most stale content on the whole site and worth fixing before the other
structural stuff below.

## Structural: apply the same Nika-cherry-pick to Health U and Scrim

Once you're happy with how the new `04 Goal` section reads on Asah, the same three additions go
on the other two case studies (see the memory note `portfolio-case-study-structure-decision` for
the reasoning):
1. A `Goal` section inserted after Research, before Decisions (renumbers everything after it).
2. A short jargon glossary at the end of Context & problem, if either page uses terms a
   non-specialist reader wouldn't know.
3. A `Status` row in the meta strip (Health U and Scrim are course projects, so this would read
   more like "Course project — completed" than "in development," but worth stating explicitly).
