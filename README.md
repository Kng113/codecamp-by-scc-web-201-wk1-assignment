# 🧠 Week 1 Assignment — Post Creator v1 (Medium-style) + 20 String Tools

**Duration:** 10–12 hours  
**Stack:** React + TypeScript (Vite), CSS, Firebase Hosting  
**Mission:** Build a Medium-style **Post Creator** with:

- **Edit mode** (textarea) and **Preview mode** (rendered view)
- A **floating toolbar** that applies **20 string operations** to the current selection (or whole text)
- **Reading-time** estimate (200 wpm) shown in both modes
- Clean architecture: **pure functions** for string ops + thin UI wiring
- **Live deploy** (Firebase) + **60-second demo video**

> ⚠️ Read **top to bottom**. Do steps in order. Ask for help **after** you've tried the stated checks.

---

## 🧭 You will deliver

1. **Live App URL** (Firebase Hosting)
2. **Public GitHub Repo** (with clean commits + README)
3. **60-sec Demo Video** (screen + voice)
4. **README**: features, run/deploy steps, "What I learned", Lighthouse scores

**Deadline:** Saturday 11:59 PM (NPT)

---

## 📦 Repo Setup (first steps)

1. **Fork** the starter:

   ```
   https://github.com/sammanthp007/codecamp-by-scc-web-101-wk1-assignment
   ```

2. **Clone your fork**:

   ```bash
   git clone git@github.com:YOUR-USERNAME/codecamp-by-scc-web-101-wk1-assignment.git
   cd codecamp-by-scc-web-101-wk1-assignment
   pnpm install
   pnpm dev
   ```

3. Open `http://localhost:5173`. You should see a very simple 2-panel skeleton (Edit/Preview).

**Branching rule** (keep PRs small ≤ 300 LOC):

```bash
git checkout -b feat/<short-feature-name>
# after a small chunk of work:
git add -A
git commit -m "feat: <what you did>"
git push -u origin feat/<short-feature-name>
# open PR to main, self-review, merge
```

---

## 🏗️ Starter Structure (what's inside)

```
week1-assignment-post-creator/
├─ public/
├─ src/
│  ├─ app/
│  │  ├─ App.tsx            ← app shell: header + mode toggle + layout
│  │  └─ layout.css         ← global styles (feel free to improve)
│  ├─ components/
│  │  ├─ Editor.tsx         ← textarea editor with selection-aware handlers
│  │  ├─ Preview.tsx        ← markdown-lite rendering + reading-time badge
│  │  ├─ FloatingBar.tsx    ← floating toolbar that calls string ops
│  │  └─ Metrics.tsx        ← live words/chars/sentences/reading-time
│  ├─ lib/
│  │  ├─ stringOps.ts       ← implement 20 pure string utilities here
│  │  ├─ selection.ts       ← helpers to apply ops to selection ranges
│  │  ├─ metrics.ts         ← reading time, counts, etc.
│  │  └─ types.ts           ← shared types (SelectionRange, ApplyResult)
│  ├─ utils/
│  │  └─ storage.ts         ← localStorage save/load (drafts + mode)
│  ├─ index.css
│  └─ main.tsx
├─ index.html
├─ tsconfig.json
├─ eslint.config.js
├─ .prettierrc
└─ README.md
```

**Rules**

- All string logic = **pure functions** in `lib/stringOps.ts`. No DOM, no React here.
- Selection math (start/end, splice) done via `lib/selection.ts`.
- Components are thin: read textarea, call ops, write updated text.
- **No `any`**. Add types to `lib/types.ts` as needed.

---

## 🎯 The 20 String Tools (must implement all)

> Each applies to **current selection**; if nothing selected, apply to **entire text**.
> Return **both** `newText` and a **sensible new selection** (keep selection around transformed text).

