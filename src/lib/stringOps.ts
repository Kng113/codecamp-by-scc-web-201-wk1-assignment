/**
 * String Operations
 *
 * TODO: Implement all 20 string transformation functions
 *
 * Each function should:
 * 1. Take (input: string, range: SelectionRange)
 * 2. Apply the transformation to the selected text (or whole doc if no selection)
 * 3. Return { newText, newSelection } preserving the selection around transformed text
 *
 * Use helpers from selection.ts:
 * - applyToSelection(input, range, transformFn) handles all the slicing/gluing
 *
 * For analytics operations (15-18), you'll need to:
 * - Calculate the analytics (counts, palindrome check)
 * - Return the text unchanged
 * - Show a toast message (handled in App.tsx)
 *
 * HINT: For analytics ops, you can create a helper that returns both the result
 * and a toast message. Check how App.tsx handles these.
 */

import type { RangeOp } from './types'
import { applyToSelection, normalizeRange, sliceByRange } from './selection'

// ============================================================================
// BATCH 1: Basic Case Transformations
// ============================================================================

/**
 * Reverses the selected text
 * Example: "hello" → "olleh"
 *
 * IMPORTANT: Use [...text] instead of text.split('') to handle emoji correctly
 * Example: "Hi 👋" → "👋 iH" (not broken emoji)
 */
export const reverseSelection: RangeOp = (input, range) => {
  return applyToSelection(input, range, text => {
    // TODO: Implement reverse
    // Hint: Use [...text] to handle Unicode/emoji correctly
    // Then reverse() and join('')
<<<<<<< HEAD
    return [...text].reverse().join('')
=======
    return [...text].reverse().join('');
>>>>>>> feat/reverse
  })
}

/**
 * Converts selected text to UPPERCASE
 * Example: "hello" → "HELLO"
 */
export const toUpper: RangeOp = (input, range) => {
  return applyToSelection(input, range, text => {
    // TODO: Implement uppercase
    return text.toUpperCase()
  })
}

/**
 * Converts selected text to lowercase
 * Example: "HELLO" → "hello"
 */
export const toLower: RangeOp = (input, range) => {
  return applyToSelection(input, range, text => {
    // TODO: Implement lowercase
    return text.toLowerCase()
  })
}

/**
 * Converts selected text to Title Case
 * Example: "hello world" → "Hello World"
 */
export const toTitle: RangeOp = (input, range) => {
  return applyToSelection(input, range, text => {
    // TODO: Implement title case
    // Hint: split by spaces, capitalize first letter of each word
    const txtTitle = text.split(' ')
    for (let i = 0; i < txtTitle.length; i++) {
      const firstLetter = txtTitle[i].charAt(0).toUpperCase()
      const rest = txtTitle[i].slice(1).toLowerCase()
      txtTitle[i] = firstLetter + rest
    }
    return txtTitle.join(' ')
  })
}

/**
 * Converts selected text to Sentence case
 * Example: "hello world. ANOTHER SENTENCE." → "Hello world. Another sentence."
 */
export const toSentenceCase: RangeOp = (input, range) => {
  return applyToSelection(input, range, text => {
    // TODO: Implement sentence case
    // Hint: lowercase everything, then capitalize first letter after [.!?]
    const lwrcase = text[0].charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    const txtSentence = lwrcase.split(' ')
    for (let i = 0; i < txtSentence.length; i++) {
      if (
        (txtSentence[i].includes('.') ||
          txtSentence[i].includes('!') ||
          txtSentence[i].includes('?')) &&
        txtSentence[i + 1] != null
      )
        txtSentence[i + 1] =
          txtSentence[i + 1].charAt(0).toUpperCase() + txtSentence[i + 1].slice(1)
    }
    return txtSentence.join(' ')
  })
}

// ============================================================================
// BATCH 2: Text Cleanup Operations
// ============================================================================

