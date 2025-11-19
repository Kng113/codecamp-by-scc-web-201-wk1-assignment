# Week 1 Assignment Starter Code Guide

This starter code provides a scaffold for building the Post Creator v1 assignment. Here's what's included and what you need to implement.

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx          ← Main app shell (TODO: complete handleApplyOp)
│   └── layout.css       ← Global styles
├── components/
│   ├── Editor.tsx       ← Textarea with selection tracking (✅ Complete)
│   ├── Preview.tsx      ← Preview component (TODO: markdown-lite rendering)
│   ├── FloatingBar.tsx ← Toolbar (TODO: wire up operations)
│   ├── Metrics.tsx     ← Metrics display (✅ Complete)
│   ├── Toast.tsx        ← Toast component (✅ Complete)
│   └── ToastContainer.tsx ← Toast container (✅ Complete)
├── lib/
│   ├── types.ts         ← Type definitions (✅ Complete)
│   ├── selection.ts     ← Selection helpers (✅ Complete)
│   ├── metrics.ts       ← Metrics calculations (✅ Complete)
│   └── stringOps.ts     ← 20 string operations (TODO: implement all)
└── utils/
    └── storage.ts       ← localStorage helpers (✅ Complete)
```

## ✅ What's Already Done

1. **Project Setup**: TypeScript strict mode, ESLint, Prettier configured
2. **Core Types**: `SelectionRange`, `ApplyResult`, `RangeOp`, etc.
3. **Selection Helpers**: `sliceByRange`, `glue`, `normalizeRange`, `applyToSelection`
4. **Metrics**: Word count, character count, sentences, paragraphs, reading time
5. **UI Components**: Editor, Metrics, Toast components
6. **Storage**: localStorage save/load for drafts and mode
7. **Basic Layout**: Edit/Preview mode toggle, header, footer

## 🎯 What You Need to Implement

### 1. String Operations (`src/lib/stringOps.ts`)

Implement all 20 operations as `RangeOp` functions:

**Batch 1 - Case Transformations:**
- `reverseSelection` - Reverse text (use `[...text]` for emoji support)
- `toUpper` - UPPERCASE
- `toLower` - lowercase
- `toTitle` - Title Case
- `toSentenceCase` - Sentence case

**Batch 2 - Cleanup:**
- `collapseSpaces` - Collapse multiple spaces
- `trimLines` - Trim each line
- `removePunct` - Remove punctuation (use Unicode property escapes)

**Batch 3 - Word Operations:**
- `sortWordsAZ` - Sort words alphabetically
- `uniqueWords` - Keep unique words only

**Batch 4 - Case Styles:**
- `toKebab` - kebab-case
- `toSnake` - snake_case
- `toCamel` - camelCase
- `toPascal` - PascalCase

**Batch 5 - Analytics (return unchanged text, show toast):**
- `countVowelsConsonantsSel` - Count vowels/consonants
- `wordCountSel` - Count words
- `charCountSel` - Count characters
- `palindromeCheckSel` - Check if palindrome

**Batch 6 - Interactive:**
- `findReplacePrompt` - Find/replace with prompts
- `wrapWithCodeBlock` - Wrap with triple backticks

### 2. Wire Up FloatingBar (`src/components/FloatingBar.tsx`)

- Import operations from `stringOps.ts`
- Create handler functions that call `onApplyOp(op, opName)`
- Replace placeholder `handleOp` calls

### 3. Complete App Logic (`src/app/App.tsx`)

- Complete `handleApplyOp` to:
  - Call the operation function
  - Update text and selection state
  - Handle analytics operations (show toast)
  - Restore textarea selection after operations

### 4. Markdown-Lite Preview (`src/components/Preview.tsx`)

Implement markdown rendering:
- Headings (`#`, `##`, `###`)
- Bold (`**text**`)
- Italic (`*text*`)
- Inline code (`` `code` ``)
- Code blocks (triple backticks)
- **IMPORTANT**: Escape HTML to prevent XSS

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run dev server:**
   ```bash
   pnpm dev
   ```

3. **Start implementing:**
   - Begin with `stringOps.ts` - implement operations one batch at a time
   - Test each operation before moving to the next
   - Wire up FloatingBar as you complete operations
   - Complete App.tsx logic to apply operations
   - Finally, implement markdown-lite preview

4. **Check your work:**
   ```bash
   pnpm typecheck  # Type checking
   pnpm lint       # Linting
   pnpm format     # Format code
   ```

## 💡 Tips

- **Use the helpers**: `applyToSelection` handles all the slicing/gluing for you
- **Test incrementally**: Implement one operation, test it, then move on
- **Selection handling**: Empty selection (caret only) should operate on whole document
- **Analytics ops**: These don't modify text - they show toast messages
- **Unicode support**: Use `[...text]` instead of `text.split('')` for emoji
- **Regex safety**: Escape special characters in find/replace

## 📝 Implementation Order (Suggested)

1. **M1**: Implement 3-5 basic operations (reverse, upper, lower, title)
2. **M2**: Wire up FloatingBar for those operations
3. **M3**: Complete App.tsx `handleApplyOp` for transform operations
4. **M4**: Implement remaining transform operations
5. **M5**: Implement analytics operations + toast handling
6. **M6**: Implement markdown-lite preview
7. **M7**: Polish, test, deploy

## 🐛 Common Issues

- **Selection not preserved**: Check that `glue` computes new selection correctly
- **Operations affect wrong part**: Ensure `normalizeRange` handles empty selection
- **Toast not showing**: Check that analytics operations are handled in `handleApplyOp`
- **Type errors**: Make sure all operations return `ApplyResult` type

## 📚 Key Files to Focus On

1. `src/lib/stringOps.ts` - Implement all 20 operations here
2. `src/components/FloatingBar.tsx` - Wire up button handlers
3. `src/app/App.tsx` - Complete operation application logic
4. `src/components/Preview.tsx` - Implement markdown rendering

Good luck! 🚀