| #   | Tool (Selection-First)        | What it does (short)                             | Core ideas                  |
| --- | ----------------------------- | ------------------------------------------------ | --------------------------- |
| 1   | **Reverse Selection**         | `abc → cba`                                      | `split/reverse/join`        |
| 2   | **Uppercase**                 | `hello → HELLO`                                  | case ops                    |
| 3   | **Lowercase**                 | `HELLO → hello`                                  | case ops                    |
| 4   | **Title Case**                | `welcome to scc` → `Welcome To Scc`              | word map                    |
| 5   | **Sentence Case**             | first letter upper, rest lower                   | sentence split + normalize  |
| 6   | **Remove Extra Spaces**       | collapse multiple spaces → single                | regex replace               |
| 7   | **Trim Lines**                | trims each line                                  | split lines + `trim()`      |
| 8   | **Sort Words (A→Z)**          | words alphabetical (by spaces/punct)             | tokenize + sort             |
| 9   | **Unique Words**              | keep unique (case-insens), output space-joined   | `Set`, normalize            |
| 10  | **Remove Punctuation**        | strip punctuation (keep letters, digits, spaces) | regex filter                |
| 11  | **Kebab-case**                | `Hello World` → `hello-world`                    | normalize + `-` join        |
| 12  | **snake_case**                | `Hello World` → `hello_world`                    | normalize + `_` join        |
| 13  | **camelCase**                 | `Hello world` → `helloWorld`                     | word map + join             |
| 14  | **PascalCase**                | `hello world` → `HelloWorld`                     | word map + join             |
| 15  | **Count Vowels/Consonants**   | returns counts (show in Metrics & toast)         | regex classify              |
| 16  | **Word Count (Selection)**    | counts words in selection (toast)                | split + filter              |
| 17  | **Character Count**           | counts chars with/without spaces (toast)         | length + filter spaces      |
| 18  | **Palindrome Check**          | selection palindrome? (toast with ✅/❌)           | normalize + reverse compare |
| 19  | **Find & Replace (Prompted)** | prompt for find/replace; replace in selection    | controlled prompts + regex  |
| 20  | **Wrap with Code Block**      | wraps selection with triple backticks            | string wrap + preserve      |

> **Toast** = a small, dismissible message near toolbar (we provide a minimal CSS toast; no library).

**Displayed Metrics (top-right badge & `Metrics` component):**

- Words • Characters • Sentences • Paragraphs • **Reading time** (~200 wpm)

---

## 🪜 Step-by-Step Build Plan (follow in order)

### M0 — Boot + Commit Hygiene (30–45 min)

1. `pnpm dev` → page opens.
2. In `App.tsx`, confirm:

   - **Mode toggle** (`Edit` / `Preview`)
   - Header with app title + reading-time chip
   - Main layout with left (Editor + FloatingBar) and right (Preview)

3. Commit:

   ```bash
   git add -A
   git commit -m "chore: confirm scaffold boots (edit/preview skeleton)"
   ```

---

### M1 — Text State + Selection Plumbing (60–90 min)

**Goal:** A controlled `<textarea>` that tracks **cursor/selection** so ops can target it.

1. In `Editor.tsx`:

   - Use a controlled `<textarea>`: `value={text}`, `onChange={...}`
   - Track **selectionStart** and **selectionEnd** on:

     ```tsx
     onSelect={(e) => setSel({ start: e.currentTarget.selectionStart, end: e.currentTarget.selectionEnd })}
     onKeyUp / onMouseUp → also update selection (users can select via keyboard or mouse)
     ```

   - Expose `text`, `setText`, and `sel` (selection range) up via props or context.

2. In `lib/types.ts`, define:

   ```ts
   export type SelectionRange = { start: number; end: number }
   export type ApplyResult = { newText: string; newSelection: SelectionRange }
   export type StringOp = (input: string) => string
   export type RangeOp = (input: string, range: SelectionRange) => ApplyResult
   ```

