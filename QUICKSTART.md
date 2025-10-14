# ⚡ Quick Start Guide — Post Creator

Get your assignment environment running in 5 minutes!

## 🚀 Setup Steps

### 1️⃣ Install Dependencies

```bash
pnpm install
```

### 2️⃣ Start Dev Server

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

You'll see:
- Header with "Post Creator" title and reading-time chip
- Mode toggle button (Edit/Preview)
- Metrics section showing Words, Characters, etc.
- Editor with floating toolbar (buttons show alerts for now)

### 3️⃣ Verify Code Quality

```bash
pnpm typecheck  # TypeScript check
pnpm lint       # ESLint check
pnpm format     # Auto-format code
```

All should pass! ✅

---

## 🎯 Your Mission

Follow the **step-by-step build plan** in README.md:

### M0 — Boot + Commit Hygiene (30–45 min)
✅ Already done! The skeleton is ready.

### M1 — Text State + Selection Plumbing (60–90 min)
✅ Mostly done! But you need to wire the FloatingBar operations.

### M2 — Core Metrics + Reading Time (45–60 min)
✅ Already implemented! See `lib/metrics.ts` and `Metrics.tsx`.

### M3 — Implement the 20 Tools (3–4 hours) ⚠️ **YOUR MAIN TASK**

Open `src/lib/stringOps.ts` and implement all 20 functions:

1. Reverse Selection
2. Uppercase
3. Lowercase
4. Title Case
5. Sentence Case
6. Remove Extra Spaces
7. Trim Lines
8. Sort Words A-Z
9. Unique Words
10. Remove Punctuation
11. kebab-case
12. snake_case
13. camelCase
14. PascalCase
15. Count Vowels/Consonants
16. Word Count
17. Character Count
18. Palindrome Check
19. Find & Replace
20. Wrap with Code Block

Then wire them in `FloatingBar.tsx`!

### M4 — Preview Mode (Markdown-lite) + A11y (2–3 hours)

Enhance `Preview.tsx` to parse and render:
- Headings: `# H1`, `## H2`, `### H3`
- Bold: `**text**`
- Italic: `*text*`
- Code: `` `inline` `` and triple-backtick blocks

### M5 — Deploy (45–60 min)

```bash
pnpm build
firebase init hosting
firebase deploy
```

---

## 📁 Key Files to Edit

| File                      | What to Do                                  |
| ------------------------- | ------------------------------------------- |
| `lib/stringOps.ts`        | Implement all 20 string operations          |
| `components/FloatingBar.tsx` | Wire operations to buttons              |
| `components/Preview.tsx`  | Add markdown-lite parser                    |
| `app/App.tsx`             | Update footer with your name                |
| `.firebaserc`             | Update with your Firebase project ID        |
| `README.md`               | Add your info, learnings, live URL          |

---

## 🆘 Quick Troubleshooting

### "Buttons do nothing"
→ Implement the functions in `stringOps.ts` and wire them in `FloatingBar.tsx`

### "Selection not preserved"
→ Make sure you're using the `applyToSelection` helper from `selection.ts`

### "TypeScript errors"
→ Run `pnpm typecheck` to see details. No `any` types allowed!

### "Preview looks plain"
→ You need to implement the markdown parser in M4

---

## ✅ Success Checklist

Before submitting:

- [ ] All 20 operations work correctly
- [ ] Selection is preserved after each operation
- [ ] Edit/Preview toggle works
- [ ] Reading time updates live
- [ ] Markdown-lite renders in Preview
- [ ] Draft persists (refresh page, text remains)
- [ ] TypeScript + ESLint clean
- [ ] Lighthouse scores ≥ 90
- [ ] Deployed to Firebase
- [ ] README updated
- [ ] 60-sec demo video recorded

---

## 📚 Resources

- **React Hooks:** https://react.dev/reference/react
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/
- **String Methods:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
- **Firebase Hosting:** https://firebase.google.com/docs/hosting

---

Good luck! 🚀

> _"The best way to learn is to build something real."_

