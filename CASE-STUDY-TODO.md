# Case study TODOs

Things left for Kelly to fill in across the case-study pages. These exist in the HTML too, as
`<span class="inline-note">[Kelly: ...]</span>` right next to where they belong — that markup is
hidden on the live site (`.inline-note { display: none; }` in `assets/css/base.css`), so it's
easy to forget it's there. This file is the visible index so nothing gets lost in view-source.

> Heads up: an earlier CSS bug briefly made these notes **visible on the live site** (a duplicate
> `.inline-note` rule was accidentally winning the cascade). It's fixed now, but it's why this
> file exists as a second, always-visible place to track them.

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

## Known broken images (all pre-existing, not caused by any of this session's work)

- `asah/index.html:143` → `assets/images/asah/asah-old-home.png` — 404. This is the "before" half
  of the Decision 01 before/after comparison (old mentor screen vs. new manager screen). Right now
  visitors see one broken image next to the "after" shot.
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