3. In `lib/selection.ts`, implement helpers:

   ```ts
   // returns { before, selected, after }
   export function sliceByRange(input: string, range: SelectionRange) { ... }

   // glue segments and compute the new selection around the transformed chunk
   export function glue(before: string, transformed: string, after: string): ApplyResult { ... }

   // if no selection (start===end), treat it as "whole doc"
   export function normalizeRange(input: string, range: SelectionRange): SelectionRange { ... }
   ```

4. Wire **FloatingBar → Editor**: clicking an op button calls a handler that:

   - Reads current `text` + `sel`
   - Calls the **range op**
   - Writes back `newText` and updates selection

5. Commit:

   ```bash
   git checkout -b feat/selection-pipeline
   git add -A
   git commit -m "feat: selection model + helpers + editor wiring"
   git push -u origin feat/selection-pipeline
   # open PR, self-review, merge
   ```

**Sanity checks**

- Selecting a slice shows the selection range numbers in console (temporary debug).
- Clicking a dummy op (for now) replaces selected text with `[…]` and preserves selection.

---

### M2 — Core Metrics + Reading Time (45–60 min)

1. In `lib/metrics.ts`, implement **pure** helpers:

   ```ts
   export const countWords = (s: string): number => s.trim().split(/\s+/).filter(Boolean).length
   export const countChars = (s: string, withSpaces = true): number =>
     withSpaces ? s.length : s.replace(/\s+/g, '').length
   export const countSentences = (s: string): number =>
     s.split(/(?<=[.!?])\s+/).filter(Boolean).length
   export const countParagraphs = (s: string): number =>
     s.split(/\n{2,}|\r\n{2,}/).filter(p => p.trim().length > 0).length
   export const estimateReadingTimeMin = (s: string, wpm = 200): number =>
     Math.max(1, Math.ceil(countWords(s) / wpm))
   ```

2. In `Metrics.tsx`, display live metrics for **entire doc**.

3. Add a **top-right reading-time chip** visible in both modes (Edit/Preview).

4. Commit:

   ```bash
   git checkout -b feat/metrics-reading-time
   git add -A
   git commit -m "feat: metrics + reading-time chip (live)"
   git push -u origin feat/metrics-reading-time
   ```

---

### M3 — Implement the 20 Tools (3–4 hours, do in small batches)

> Implement **as pure `RangeOp`s** in `lib/stringOps.ts`.
> Each function:
>
> 1. gets `input` + `range`
> 2. slices into `{before, selected, after}`
> 3. transforms **`selected`** (or whole doc if selection empty)
> 4. returns `{ newText, newSelection }` with selection spanning the transformed segment.

**Batch 1 (mechanical)** — Reverse / Upper / Lower / Title / Sentence

```ts
export const reverseSelection: RangeOp = (input, range) => { ... }
export const toUpper: RangeOp = (input, range) => { ... }
export const toLower: RangeOp = (input, range) => { ... }
export const toTitle: RangeOp = (input, range) => { ... }
export const toSentenceCase: RangeOp = (input, range) => { ... }
```

**Batch 2 (cleanup)** — Collapse spaces / Trim lines / Remove punctuation

```ts
export const collapseSpaces: RangeOp = (input, range) => { ... }
export const trimLines: RangeOp = (input, range) => { ... } // per-line trim in selection
export const removePunct: RangeOp = (input, range) => { ... } // keep letters, digits, space
```

**Batch 3 (word transforms)** — Sort words / Unique words / Case styles

```ts
export const sortWordsAZ: RangeOp = (input, range) => { ... }
export const uniqueWords: RangeOp = (input, range) => { ... }
export const toKebab: RangeOp = (input, range) => { ... }
export const toSnake: RangeOp = (input, range) => { ... }
export const toCamel: RangeOp = (input, range) => { ... }
export const toPascal: RangeOp = (input, range) => { ... }
```

**Batch 4 (analytics & checks → toast results)**

> These **do not replace text** (unless specified). They fire a **toast** result + preserve selection.