/**
 * Collapses multiple spaces into single spaces
 * Example: "hello    world" → "hello world"
 */
export const collapseSpaces: RangeOp = (input, range) => {
  return applyToSelection(input, range, text => {
    // TODO: Implement collapse spaces
    // Hint: replace(/\s+/g, ' ')
    return text.replace(/\s+/g, ' ')
  })
}

/**
 * Trims each line in the selection
 * Example: "  hello  \n  world  " → "hello\nworld"
 */
export const trimLines: RangeOp = (input, range) => {
  return applyToSelection(input, range, text => {
    // TODO: Implement trim lines
    // Hint: split by \n, trim each, join back
    return text.trim().split(/\s+/)
  })
}

/**
 * Removes all punctuation from selected text
 * Keeps letters, digits, and spaces
 * Example: "Hello, world!" → "Hello world"
 *
 * IMPORTANT: Use Unicode property escapes for better international support
 * Hint: replace(/[^\p{L}\p{N}\s]/gu, '')
 */
export const removePunct: RangeOp = (input, range) => {
  return applyToSelection(input, range, text => {
    // TODO: Implement remove punctuation
    // Hint: Use Unicode property escapes: /[^\p{L}\p{N}\s]/gu
    // This keeps letters (\p{L}), numbers (\p{N}), and whitespace (\s)
    return text.replace(/[^\p{L}\p{N}\s]/gu, '')
  })
}

// ============================================================================
// BATCH 3: Word-Based Transformations
// ============================================================================

/**
 * Sorts words alphabetically (A-Z)
 * Example: "zebra apple banana" → "apple banana zebra"
 */
export const sortWordsAZ: RangeOp = (input, range) => {
  return applyToSelection(input, range, text => {
    // TODO: Implement sort words
    // Hint: split by spaces, sort(), join
    return text.split(' ').sort().join(' ')
  })
}

/**
 * Keeps only unique words (case-insensitive)
 * Example: "hello world hello" → "hello world"
 */
export const uniqueWords: RangeOp = (input, range) => {
  return applyToSelection(input, range, text => {
    // TODO: Implement unique words
    // Hint: Use Set with lowercase comparison
    //const uniqueWrd = text.toLowerCase()
    //tried to implement using nested for loops but didnt work
    return [...new Set(text.toLowerCase())]
  })
}

// ============================================================================
// BATCH 4: Case Style Conversions
// ============================================================================

/**
 * Converts to kebab-case
 * Example: "Hello World" → "hello-world"
 */
export const toKebab: RangeOp = (input, range) => {
  return applyToSelection(input, range, text => {
    // TODO: Implement kebab-case
    const kebab = text.toLowerCase().split(' ')
    return kebab.join('-')
  })
}

/**
 * Converts to snake_case
 * Example: "Hello World" → "hello_world"
 */
export const toSnake: RangeOp = (input, range) => {
  return applyToSelection(input, range, text => {
    // TODO: Implement snake_case
    const snake = text.toLowerCase().split(' ')
    return snake.join('_')
  })
}

/**
 * Converts to camelCase
 * Example: "hello world" → "helloWorld"
 */
export const toCamel: RangeOp = (input, range) => {
  return applyToSelection(input, range, text => {
    // TODO: Implement camelCase
    return text
  })
}

/**
 * Converts to PascalCase
 * Example: "hello world" → "HelloWorld"
 */
export const toPascal: RangeOp = (input, range) => {
  return applyToSelection(input, range, text => {
    // TODO: Implement PascalCase
    return text
  })
}

// ============================================================================
// BATCH 5: Analytics Operations (these show toasts, don't modify text)
// ============================================================================
//
// NOTE: These operations are special - they don't modify text.
// Instead, they calculate analytics and should trigger a toast message.
//
// For now, they return unchanged text. In App.tsx, you'll need to:
// 1. Detect which operation was called
// 2. Calculate the analytics separately
// 3. Show a toast with the result
//
// Alternative approach: Create a wrapper that returns both result and toast
// (you can extend the types if needed)

