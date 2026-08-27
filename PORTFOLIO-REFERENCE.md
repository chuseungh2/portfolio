# 포트폴리오 참고 자료

포폴을 수정하거나 새 케이스 스터디를 추가할 때 참고하는 외부 자료 정리본.
원문이 Notion에 있어서 링크가 죽거나 로그인이 막힐 수 있으니 여기에 옮겨 적어둠.

수집일: 2026-08-24

- [1. 디자인 작업 정리 템플릿 (by Nika)](#1-디자인-작업-정리-템플릿-by-nika) — 케이스 스터디 8단 구조
- [2. 이력서에 쓰기 좋은 AI 프로젝트 3가지 (PM 소희)](#2-이력서에-쓰기-좋은-ai-프로젝트-3가지-pm-소희) — 새 프로젝트 고를 때

---

## 1. 디자인 작업 정리 템플릿 (by Nika)

출처: https://app.notion.com/p/nikadesigner/by-Nika-3b61d94422ae80099caed1dd4b17c5bb

케이스 스터디 하나를 8개 섹션으로 정리하는 구조. 각 섹션마다 "무엇을 답해야 하는지"와
템플릿에 딸린 예시(가상의 병원 예약 서비스 '메디큐'의 노쇼 문제 해결 프로젝트)를 함께 적음.

> ⚠️ 예시가 **실제 런칭 + 정량 지표가 있는 프로젝트** 기준이라는 점은 기억해둘 것.
> 내 프로젝트(해커톤 발 WIP + 수업 프로젝트 2개)는 정량 데이터가 거의 없어서,
> 이 템플릿을 통째로 갈아끼우지 않고 필요한 부분만 골라 쓰기로 이미 결정했음.

### 📌 한 줄 요약

포폴/이력서에 바로 쓸 수 있는 한 문장. **어떤 문제**를 **어떻게** 풀어서 **어떤 결과**를 냈나?

### Overview — 개요

답해야 할 것:
- 어떤 프로젝트였고, 누가 참여했고, 얼마나 걸렸나?
- 그 안에서 내 역할은 무엇이었나?
- 실제로 개발까지 진행되어 런칭한 서비스인가? 아니면 디자인만 진행한 개인 프로젝트인가?

예시:
- 병원 예약 서비스 '메디큐'의 노쇼 문제를 해결하는 프로젝트
- 디자이너 1인(나), 앱 개발자 2인, 백엔드 개발자 2인 참여
- 기획자가 따로 없이 초반 기획부터 디자인, QA까지 모두 전담
- 동아리에서 제작한 앱으로 실제 개발하여 앱스토어 런칭

### Background — 배경

답해야 할 것:
- 프로젝트에 대한 간단한 설명 + 어떤 상황에서 프로젝트가 시작됐는지
- 특정 업계나 우리 서비스에서만 쓰이는 용어가 있다면 **여기서 설명하고 넘어갈 것**
- 포트폴리오를 보는 사람은 해당 서비스/프로젝트에 대한 지식이 **하나도 없다**는 걸 계속 생각할 것
- 관련 이미지를 첨부하면 보는 사람이 더 직관적으로 이해함

예시: 메디큐는 동네 병원 예약을 앱으로 할 수 있는 서비스. 핵심 기능에는 문제가 없었지만,
최근 병원 파트너사들로부터 "예약해놓고 안 오는 환자가 많다"는 불만이 반복 접수되기 시작함.

### Problem — 문제 정의

답해야 할 것:
- 여기서 어떤 문제/기회를 발견했나?
- 그게 단순한 짐작이 아니라 **진짜 문제라는 걸 어떻게 확인했나?** (데이터 + 리서치)

예시:
- 발견한 문제 → 병원 입장에서 노쇼가 발생하면 그 시간에 다른 환자를 받을 수 없어 손실이 크고,
  이는 곧 파트너 병원 이탈로 이어질 수 있는 사안이라 큰 문제였음
- 진짜 문제라는 확인:
  - 최근 3개월 예약 데이터 분석 결과 노쇼율 평균 18%. 특히 예약일이 3일 이상 남은 경우 27%
  - 파트너 병원 8곳 인터뷰 → 공통적으로 "리마인드 연락을 병원이 직접 전화로 해야 해서 번거롭다"
  - 노쇼 경험 환자 20명 설문 → 62%가 "예약한 걸 깜빡했다". 즉 일부러 취소한 게 아니라
    **잊은 것**이 핵심 문제라는 걸 확인

### Goal — 목표

답해야 할 것:
- 해당 문제가 해결되는 / 프로젝트가 성공하는 기준을 어떻게 설정했나?

예시:
- 노쇼율을 업계 평균 수준인 10% 이하로 낮추는 것을 목표로 설정
- 리마인드 넛지는 이미 잡힌 예약을 상기시키는 것이므로, 성공 기준은 **알림 클릭률이 아니라
  최종 방문율**로 잡음

### Solution — 해결책 도출

답해야 할 것:
- 어떤 **가설**을 기반으로 솔루션을 도출했나?
- 여러 솔루션이 있었다면 왜 그걸 최종 선택했나?
- 어떤 **제약**이 있었나? (시간, 기술, 이해관계자 의견 등)
- 어떤 **의사결정 과정**이 있었나?

예시:
- 가설: 잊어버리는 게 원인이니, 1번 알려주고 끝내는 게 아니라 예약 시점부터 방문 직전까지
  여러 접점에서 상기시키면 노쇼가 줄어들 것이다
- 검토한 세 옵션:
  - (A) 방문 1시간 전 푸시 알림 1회 강화 → 이미 존재하던 방식이라 개선 폭이 작다고 판단
  - (B) 예약~방문까지 단계별 리마인드(예약 직후 / 하루 전 / 2시간 전) + 캘린더 자동 등록 → **채택**
  - (C) 노쇼 시 페널티(재예약 제한) → 사용자 리서치에서 강한 거부감 확인돼 제외
  - 리서치에서 확인된 원인에 가장 직접적으로 대응하는 B안 채택
- 제약: 개발 리소스가 2주로 제한 → 카카오톡 알림톡 등 신규 채널 연동은 스코프에서 제외,
  기존 푸시 + 캘린더 연동만으로 범위를 좁힘
- 의사결정 과정: PM은 초반에 C안(페널티)을 강하게 원했으나, 사용성 테스트에서 "페널티가 있으면
  아예 예약을 안 할 것 같다"는 반응이 다수 나온 점을 근거로 제시해 리마인드 강화 쪽으로 조정

### Impact — 효과

답해야 할 것:
- **Goal과 연결하여** 왜 이 지표를 봤는지를 설명할 것
- 정량 지표와 정성 피드백 **양쪽 모두** 적는 게 가장 좋음

예시:
- Goal에서 노쇼율(방문 전환)을 성공 기준으로 잡았기 때문에, 알림 클릭률이 아니라 실제 방문
  데이터를 3개월간 추적
- 정량: 3개월 평균 노쇼율 18% → 11%. 신규 기능인 예약 직후 캘린더 등록 완료율 41%(목표 30% 상회)
- 정성: 파트너 병원 8곳 중 6곳이 체감상 노쇼가 줄었다고 응답, 직접 문자·전화 리마인드를 하지
  않아도 되어 업무 효율이 올랐다는 반응. 일부 환자는 "여러 번 알려주니 잊지 않을 수 있었고
  방문 준비물까지 알려줘서 좋았다"는 피드백

### Retrospect — 회고

답해야 할 것 (세 갈래):
- 아쉬웠던 점
- 새롭게 배운 점
- 해당 프로젝트를 다시 한다면 개선할 수 있을 점

예시:
- 아쉬웠던 점: 알림톡 등 채널 다각화를 못 해본 것. 앱을 잘 켜지 않는 고령 사용자층에서는
  개선 효과가 상대적으로 작았음
- 배운 점: 페널티처럼 강한 개입보다, 사용자의 실제 행동 원인에 맞춘 가벼운 개입이 더 효과적일
  수 있다는 걸 확인
- 다시 한다면: 연령대별로 노쇼 원인이 다를 수 있다는 가설을 초반부터 세우고 세그먼트별 리서치를
  먼저 진행했으면 좋았을 것. 병원별 특성도 다르므로 더 디테일한 고객 분류를 해보고 싶음

---

## 2. 이력서에 쓰기 좋은 AI 프로젝트 3가지 (PM 소희)

출처: https://app.notion.com/p/AI-3-3b60de4ed56e801686b6e42d7174574e

새 프로젝트를 추가할지 고민할 때 참고. 요지는 **"AI로 뭘 만들었다"가 아니라 그 앞뒤 과정**이
차별점이라는 것.

### 핵심 프레임

면접관이 정말 궁금해하는 건:

> 이런 문제가 있어서 **직접 사용자를 만나봤고** → 이런 해결방안을 고민했고 →
> 해결 과정에서 AI를 이렇게 활용했고 → 실제로 이런 부분을 개선했다

AI 프로젝트 자체를 만드는 건 이제 어렵지 않음. 드문 건 **실제로 자기 문제를 해결해봤고,
사용자에게 테스트해봤고, 왜 그렇게 만들었는지 면접에서 깊이 설명할 수 있는 지원자.**

### 프로젝트 선택 기준 (4가지)

1. 누구나 공감할 수 있는 실제 문제인가?
2. 실제로 누군가 **돈을 내고** 해결하고 싶어 하는 문제인가?
3. AI를 붙였을 때 기존 방식보다 더 나아지는가?
4. 내가 직접 고민하고 실험한 과정을 면접에서 이야기할 수 있는가?

### 아이디어 1 — 시니어를 위한 AI 피싱 코치

- **문제**: 피싱 피해액은 계속 느는데, 보이스피싱은 단순히 "사기 문자 판별" 문제가 아님.
  사기범은 긴급성을 만들고, 기관을 사칭하고, 송금·개인정보 제공을 유도하기 때문에 피해자가
  순간적으로 위험 신호를 알아차리기 어려움. 특히 디지털 취약계층(시니어)은 피해 확률이 더
  높은데도 이들만 타겟하는 프로덕트가 거의 없음.
- **만들 것**: 문자나 이메일을 붙여넣으면 AI가 문장 단위로 분석해 위험 신호(계좌 요구,
  공공기관 사칭, 긴급성 강조 등)가 어디서 등장하는지 짚어주고 **다음 행동까지** 알려주는 코치.
  - 출력 예: 위험도 판정 → 문제 문장 하이라이트 → 왜 위험한가 → 지금 할 일
- **차별점**: "사기야/아니야" 분류로 끝나지 않고 ① 위험한 부분을 찾아내고 → ② 이유를 설명하고
  → ③ 다음 행동까지 알려주는 걸 **설계**하는 것. 실제 시니어 3~5명에게 테스트해서
  "이 설명 보고 정말 위험하다고 느꼈나?" "어떤 표현이 가장 이해하기 어려웠나?" 피드백을 받고
  제품을 바꾸면 깊이가 완전히 달라짐. 시니어가 이해하기 쉬운 UI/UX(큰 글씨, 간단하고 명확한
  표현)까지 고민하면 **AI + UX + 사회문제**를 한 프로젝트에서 다 보여줄 수 있음.
- **MVP 범위**: 텍스트 붙여넣기 → 위험도 판정 + 의심 부분 하이라이트 → 왜 위험한지 설명 →
  다음 행동 안내
- **기술**: Frontend React 또는 간단한 HTML/JS · AI는 Claude API 또는 Gemini API ·
  배포는 Vercel(무료) · 추가 도전으로 실제 피싱 사례 테스트 데이터셋 만들고 모델 학습
- **내 스토리로 연결**: 부모님/조부모님이 받은 의심스러운 문자 / 금융·핀테크 관심에서 찾아본
  보안 문제 / 디지털 취약계층 문제에 대한 관심. **개인적인 이유 + 실제 사용자 테스트**가
  연결되면 훨씬 강한 스토리가 됨.

### 아이디어 2 — 조직 지식 Brain

- **문제**: 학생 조직은 사람이 바뀔 때마다 지식과 경험이 사라짐. 동아리장이 졸업하면
  "작년 행사는 어떻게 했지?", "왜 이 업체를 선택했지?"를 처음부터 다시 물어봐야 함.
- **만들 것**: 동아리의 Notion, Drive, 회의록, 과거 문서를 AI가 이해하게 해서, 질문하면
  과거 기록에서 **근거를 찾아** 답해주는 조직 전용 AI Brain.
- **차별점**: "조직에 이미 존재하지만 아무도 제대로 활용 못 하는 지식"을 AI가 usable하게
  만드는 것. 실제 기업에서도 돈을 내고 해결하는 문제라 수요가 강함.
- **기술**: Claude API 또는 Gemini API · 문서 연결은 Notion API / Google Drive API ·
  검색은 RAG(문서가 많아지면 필요, 처음엔 문서 몇 개를 프롬프트에 직접 넣어도 MVP 가능) ·
  시작은 Notion 문서 5~10개를 프롬프트에 붙여넣는 방식으로 충분
- **내 스토리로 연결**: 본인이 실제로 겪은 팀(동아리/학생회/리서치 랩/스타트업)에 임팩트를
  주면 강해짐. 예) "동아리 임원 교체 때마다 같은 질문이 반복되는 걸 보고, 지난 3년의 조직
  지식을 AI가 활용할 수 있도록 만들었다"

### 아이디어 3 — AI Multi-Agent 데이터 시각화

- **문제**: AI 하나에게 "이 데이터 분석하고 그래프 만들어줘"라고 하면, 결과가 그럴듯해도
  잘못된 분석이나 부적절한 차트를 스스로 발견하지 못함. 실제 기업은 분석 결과를 여러 사람이
  교차검증하는데, 개인 프로젝트에서는 이 **검증 단계**가 통째로 빠지기 쉬움.
- **만들 것**: 역할이 나뉜 여러 AI 에이전트가 서로 검증하며 데이터를 분석·시각화하는 시스템.
  Researcher(데이터 수집) → Analyst/Coder(분석 + 코드 작성) → Critic(방법/시각화 검토) →
  Executor(실행) 구조로 나누고, 문제 발견 시 다시 Analyst로 되돌리는 **검증 루프**를 만드는 것.
- **차별점**: Multi-Agent 시스템을 다뤄본 학생이 아직 많지 않고, 테크 기업들도
  "Multi-agent orchestration"을 적극 실험 중. 대부분의 AI 에이전트는 AI 하나가 답하는
  구조인데, 이건 에이전트끼리 상호작용하고 검증까지 설계한 거라 AI 애플리케이션을 넘어
  **"AI 시스템 설계 역량"**을 보여줌.
- **기술**: Multi-agent 프레임워크는 Microsoft AutoGen(오픈소스, 무료) ·
  LLM은 Claude/Gemini API · 시작은 Jupyter Notebook으로도 충분
- **내 스토리로 연결** — 아래 질문에 답해볼 것:
  - 내가 관심 있는 분야에서 어떤 분석 문제를 발견했는가?
  - 왜 여러 Agent가 필요한가?
  - 어떤 역할을 나눴는가?
  - Critic의 feedback이 실제 내 문제를 어떻게 개선했는가?

  분야별 예시: Finance → Investment Data Visualization Agent · Marketing → Marketing
  Analytics Agent · Sports → Sports Data Visualization Agent · Education → Student
  Performance Analytics Agent

  자신의 전공이나 관심 분야의 실제 문제에 적용하는 게 진짜 차별점.

### 마무리 조언

본인이 실제로 겪고 있는 문제를 찾아 바이브코딩으로 해결해보는 것도 좋은 프로젝트가 됨.
**"내가 불편했던 문제 → AI로 해결 → 실제 사용자에게 테스트 → 개선"**까지 한 번 해볼 것.

### 시작용 프롬프트 (원문 그대로)

```
Role: You are my Technical Co-Founder.
Help me turn my idea into a real, working product I can actually use, test, and put on my resume.

My Idea:
[무엇을 만들고 싶은지, 누가 사용할지, 어떤 문제를 해결하려는지 설명해주세요.
 친구에게 아이디어를 설명하듯 편하게 한국어로 작성해보세요.]

1. Understand
- First, summarize what you think my problem and target user are.
- Ask me the 3 most important questions needed to validate the idea.
- Challenge my assumptions if needed.
- Help me identify the smallest version worth building.
- Tell me if my idea is too complicated and suggest a simpler MVP.
- Do not start coding until we have a clear Version 1.

2. Plan the MVP
- Define exactly what Version 1 should and should not do.
- Explain the product flow in simple language.
- Explain the technical approach in a way a beginner can understand.
- Recommend beginner-friendly tools, APIs, and frameworks.
- Explain why you recommend each major technology.
- Before coding, give me a short Product + Technical Plan and let me confirm it.

3. Build Step by Step
- Give me working code I can run.
- Explain what each major part does so I understand what I built.
- Test each major feature before moving on.
- If there are multiple technical options, explain the tradeoffs and let me choose.

4. Make It Real
- Make the product usable, not just a demo.
- Handle obvious errors and edge cases.
- Keep the UI simple but polished.
- Help me deploy it if appropriate.

5. Validate
Once the MVP works:
- Help me identify 5 real users who have this problem.
- Give me questions to ask them.
- Help me test the product with them.

6. Make It Resume-Worthy
Help me document:
- What problem I discovered
- Why I chose this solution
- What I built
- How I used AI technically
- What I learned from real users
- What changed after testing
- Measurable results, if available

Rules
- Don't build something unnecessarily complicated.
- Don't just make a generic chatbot.
- Prioritize a real user problem over impressive-sounding technology.
- Keep me involved in important product decisions.
- Push back when my idea doesn't make sense.
- I want a real project I can explain and defend in an interview,
  not something I blindly copied.
```
