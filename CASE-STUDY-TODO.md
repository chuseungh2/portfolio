# Case study TODOs

Everything Kelly needs to fill in, hand off, or confirm across the four case-study pages.
Ordered by priority — top items matter most.

> Unresolved **factual conflicts** (where two sources disagree and picking one would be
> guessing) are not in this file — they're in **`docs/NEEDS_MY_VERIFICATION.md`** in the
> project root, one entry each with the conflicting versions side by side.

These also live in the HTML itself, as `<span class="inline-note">[Kelly: ...]</span>` right next
to where they belong — that markup is hidden on the live site (`.inline-note { display: none; }`
in `assets/css/styles.css`), so it's easy to forget it's there. This file is the visible index so
nothing gets lost in view-source. (Earlier there was a real bug where a duplicate `.inline-note`
rule made all of these visible to site visitors — that's fixed. If you ever want to see the notes
while drafting, flip that one rule to `display: inline`.)

**Current count: 30 notes** — home 3 · asah 3 · health-u 2 · scrim 3 · performing-wellness 13 · todays-stock 6.

---

## 2026-08-28 — grades, client status, and a full stats audit

Four things Kelly confirmed this round:

1. **Scrim and Health U both got an A**, professor praised the app and the features. Written into
   each `07 Outcome` — different sentences per case, not a copy-paste. Neither case names *which*
   features got singled out (Kelly didn't say), so both sections carry a `.inline-note` asking —
   naming them would be a stronger sentence than the general one there now.
2. **Performing Wellness had no real external client** — "client" is this course's name for the
   deliverable format, not a company that hired the team. Written into `01 Context` and `07
   Outcome`; the "no client adopted a recommendation" line that was already there turned out to
   be exactly right and didn't need to change.
3. **Scrim's four unsourced statistics didn't hold up.** Checked each one against a web search:
   three had no findable source, and the "almost half don't work out because they'd be alone"
   figure ran opposite to what the one relevant survey (AARP, 2018) actually found — 70% of
   exercisers there said they *prefer* working out solo. The "800 Instagram followers" quote
   didn't turn up anywhere either. Replaced all four with verified, cited figures (CDC/NHIS 2024,
   Cigna's 2020 Loneliness Index, AARP 2018) and folded the quote into the case's own narration
   instead of attributing it to an unverifiable interviewee. Source-first: `content-scrim.md` was
   updated before `scrim/index.html`, per the copy rule. Full before/after and sourcing are in
   `docs/NEEDS_MY_VERIFICATION.md` #7.
4. **Performing Wellness's statistics were checked too, but kept** — they're baked into
   `pw-secondary-research.png`, the actual book spread displayed on the page, and the book itself
   cites no institution for any of them. Changing the numbers would put the copy at odds with the
   image sitting right next to it, so they stayed. Softened "Existing research told us" to "the
   secondary research the team compiled," added three real figures from the same spread that
   weren't being used (81% prefer honest content, 74% value transparency, 70% say breaks help),
   and corrected one generation mismatch — "73% would pay more for sustainable products" is a
   Nielsen 2015 *Millennials* figure, not Gen Z; now labeled correctly.

Also: the persona-illustration question (AI-art faces vs. type-only vs. licensed stock) — Kelly's
call was to leave the current illustration as-is for now. No site change from that one.

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
4. The Decision 01 before/after is **resolved** as of 2026-08-28 — you exported the hackathon home
   screen, it's saved at `assets/images/asah/asah-old-home.png`, and it's live in Decision 01 at
   phone width. Rather than showing the new home a second time beside it, the caption points back
   to the hero at the top of the page as the "after," which keeps the same image from appearing
   twice on one page.

### 2026-08-28 — Asah was restructured (see `../docs/ASAH_CONTENT_PLAN.md`)

The editorial pass in that plan is now applied. Source of record is `../content-asah.md` (v3);
the HTML follows it. What changed on the page:

- **Prose 3,219 → ~2,600 words.** The pivot is told once (Decision 01) instead of four times;
  `06 How it works` went 769 → ~430 words; `04 Goal` is one question instead of three paragraphs.
- **Evidence moved next to the claim it backs.** Manage Team → Decision 03, Agent Hub → Decision 04,
  Office → Reflection (beside "what I'd do differently," where it argues for the self-criticism
  instead of against the caption it used to carry). `07 The design` went 6 screens → 3, and every
  caption was rewritten so it says something the body copy doesn't.
- **Two images resolved.** `asah-old-home.png` is in place (you exported it) and live in Decision 01
  at phone width. `asah-system-diagram.png` was drawn for this pass and is live in `06`.
- **Four `[Kelly: …]` notes closed** — the failure-rate figure and the competitor names were already
  in `content-asah.md` and had just drifted out of the HTML, so they were restored rather than asked
  for again; the "founders already pay for this" paragraph was deleted on your call; the old-home
  image note is moot now the image exists.
- **`asah-agent-detail.png` was recaptioned.** It's the marketplace *listing* (price, rating,
  reviews) — not the trait profile its old caption promised. The real trait radar is a different
  screen; see the table below.