/**
 * Counts vowels and consonants in selection
 * Shows result in toast, doesn't modify text
 *
 * TODO: Calculate vowels and consonants
 * Vowels: a, e, i, o, u (case-insensitive)
 * Consonants: all other letters
 *
 * Return text unchanged, but you'll need to show toast in App.tsx
 */
export const countVowelsConsonantsSel: RangeOp = (input, range) => {
  const normalized = normalizeRange(input, range)
  const { selected: _selected } = sliceByRange(input, normalized)
  //if (!text.trim()) return 0
  //return text.trim().split(/\s+/).filter(Boolean).length
  // TODO: Count vowels and consonants in selected text
  // Then return unchanged text
  // The toast will be handled in App.tsx
  // Use _selected variable above to calculate counts

  return { newText: input, newSelection: range }
}

/**
 * Counts words in selection
 * Shows result in toast, doesn't modify text
 *
 * TODO: Count words in selected text (or whole doc if no selection)
 * Use same logic as metrics.ts countWords function
 */
export const wordCountSel: RangeOp = (input, range) => {
  const normalized = normalizeRange(input, range)
  const { selected: _selected } = sliceByRange(input, normalized)
  // TODO: Count words, return unchanged text
  // Toast handled in App.tsx
  // Use _selected variable above to calculate word count

  return { newText: input, newSelection: range }
}

/**
 * Counts characters in selection (with and without spaces)
 * Shows result in toast, doesn't modify text
 *
 * TODO: Count characters with spaces and without spaces
 */
export const charCountSel: RangeOp = (input, range) => {
  const normalized = normalizeRange(input, range)
  const { selected: _selected } = sliceByRange(input, normalized)

  // TODO: Count chars with/without spaces, return unchanged text
  // Toast handled in App.tsx
  // Use _selected variable above to calculate character counts

  return { newText: input, newSelection: range }
}

/**
 * Checks if selection is a palindrome
 * Shows result in toast (✅ or ❌), doesn't modify text
 *
 * TODO:
 * 1. Normalize text (lowercase, remove non-alphanumeric)
 * 2. Compare with reversed version
 * 3. Return unchanged text
 * Toast will show ✅ if palindrome, ❌ if not
 */
export const palindromeCheckSel: RangeOp = (input, range) => {
  const normalized = normalizeRange(input, range)
  const { selected: _selected } = sliceByRange(input, normalized)

  // TODO: Check if palindrome, return unchanged text
  // Toast handled in App.tsx
  // Use _selected variable above to check if it's a palindrome

  return { newText: input, newSelection: range }
}

// ============================================================================
// BATCH 6: Interactive Operations
// ============================================================================

/**
 * Find and replace in selection using window.prompt
 * Prompts user for find and replace strings
 *
 * TODO:
 * 1. Use window.prompt to get search string
 * 2. Use window.prompt again to get replace string
 * 3. Escape regex special characters in search string
 * 4. Replace all occurrences in selected text
 * 5. If user cancels either prompt, return unchanged text
 *
 * IMPORTANT: Escape regex metacharacters in search string!
 * Use: searchString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
 */
export const findReplacePrompt: RangeOp = (input, range) => {
  // TODO: Get find and replace strings from prompts
  // If user cancels, return unchanged text
  // Otherwise, apply replace to selected text

  return { newText: input, newSelection: range }
}

/**
 * Wraps selection with triple backticks (code block)
 * Example: "code" → "```\ncode\n```"
 *
 * TODO: Wrap selected text with triple backticks and newlines
 * After wrapping, selection should cover the entire wrapped block
 */
export const wrapWithCodeBlock: RangeOp = (input, range) => {
  return applyToSelection(input, range, text => {
    // TODO: Wrap with ```\n<text>\n```
    // The selection after this should cover the entire wrapped block
    return text
  })
}
