# Case study TODOs

Everything Kelly needs to fill in, hand off, or confirm across the three case-study pages.
Ordered by priority — top items matter most.

These also live in the HTML itself, as `<span class="inline-note">[Kelly: ...]</span>` right next
to where they belong — that markup is hidden on the live site (`.inline-note { display: none; }`
in `assets/css/styles.css`), so it's easy to forget it's there. This file is the visible index so
nothing gets lost in view-source. (Earlier there was a real bug where a duplicate `.inline-note`
rule made all of these visible to site visitors — that's fixed. If you ever want to see the notes
while drafting, flip that one rule to `display: inline`.)

**Current count: 25 notes** — home 3 · asah 7 · health-u 2 · scrim 3 · performing-wellness 10.

---

## Priority 1 — things the live site is currently missing or showing broken

### Asah's `06 How it works` is now filled in from real code — a few things worth knowing

The four placeholders in this section (RAG data/retrieval, what "supervision" means technically,
what happens when an agent is wrong, backend stack) are now written from the actual repos —
`JiwonLee06/Amazon-Hackathon` (the hackathon build) and your local clone of `hwiOh-afk/New_Asah`
(the current one). Nothing left to fill in there, but two things to check:

1. **I also softened the ownership language** in `02 My role` and the meta strip (`My role` /
   `Tools` rows) — from "I owned the backend and RAG architecture" to "backend and knowledge
   layer, built alongside a teammate, can't cleanly separate whose lines were whose." This was
   based on what you told me directly ("we did it together, I don't know exactly what was mine
   vs. my friend's, both AI-assisted") plus a code comment in `researchApi.ts` that names a
   teammate ("lee") as the owner of the Research backend. **Read both sections and confirm this
   reads right** — I erred toward defensible-under-interview-questions over impressive-sounding.
2. **The section is honest about a gap**: it says the multi-agent verification loop implied by
   "Asah supervises agents" isn't actually built yet — the `uncertain` status exists in the type,
   but nothing assigns it automatically today. If that's changed since, update the paragraph
   under "What isn't built yet."
3. **Corrected a real factual gap you flagged**: `01 Context & problem` now describes what the
   hackathon version actually did (idea viability scoring, contract/legal-document risk scanning,
   a roadmap of next steps) instead of leaving it vague. `03 Research` got a fourth finding —
   founders not knowing what to do once a business is actually running, from secondary research
   (reports/founder accounts, not primary interviews — confirmed this doesn't conflict with the
   "no primary research with founders" line already there). New **Decision 02, "The roadmap
   became a behavior, not a screen"** — the hackathon's static roadmap checklist didn't survive
   the pivot, but per what you told me, the instinct did: it's now the agents planning against a
   founder's goals and surfacing what's next, instead of a fixed checklist. **Read Decision 02
   and confirm that's an accurate description of what the agents actually do** — I wrote it from
   your one-line description, not from seeing the current planning behavior directly.
4. The commented-out before/after image caption in Decision 01 (the `asah-old-home.png` pair)
   was rewritten to match — "opens into idea validation, contract review, and a roadmap of what's
   next" instead of the vaguer "loan tips and a planning checklist." Still commented out pending
   the actual image.

Still open:
- A system diagram — save as `assets/images/asah/asah-system-diagram.png` and it'll appear
  automatically (the figure is currently commented out).
- The RAG paragraph describes the hackathon build's pipeline (chunking/Titan/FAISS) as a *past*
  system and the current Supabase/pgvector layer as *in progress*. If the current build has since
  gotten further than "in progress," this paragraph needs an update — I worked from your local
  clone, last commit Aug 9.

### Scrim's Outcome section was half-empty — now partly reconstructed

`scrim/index.html`, section `07 Outcome`. The before/after image captions already said what
testers hit (join state read as too quiet) and what changed (an unmistakable *Joined* state) —
that's now written into the prose instead of sitting in two blank paragraphs. Confirm it reads
right, and still tell me:
1. Was there a second testing round between midterm and final — what came out of it?
2. How did the final critique go — professor feedback, class reaction, anything worth a reviewer
   seeing? (The project ran March–May 2026; it's August now, so this has almost certainly already
   happened.)

### Four broken images

Each of these is referenced in the HTML but the file has never existed in the repo, so the site
is currently showing a broken image at that spot. Save each one at the **exact path** below and
it'll appear automatically — no code changes needed on your end.

| Save as this exact path | Where it's used |
|---|---|
| `assets/images/asah/asah-old-home.png` | Asah, Decision 01 — the pre-pivot hackathon home screen, for a before/after comparison. **Currently commented out of the page** so nothing looks broken; see the note in Decision 01 for how to bring it back. |
| `assets/images/asah/asah-system-diagram.png` | Asah, section 06 How it works — a diagram of the request → manager (`AgentRuntime`) → agent backend → back through the manager loop. **Also commented out**; see above. |
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

---

## New: Performing Wellness (Case 04) — added this session

Fourth case study, `performing-wellness/index.html` — the IDUS 215 research project (team of
4: Bailee, Diana, Chanhwi, Kelly), delivered as a 27-spread client book. Built from the client
book PDF, the research proposal doc, and screenshots Kelly sent from the class Miro board
(the board itself is a shared class board and wasn't otherwise readable). Home page now links
it as work row 04; Parents' GPT moved to 05.

### Three images referenced in the markup but not yet saved — currently commented out

Same pattern as the four broken-image entries above, except these were caught *before* going
live, because the source images arrived as inline chat screenshots, not files — there was
nothing to save them from. Save each at the exact path and uncomment the matching `<figure>`
(each one is right above its own `[Kelly: …]` note in the HTML):

| Save as this exact path | Where it's used | Source |
|---|---|---|
| `assets/images/performing-wellness/pw-affinity-wall.png` | Section `6a`, after "seven named themes" | The "Private Wellness" affinity-wall screenshot you sent |
| `assets/images/performing-wellness/pw-probe-plan.png` | Decision 03, "Post vs. Reality" | The "Cultural Probe Plan" doc screenshot you sent |
| `assets/images/performing-wellness/pw-early-direction.png` | Section `01`, the pivot paragraph | The "Green Generation, Grey Choices" sustainability infographic (your team's pre-pivot direction) |

### Open questions, in priority order

1. **Timeline** (meta strip) — I used "Summer Quarter 2026" from the Miro board's own title
   (`2026-SQ IDUS215 M/W`). Confirm the actual month range, the way Scrim names "Mar – May."
2. **Professor's name** (meta strip, Context row) — Scrim names one (Prof. Baker) and this page
   reads thinner without an equivalent.
3. **Recruiting numbers** (`02 My role`) — roughly how many people did you reach out to, to land
   the full pool? Did anything go wrong — no-shows, a skewed first wave?
4. **Probe compliance** (Decision 03) — you ran "Post vs. Reality" over 24 hours per participant.
   How many usable Frame A/B pairs actually came back, out of how many asked?
5. **Real client or course framing?** (`07 Outcome`) — the book is written as if there's a real
   audience. Was there an actual external client, or is "client" a course device?
6. **How the final crit went** (`07 Outcome`) — professor feedback, class response, anything a
   reviewer would want to see.
7. **Attribution on Decisions 02/03** — I wrote these as team-level decisions since I don't know
   who specifically wrote the discussion guide or proposed the "Post vs. Reality" probe. If you
   personally proposed the probe or wrote either quoted interview question, say so and I'll
   attribute it to you directly instead of the team.

---

## Priority 3 — nice to have, would make the strongest sections stronger

- **Asah** — a real number/source for the startup failure-rate stat in Research (a specific figure
  lands harder than "most startups fail because of operations, not the idea").
- **Asah** — name 2-3 real competitor products instead of "existing tools," in Research — and while
  you're there, a real example of what founders pay for this today (a tool, a hire, an outsourced
  service) would back up the new "founders already pay for this" line in `01 Context & problem`.
- **Asah** — one line of test/feedback result for the hero snapshot outcome blurb, if you have any.
- **Asah** — a personal reason this problem stuck (new prompt in `09 Reflection`, "Why this
  problem") — this is the one thing missing that turns "we built an AI tool" into a story an
  interviewer remembers. Skip it if there genuinely isn't one beyond the hackathon.
- **Asah** — show it to 3-5 real founders and write down one thing that changed because of it.
  This is the single item the source article calls the real differentiator — a test-and-iterate
  loop, even informal, over "friends said it looked good."
- **Health U** — a grade, rubric note, or specific professor comment beyond "well done," if one
  exists — Outcome currently only has classmate reactions.
- **All three** — once any of these has real usage, the qualitative Goal/Impact language should
  get replaced with an actual measurable bar (activation rate, retention, completion rate, etc.).

---

## Structural note (for me, not you)

Health U and Scrim share the 8-section shape:
`01 Context & problem · 02 My role · 03 Research · 04 Goal · 05 ★ Decisions & tradeoffs ·
06 The design · 07 Outcome · 08 Reflection`. Asah is now **9 sections** — it has an extra
`06 How it works` between Decisions and The design (technical detail on the RAG + multi-agent
system, added because that's the part of the project that's actually Kelly's own build), which
pushes its own Outcome/Reflection to `08`/`09`. Any future case study should start from the
8-section shape; add the 9th `How it works` section only if there's real backend/technical work
of its own to explain — a design-only project shouldn't get one.

Performing Wellness keeps the top-level 8-section shape too, but `06` is unusually dense: four
lettered sub-sections — `6a` sticky-note synthesis (seven named themes) → `6b` the Ideal
Experience Framework → `6c` six opportunity areas → `6d` designing the book itself. None of the
other four case studies have this many things happening under one numbered section, because none
of them have three distinct synthesis artifacts plus a physical deliverable design to cover. If a
future research-only project needs this shape again, `06` here is the template.