Two things still open on Asah, both images:

| Capture this | Where it goes | How |
|---|---|---|
| `assets/images/asah/asah-agent-radar.png` | Decision 04, under the hiring grid | Run the app, Agent Hub → **View Details** on any agent. The panel that opens has the five-axis radar (Domain Expertise / Autonomy Level / Human Interaction / Data Dependency / Reasoning Complexity) beside the agent's quote. 2880×2048 like the others. **The figure is already written and commented out** — save the file and delete the two comment lines around it. |
| `assets/images/asah/asah-research-report.png` | `06 How it works`, after the stack paragraph | Harder: needs the Research FastAPI backend running *and* a real report run, which costs money per run. Verified this can't be captured from the frontend alone. Same deal — figure written and commented out. |

Still open:
- **2026-08-27 re-check:** pulled `hwiOh-afk/New_Asah` again (now at commit `a0200a6`, a large
  update — real Email/Research/SDR agent pages, a rewritten Manage Team/Office, `AgentRuntime`
  with real backends). Spot-checked every claim in `06 How it works` against the new code:
  `ok`/`uncertain`/`error` status, `high`/`medium`/`low`/`unverified` confidence labels,
  cancelable requests, and the RAG/pgvector status (`BACKEND_PLAN.md` still has it at "Phase
  1.5/2, not started" — `DATA_BACKEND` still defaults to `'local'`). **All of it still holds** —
  no text changes needed there.
- Also from that pass: the three broken/dummy Asah screenshots the audit flagged (hero's
  triplicated example prompt, Manage Team's blank fields, Office's identical department stats)
  turned out to already be fixed upstream. Re-captured all 7 Asah screenshots from the live
  local build (logged in via its own dev demo account, no code touched — confirmed clean
  `git status` before and after) at the same 2880×2048 the old ones were. Same filenames, so no
  HTML changes beyond the three whose pixel dimensions changed
  (`asah-manage-team.png`/`asah-calendar.png`/`asah-dashboard.png`, now 2048 tall instead of
  2212/2212/2652 — `width`/`height` attributes updated to match) and the hero caption (rewritten
  to match the new screen's actual text). See `docs/NEEDS_MY_VERIFICATION.md` #3 for the full
  before/after.

### Scrim's Outcome section was half-empty — now partly reconstructed

`scrim/index.html`, section `07 Outcome`. The before/after image captions already said what
testers hit (join state read as too quiet) and what changed (an unmistakable *Joined* state) —
that's now written into the prose instead of sitting in two blank paragraphs. Confirm it reads
right, and still tell me:
1. Was there a second testing round between midterm and final — what came out of it?
2. How did the final critique go — professor feedback, class reaction, anything worth a reviewer
   seeing? (The project ran March–May 2026; it's August now, so this has almost certainly already
   happened.)

**2026-08-27 correction:** the Before/After pair here was actually the same screen's pre-tap and
post-tap states (Join Event → Joined), not the real too-quiet confirmation screen the testers
saw — that screen was never exported. Recaptioned honestly ("before the tap" / "after the tap")
instead of claiming it shows the fix in isolation, and left an `.inline-note` asking for the real
pre-fix screen from Figma history if you want a true before/after. See
`docs/NEEDS_MY_VERIFICATION.md` #4.

### Scrim personas — restored to match `content-scrim.md` and the final deck

`scrim/index.html` 03 Research had drifted to placeholder names (Jessica/Eric/Rosie) that never
matched `content-scrim.md` (which already had Calming Carmen/Striking Stuart/Tiffany Tennis) or
the persona card image. Restored from the source doc — 8 spots across Research, Goal, Decisions,
and Reflection. One thing `content-scrim.md` has that the case study doesn't: **a Goal section**
(`04 Goal`) isn't in the source doc at all — it was written into the HTML directly at some point.
Worth adding to `content-scrim.md` so the two stay in sync, or confirming the HTML version is
fine as the source of record for that one section.

### Five missing images

Each of these is referenced in the HTML but the file has never existed in the repo. **All five
are commented out**, so nothing renders broken on the live site (verified — the site currently
loads with zero image 404s). Save each one at the **exact path** below, then uncomment the
matching `<figure>`; the restore instructions sit right next to each one in the HTML.

| Save as this exact path | Where it's used |
|---|---|
| `assets/images/asah/asah-agent-radar.png` | Asah, Decision 04 — the trait-radar panel behind "View Details" in the Agent Hub. See the 2026-08-28 Asah entry above for how to capture it. |
| `assets/images/asah/asah-research-report.png` | Asah, section 06 How it works — a report card showing confidence labels and folded citations. Needs the Research backend running and a paid report run. |
| `assets/images/health-u/healthu-appointment-autofill.png` | Health U, Decision 01 |
| `assets/images/scrim/scrim-onboarding-1.png` | Scrim, section 06 The design. **The six live screens there are now numbered 01–06** (they used to start at 03, which read as a gap). When you restore these two, renumber the live six back to 03–08. |
| `assets/images/scrim/scrim-onboarding-2.png` | Scrim, section 06 The design — same renumbering note as above. |

### Two home-page images that were rendering as placeholder text

Both were **visible to visitors** and have been removed rather than left as empty boxes.
Restore instructions are in an HTML comment at each spot in `index.html`:

| Save as this exact path | Where it's used |
|---|---|
| `assets/images/kelly-portrait.jpg` | Home, About — the slot used to render an empty bordered box labelled `[ portrait placeholder ]`. |
| ~~`assets/images/parents-gpt/`~~ | **Resolved 2026-08-28 — no longer needed.** The Parents' GPT teaser it belonged to is gone; the project shipped and became the full case at `/todays-stock/`, which deliberately has no images (see `CLAUDE.md`). |

### The Rhino playground card has nothing behind it

`index.html`, Playground card 03. It used to be `<a href="#playground">` — a link back to the
section the visitor was already in. It's now a non-interactive card reading "Gallery — coming
soon." To make it real: add the Rhino renders and the lightbox, then restore the anchor.

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

**2026-08-27, new:** `performing-wellness/index.html` section `6b` — you confirmed the study's
scope stopped at three rings (Features/Benefits/Emotions) and never defined the diagram
template's fourth ring (Sensory Cues), since this was a research-methods course, not a
product-design one. I wrote that framing into the copy directly. **Read it and confirm the
wording is right** — specifically whether "out of scope" is the accurate framing versus
something closer to "didn't get to it." If it's the latter, tell me and I'll adjust.

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
- **All three** — once any of these has real usage, the qualitative Goal/Impact language should
  get replaced with an actual measurable bar (activation rate, retention, completion rate, etc.).

---

## New: Today's Stock (Case 05) — added 2026-08-28

Replaced the disabled "Parents' GPT" placeholder row. Copy source: `../content-todays-stock.md`
(drafted from the project repo `github.com/chuseungh2/todays-stock`, including the preserved
v1.3 build package). No images — that's a decision the page argues for, not a gap; don't fill it.

### Open questions, in priority order

1. **Your own repo's docs now contradict this page, and the page is right.**
   `User_Testing_Evidence.md` and `Post_Mortem.md` both stop at v1.2 and describe the price-band
   request as unresolved. You confirmed the final KakaoTalk feedback is **v1.3's** — meaning the
   vocabulary reframing was tested and it worked. The repo is public and currently undersells its
   own ending. Worth correcting there too.

2. **Class name, professor, and start date** for the meta strip. Right now `Context` reads
   "AI 201, Project 3" and `Timeline` falls back to "Through May 2026".

3. **Grade or evaluation**, if there's one worth citing in `07 Outcome` — Scrim names its 95/100
   there and it lands.

4. **The third conversation starter** names one of your mom's real holdings in the shipped GPT;
   the page shows `[종목]` instead, per the privacy call. Confirm, or give a phrasing you prefer.

5. **A public version of the GPT with her holdings removed**, so the case can link something a
   reviewer can actually use. This is the one thing that would give an image-less case a live
   demo. Build task on your side.

6. **Two re-interview quotes** in your research notes are marked paraphrased rather than verbatim.
   They are deliberately not quoted anywhere on the page. Exact wording would strengthen `03`.

7. **One transcription call:** her message reads 브리핑해주큰 in the screenshot; the repo
   transcribes it 브리핑해주는. The page currently uses the repo's version. Your research doc's own
   rule says preserve awkward phrasing as-is — say which you want.

### Privacy decisions already applied (don't undo these)

- Her specific holdings and the exact purchase price are **out** of the case entirely.
- Her phone photo and the raw KakaoTalk screenshots are **not used**. Her quotes are typeset —
  English translation as the quote, Korean original beneath it as provenance.
- The Marketing Minute video is **removed from the portfolio** (it's still in the repo).

---

## Structural note (for me, not you)

The 8-section shape all four case studies share, why it's that shape, and when a page is allowed
to deviate from it (Asah's 9th section, Performing Wellness's lettered `06`) now live in
**`docs/case-study-structure.md`** — read that before adding or restructuring a case study.
