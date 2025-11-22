/**
 * FloatingBar Component
 * Toolbar with buttons for all 20 string operations
 *
 * TODO: Import and wire up all operations from '../lib/stringOps'
 *
 * As you implement each operation in stringOps.ts, import it here
 * and pass it to onApplyOp when the button is clicked.
 */

import type { RangeOp } from '../lib/types'
import './FloatingBar.css'

// TODO: Import operations as you implement them
// Example:
import {
  reverseSelection,
  toUpper,
  toLower,
<<<<<<< HEAD
  toTitle,
  toSentenceCase,
  collapseSpaces,
  trimLines,
  removePunct,
  sortWordsAZ,
  uniqueWords,
  toKebab,
  toSnake,
=======
>>>>>>> feat/reverse
  // ... add more as you implement them
} from '../lib/stringOps'

type FloatingBarProps = {
  onApplyOp: (op: RangeOp, opName: string) => void
}

export default function FloatingBar({ onApplyOp: _onApplyOp }: FloatingBarProps) {
  // TODO: Create handler functions that map button clicks to operations
  // Example:
  const handleReverse = () => _onApplyOp(reverseSelection, 'Reverse')
<<<<<<< HEAD
  const handleUpper = () => _onApplyOp(toUpper, 'UPPER')
  const handleLower = () => _onApplyOp(toLower, 'lower')
  const handletoTitle = () => _onApplyOp(toTitle, 'Title')
  const handletoSentencesCase = () => _onApplyOp(toSentenceCase, 'Sentence')
  const cleanSpaces = () => _onApplyOp(collapseSpaces, 'Spaces-')
  const trimLine = () => _onApplyOp(trimLines, 'TrimLines')
  const remPunct = () => _onApplyOp(removePunct, 'Punct-')
  const sortWd = () => _onApplyOp(sortWordsAZ, 'Sort A-Z')
  const removeDuplicate = () => _onApplyOp(uniqueWords, 'Unique')
  const handleKebab = () => _onApplyOp(toKebab, 'kebab-')
  const handleSnake = () => _onApplyOp(toSnake, 'snake_')
  // const handleLower = () => _onApplyOp(toLower, 'camel')
  // const handleLower = () => _onApplyOp(toLower, 'Pascal')
  // const handleLower = () => _onApplyOp(toLower, 'V/C Count')
  // const handleLower = () => _onApplyOp(toLower, 'Words#')
  // const handleLower = () => _onApplyOp(toLower, 'Chars#')
  // const handleLower = () => _onApplyOp(toLower, 'Palindrome?')
  // const handleLower = () => _onApplyOp(toLower, 'Find/Replace')
  // const handleLower = () => _onApplyOp(toLower, 'Wrap ```')

=======
  // const handleUpper = () => _onApplyOp(toUpper, 'UPPERCASE')
  
>>>>>>> feat/reverse
  const handleOp = (opName: string) => {
    // TODO: Replace this with actual operation calls
    // For now, this is a placeholder
    console.log(`TODO: Wire up ${opName} operation`)
    // alert(`TODO: Implement ${opName} operation`)
<<<<<<< HEAD
    if (opName === 'Reverse') {
      handleReverse()
    }
    if (opName === 'UPPER') {
      handleUpper()
    }
    if (opName === 'lower') {
      handleLower()
    }
    if (opName === 'Title') {
      handletoTitle()
    }
    if (opName === 'Sentence') {
      handletoSentencesCase()
    }
    if (opName === 'Spaces-') {
      cleanSpaces()
    }
    if (opName === 'TrimLines') {
      trimLine()
    }
    if (opName === 'Punct-') {
      remPunct()
    }
    if (opName === 'Sort A-Z') {
      sortWd()
    }
    if (opName === 'Unique') {
      removeDuplicate()
    }
    if (opName === 'kebab-') {
      handleKebab()
    }
    if (opName === 'snake_') {
      handleSnake()
    }
=======
    if(opName === 'Reverse') {
      handleReverse()
    }
>>>>>>> feat/reverse
  }

  return (
    <div className="floating-bar">
      <div className="floating-bar-section">
        <span className="section-title">Case</span>
        <div className="button-group">
          <button
            onClick={() => handleOp('Reverse')}
            aria-label="Reverse selection"
            title="Reverse selected text"
            type="button"
          >
            🔄 Reverse
          </button>
          <button onClick={() => handleOp('UPPER')} aria-label="Convert to uppercase" type="button">
            UPPER
          </button>
          <button onClick={() => handleOp('lower')} aria-label="Convert to lowercase" type="button">
            lower
          </button>
          <button
            onClick={() => handleOp('Title')}
            aria-label="Convert to title case"
            type="button"
          >
            Title
          </button>
          <button
            onClick={() => handleOp('Sentence')}
            aria-label="Convert to sentence case"
            type="button"
          >
            Sentence
          </button>
        </div>
      </div>

      <div className="floating-bar-section">
        <span className="section-title">Cleanup</span>
        <div className="button-group">
          <button
            onClick={() => handleOp('Spaces-')}
            aria-label="Collapse extra spaces"
            type="button"
          >
            Spaces-
          </button>
          <button onClick={() => handleOp('TrimLines')} aria-label="Trim each line" type="button">
            TrimLines
          </button>
          <button onClick={() => handleOp('Punct-')} aria-label="Remove punctuation" type="button">
            Punct-
          </button>
        </div>
      </div>

      <div className="floating-bar-section">
        <span className="section-title">Words</span>
        <div className="button-group">
          <button
            onClick={() => handleOp('Sort A-Z')}
            aria-label="Sort words alphabetically"
            type="button"
          >
            Sort A-Z
          </button>
          <button
            onClick={() => handleOp('Unique')}
            aria-label="Keep unique words only"
            type="button"
          >
            Unique
          </button>
        </div>
      </div>

      <div className="floating-bar-section">
        <span className="section-title">Styles</span>
        <div className="button-group">
          <button
            onClick={() => handleOp('kebab-')}
            aria-label="Convert to kebab-case"
            type="button"
          >
            kebab-
          </button>
          <button
            onClick={() => handleOp('snake_')}
            aria-label="Convert to snake_case"
            type="button"
          >
            snake_
          </button>
          <button onClick={() => handleOp('camel')} aria-label="Convert to camelCase" type="button">
            camel
          </button>
          <button
            onClick={() => handleOp('Pascal')}
            aria-label="Convert to PascalCase"
            type="button"
          >
            Pascal
          </button>
        </div>
      </div>

      <div className="floating-bar-section">
        <span className="section-title">Analytics</span>
        <div className="button-group">
          <button
            onClick={() => handleOp('V/C Count')}
            aria-label="Count vowels and consonants"
            type="button"
          >
            V/C Count
          </button>
          <button
            onClick={() => handleOp('Words#')}
            aria-label="Count words in selection"
            type="button"
          >
            Words#
          </button>
          <button
            onClick={() => handleOp('Chars#')}
            aria-label="Count characters in selection"
            type="button"
          >
            Chars#
          </button>
          <button
            onClick={() => handleOp('Palindrome?')}
            aria-label="Check if palindrome"
            type="button"
          >
            Palindrome?
          </button>
        </div>
      </div>

      <div className="floating-bar-section">
        <span className="section-title">Tools</span>
        <div className="button-group">
          <button
            onClick={() => handleOp('Find/Replace')}
            aria-label="Find and replace"
            type="button"
          >
            Find/Replace
          </button>
          <button
            onClick={() => handleOp('Wrap ```')}
            aria-label="Wrap with code block"
            type="button"
          >
            Wrap ```
          </button>
        </div>
      </div>
    </div>
  )
}
