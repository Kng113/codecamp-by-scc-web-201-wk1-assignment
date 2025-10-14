# 🎯 Getting Started — Post Creator Assignment

Welcome to your Week 1 Assignment! This guide will help you set up and understand the project structure.

## 📋 Prerequisites

Before you begin, ensure you have:

- ✅ Node.js 18+ installed (`node -v`)
- ✅ pnpm installed (`pnpm -v`)
- ✅ Git configured (`git config --list`)
- ✅ Firebase CLI installed (`firebase --version`)
- ✅ VS Code with ESLint & Prettier extensions

If you haven't set these up yet, refer to the environment setup guide from your cohort.

---

## 🚀 Initial Setup

### 1️⃣ Fork the Repository

1. Go to the starter repo on GitHub
2. Click the **Fork** button
3. This creates a copy under your account

### 2️⃣ Clone Your Fork

```bash
git clone git@github.com:YOUR-USERNAME/codecamp-by-scc-web-101-wk1-assignment.git
cd codecamp-by-scc-web-101-wk1-assignment
```

Replace `YOUR-USERNAME` with your GitHub username.

### 3️⃣ Install Dependencies

```bash
pnpm install
```

This installs React, TypeScript, Vite, and all dev tools.

### 4️⃣ Start Development Server

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) — you should see the Post Creator UI!

---

## 📂 Understanding the Structure

### `src/app/` — Application Shell
- `App.tsx`: Main component with state, mode toggle, layout
- `layout.css`: Global styles and responsive layout

### `src/components/` — UI Components
- `Editor.tsx`: Textarea with selection tracking
- `Preview.tsx`: Markdown renderer (you'll enhance this)
- `FloatingBar.tsx`: Toolbar with 20 operation buttons
- `Metrics.tsx`: Live text statistics display

### `src/lib/` — Core Logic (Pure Functions)
- `types.ts`: TypeScript type definitions
- `selection.ts`: ✅ Selection manipulation helpers (done!)
- `metrics.ts`: ✅ Text statistics (done!)
- `stringOps.ts`: ⚠️ **20 string operations** (you implement)

### `src/utils/` — Utilities
- `storage.ts`: ✅ localStorage for drafts (done!)

---

## 🎯 What's Already Done

We've built the foundation for you:

✅ **Project setup** (Vite, TypeScript, ESLint, Prettier)  
✅ **Layout and styling** (responsive, accessible)  
✅ **Selection system** (`selection.ts` — handles text ranges)  
✅ **Metrics calculations** (`metrics.ts` — word count, reading time, etc.)  
✅ **Storage utilities** (`storage.ts` — draft persistence)  
✅ **Component skeleton** (Editor, Preview, FloatingBar, Metrics)  
✅ **State management** (text, mode, selection in `App.tsx`)

---

## 🚧 What YOU Need to Build

### Priority 1: Implement String Operations (M3)

Open `src/lib/stringOps.ts` and implement all 20 functions:

**Batch 1 - Case Transformations:**
1. Reverse Selection
2. Uppercase
3. Lowercase
4. Title Case
5. Sentence Case

**Batch 2 - Text Cleanup:**
6. Collapse Extra Spaces
7. Trim Lines
8. Remove Punctuation

**Batch 3 - Word Operations:**
9. Sort Words A-Z
10. Unique Words

**Batch 4 - Case Styles:**
11. kebab-case
12. snake_case
13. camelCase
14. PascalCase

**Batch 5 - Analytics (show toast, don't modify text):**
15. Count Vowels/Consonants
16. Word Count
17. Character Count
18. Palindrome Check

**Batch 6 - Interactive:**
19. Find & Replace (uses prompt)
20. Wrap with Code Block

**Example Implementation:**

```typescript
export const reverseSelection: RangeOp = (input, range) => {
  return applyToSelection(input, range, text => {
    return text.split('').reverse().join('')
  })
}
```

### Priority 2: Wire Operations to FloatingBar

In `FloatingBar.tsx`, import your operations and map them to buttons:

```typescript
import { reverseSelection, toUpper, toLower, ... } from '../lib/stringOps'

const handleOp = (op: RangeOp, opName: string) => {
  onApplyOp(op, opName)
}
```

### Priority 3: Enhance Preview Mode (M4)

In `Preview.tsx`, implement markdown-lite parsing:
- `# Heading 1` → `<h1>Heading 1</h1>`
- `**bold**` → `<strong>bold</strong>`
- `*italic*` → `<em>italic</em>`
- `` `code` `` → `<code>code</code>`

### Priority 4: Deploy & Document (M5)

1. Update `.firebaserc` with your project ID
2. Build: `pnpm build`
3. Deploy: `firebase deploy`
4. Update README with your info and live URL
5. Record 60-second demo video

---

## 🧪 Development Workflow

### Running Checks

```bash
pnpm dev        # Start dev server
pnpm typecheck  # TypeScript validation
pnpm lint       # ESLint check
pnpm format     # Format code with Prettier
pnpm build      # Production build
```

### Git Workflow (Small PRs)

```bash
# Create feature branch
git checkout -b feat/string-ops-batch-1

# Make changes, then commit
git add -A
git commit -m "feat: implement reverse, upper, lower ops"

# Push and create PR
git push -u origin feat/string-ops-batch-1

# Open PR on GitHub, self-review, merge to main
```

---

## 🎓 Learning Goals

By completing this assignment, you will:

1. **Master TypeScript** (strict mode, no `any`)
2. **Understand state management** (selection tracking, controlled inputs)
3. **Write pure functions** (separation of logic from UI)
4. **Practice clean architecture** (lib vs components vs utils)
5. **Deploy to production** (Firebase Hosting)
6. **Build accessible UIs** (ARIA labels, keyboard nav)
7. **Optimize performance** (Lighthouse ≥ 90)

---

## 🆘 Getting Help

1. **Check README.md** for detailed instructions
2. **Read QUICKSTART.md** for fast reference
3. **Review code comments** — TODOs guide you
4. **Use TypeScript errors** — they tell you what's wrong
5. **Ask on Discord** — #help-web-week1

---

## ✅ Milestone Checklist

- [ ] M0: Boot + verify skeleton works
- [ ] M1: Selection system tested (already done)
- [ ] M2: Metrics display correctly (already done)
- [ ] M3: All 20 operations implemented and wired
- [ ] M4: Preview mode with markdown-lite
- [ ] M5: Deployed + README + video

---

Ready to build? Open `src/lib/stringOps.ts` and start coding! 💪

> _"Focus on one function at a time. Test it. Move to the next."_