```ts
export const countVowelsConsonantsSel: RangeOp = (input, range) => { ... } // toast: V=, C=
export const wordCountSel: RangeOp = (input, range) => { ... }             // toast: words=
export const charCountSel: RangeOp = (input, range) => { ... }             // toast: chars(with/without spaces)
export const palindromeCheckSel: RangeOp = (input, range) => { ... }       // toast: ✅/❌
```

**Batch 5 (interactive)** — Find & Replace (prompt), Wrap with code block

````ts
export const findReplacePrompt: RangeOp = (input, range) => { ... } // window.prompt safe-usage
export const wrapWithCodeBlock: RangeOp = (input, range) => { ... } // ```\n<sel>\n```
````

**Wire to `FloatingBar.tsx`**

- Render a compact **floating panel** that follows the textarea (position: sticky or absolute near top of the editor).
- Group buttons (cleanup, case, words, analytics, misc).
- On click, call the op, update text + selection, and optionally show a **toast** for analytics tools.

**Minimum Button Labels**

- Reverse, UPPER, lower, Title, Sentence, Spaces-, TrimLines, Punct-, Sort A-Z, Unique, kebab-, snake\_, camel, Pascal, V/C Count, Words#, Chars#, Palindrome?, Find/Replace, `Wrap ``` `

**Commit in small batches**:

```bash
git checkout -b feat/string-ops-batch-1
# implement + wire 4–5 ops
git add -A && git commit -m "feat: ops batch 1 + wiring"
git push
# repeat for batch 2,3,4,5
```

**Manual Test Plan (`lib/textlab.test.plan.md`)**
Create a table per op: input, selection, expected output (and for analytics: expected toast message).

---

### M4 — Preview Mode (Markdown-lite) + A11y + Perf (2–3 hours)

**Preview (markdown-lite):**

- In `Preview.tsx`, render:

  - `# H1`, `## H2`, `### H3` → `<h1|h2|h3>`
  - `**bold**` → `<strong>`
  - `*italic*` → `<em>`
  - `` `inline` `` and `code blocks` → `<code>` / `<pre><code>`
  - Paragraphs on blank lines

- **No external lib**. Write a tiny parser with simple regex in a **pure helper** (e.g., `renderMarkdownLite`).

**A11y:**

- Textarea has `aria-label="Post editor"`
- FloatingBar buttons have `aria-label` and visible focus ring
- Toast uses `role="status"` and `aria-live="polite"`
- Color contrast AA (use dark text on light backgrounds)
- Keyboard: all ops reachable by **Tab** + **Enter/Space**

**Performance:**

- Lighthouse Mobile targets: **Perf ≥ 90**, **A11y ≥ 90**, **Best Practices ≥ 90**
- Keep CSS/JS small, no images, no heavy fonts

**Commit**

```bash
git checkout -b feat/preview-a11y-perf
git add -A
git commit -m "feat: markdown-lite preview + a11y + Lighthouse ≥ 90"
git push
```

---

### M5 — Save Draft, Mode Persistence, Deploy + Docs (45–60 min)

**Local draft** (`utils/storage.ts`):

```ts
export const saveDraft = (text: string) => localStorage.setItem('draft', text)
export const loadDraft = () => localStorage.getItem('draft') ?? ''
export const saveMode = (mode: 'edit' | 'preview') => localStorage.setItem('mode', mode)
export const loadMode = (): 'edit' | 'preview' => (localStorage.getItem('mode') as any) ?? 'edit'
```

- On text change → `saveDraft(text)`
- On mount → `setText(loadDraft())`
- On mode toggle → persist with `saveMode`

**Deploy**

```bash
pnpm build
firebase init hosting
# Use existing project
# Public directory: dist
# SPA: N
firebase deploy
```

Copy **Hosting URL** (e.g. `https://post-creator-yourname.web.app`).

**README update** (append):

