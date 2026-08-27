# Case study structure — and why it's this shape

Read this before adding a new case study or restructuring an existing one. It records a
decision that isn't recoverable from the HTML.

---

## The shape

Every case study uses these eight sections, in this order:

```
01  Context & problem
02  My role
03  Research
04  Goal
05 ★ Decisions & tradeoffs
06  The design
07  Outcome
08  Reflection
```

**★ `Decisions & tradeoffs` is the headline section.** It's where constraint-driven judgment
gets shown, which is the highest-value thing a design portfolio can demonstrate. Everything
else exists to set it up or follow through on it. Give it the most room.

### The two exceptions currently in the repo

**Asah has nine sections** — an extra `06 How it works` sits between Decisions and The design,
covering the RAG and multi-agent backend. Its Outcome and Reflection are therefore `08` and `09`.
Add a `How it works` section **only** when there's real technical work of the author's own to
explain. A design-only project shouldn't have one; it reads as padding.

**Performing Wellness splits `06` into four lettered sub-sections** — `6a` affinity synthesis →
`6b` the Ideal Experience Framework → `6c` six opportunity areas → `6d` designing the book
itself. It's the only page dense enough to need this, because it has three distinct synthesis
artifacts plus a physical deliverable. If a future research-only project needs the same shape,
copy `06` from that page.

**Default to the plain eight sections.** Both exceptions were earned by content that actually
existed, not chosen up front.

---

## Where it came from

The structure is the original one Kelly wrote, plus a few things cherry-picked from
[Nika's 디자인 작업 정리 템플릿](https://app.notion.com/p/nikadesigner/by-Nika-3b61d94422ae80099caed1dd4b17c5bb).
The template's full text, including its worked 메디큐 example, is transcribed in
`PORTFOLIO-REFERENCE.md` section 1 — read that rather than re-fetching the link, which needs a
logged-in browser and otherwise returns an empty page.

Nika's template is eight parts: 한 줄 요약 · Overview · Background · Problem · Goal · Solution ·
Impact · Retrospect.

### Why we cherry-picked instead of replacing

Comparing the two turned up roughly 85% overlap. The remaining differences favored Kelly's
existing structure on three counts:

1. **`Decisions & tradeoffs` beats `Solution`.** Nika's Solution section asks for the hypothesis,
   the alternatives, and the constraints — which is exactly what Decisions does, except Decisions
   makes judgment the *headline* rather than one component of a solution write-up.

2. **Student and team work needs `My role` and `Research` as standalone sections.** Nika's
   template is written for a solo designer on a shipped product, where "what did *you* do" is
   self-evident. For a team of four on a course project, it isn't — it's the first thing a
   reviewer wants to know.

3. **Nika's Goal and Impact sections assume real metrics.** Her worked example is a launched
   product with hard numbers (노쇼율 18%→11%, 8 hospitals interviewed, 3 months of tracking).
   Kelly's projects are a prize-less hackathon WIP and course projects with little or no
   quantitative data. Forcing that frame on them would make the missing data *more* conspicuous,
   not less.

### What did get adopted

- **A `Goal` section**, placed after Research and before Decisions — Nika's best idea, and the
  one thing genuinely missing. It states the bar the project had to clear *before* the solution
  is shown. Framed as **design success criteria**, not invented metrics: *"would a first-time AI
  user manage agents with zero config screens?"* — not a fabricated conversion number.

- **A `Status` row in the meta strip**, saying plainly whether the thing launched, is still in
  development, or was design-only. Nika's Overview asks this; it's the kind of thing a reviewer
  wants in the first five seconds, and it was previously buried in Outcome or absent.

- **A jargon glossary — Asah only.** That page uses "RAG" and "agent" as load-bearing terms with
  no explanation, a real gap for a non-technical reader. We deliberately did *not* add one to the
  other cases: persona, cognitive load, IA, and hi-fi prototype are standard vocabulary for this
  portfolio's audience, and explaining them would read as talking down.

---

## If a metric ever becomes real

The Goal and Outcome sections are currently written qualitatively because there's nothing else
honest to write. If any of these projects gets real usage, replace that language with an actual
measurable bar — activation, retention, completion rate — and tie Outcome back to it explicitly,
the way Nika's template does. That's the one place her structure is straightforwardly better,
and it's only blocked by missing data.