````markdown
## 🚀 Post Creator v1 — Live

https://post-creator-<yourname>.web.app

### Implemented Ops (20/20)

Reverse • UPPER • lower • Title • Sentence • Spaces− • TrimLines • Punct− • Sort A-Z • Unique • kebab- • snake\_ • camel • Pascal • V/C Count • Words# • Chars# • Palindrome? • Find/Replace • Wrap ```

### What I Learned

1. [Something you learned about React]
2. [Something you learned about TypeScript]
3. [Something you learned about deployment]
````

**60-sec video** (script)

- 0–10s: introduce app, show URL
- 10–35s: select text → apply 3–4 ops
- 35–50s: switch to Preview, show markdown-lite + reading-time
- 50–60s: what you learned

Commit + push.

---

## ✅ Acceptance Checklist (must pass all)

- [ ] **20 tools** implemented, selection-aware, sensible selection preserved
- [ ] Edit/Preview modes functional; reading-time chip visible in **both**
- [ ] Metrics show Words • Chars • Sentences • Paragraphs • Reading time
- [ ] A11y: labels, keyboard access, focus ring, `aria-live` for toast
- [ ] TypeScript strict; **no `any`**
- [ ] ESLint/Prettier clean
- [ ] Lighthouse (Mobile) **Perf ≥ 90**, **A11y ≥ 90**, **Best Practices ≥ 90**
- [ ] Draft & mode persist via `localStorage`
- [ ] Firebase URL live + README + 60-sec video

---

## 🧪 Manual Test Plan

Create a file `lib/textlab.test.plan.md` with tables for each op:

- **Input text**
- **Selection range** (start, end)
- **Expected newText** + **expected newSelection** (start..end)
- For analytics ops: **expected toast** content

Example:

| Op      | Input           | Range         | Expected newText | Expected selection |
| ------- | --------------- | ------------- | ---------------- | ------------------ |
| Reverse | `"hello world"` | `start=0,end=5` | `"olleh world"`  | `0..5`             |

---

## 🛠️ Troubleshooting

- **Selection not preserved** → check `glue(before, transformed, after)` computes `start = before.length`, `end = before.length + transformed.length`.
- **Ops affect wrong part** → ensure you normalize empty selection to whole doc.
- **Prompt blocks UI** → do quick prompts; for extra credit use a tiny modal (but prompts are OK).
- **Markdown breaks layout** → escape HTML before injecting into Preview (render text safely).
- **Lighthouse < 90** → remove heavy fonts, keep CSS small, avoid images.

---

## 💡 Quality Tips

- Implement ops in **batches**; test each with 2–3 examples before wiring next.
- Keep names obvious: `toKebab`, `toSnake`, `removePunct`…
- Keep UI minimal, fast, legible. Fancy comes later.
- Comment tricky selection math once; reuse helpers everywhere.

---

## 🏁 Submission (portal)

- GitHub repo URL
- Firebase live URL
- 60-sec demo video link
- Lighthouse scores (numbers or screenshot)

**Hard deadline:** Saturday 11:59 PM (NPT). Late −10% / 24 h unless pre-approved.

---

> _"You didn't just write string functions — you built a writer's tool. That's product thinking."_
> — **Code Camp by SCC**

---

## 👤 Student Info

**Name:** Karma Namgyal Ghale  
**Cohort:** Cohort#2  
**Live Demo:**  to be implemented on the next project.
**GitHub Repo:** https://github.com/Kng113/codecamp-by-scc-web-201-wk1-assignment

## 🎯 What I Learned

1. I learned to wire the ops from stringOps.ts to the floatingBar.tsx.
2. I learned to map out the connectin of App.tsx, FloatingBar.tsx, and stringOps.ts.
3. Due to time contrainst and learning from basic js and ts, I couldn't implment all the features i.e. batch 4 and batch 5.

---

## 📜 License

This assignment is part of Code Camp by SCC. For educational purposes only.

