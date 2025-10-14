/**
 * FloatingBar Component
 * Toolbar with buttons for all 20 string operations
 * TODO: Wire up all operations (M3)
 */

import type { RangeOp } from '../lib/types'
import './FloatingBar.css'

type FloatingBarProps = {
  onApplyOp: (op: RangeOp, opName: string) => void
}

export default function FloatingBar(_props: FloatingBarProps) {
  // Import operations here as students implement them
  // Example: import { reverseSelection, toUpper, ... } from '../lib/stringOps'

  const handleOp = (opName: string) => {
    // TODO: Map opName to actual operation function
    // const { onApplyOp } = _props
    // onApplyOp(operationFunction, opName)
    alert(`TODO: Implement ${opName} operation`)
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
          >
            🔄 Reverse
          </button>
          <button onClick={() => handleOp('UPPER')} aria-label="Convert to uppercase">
            UPPER
          </button>
          <button onClick={() => handleOp('lower')} aria-label="Convert to lowercase">
            lower
          </button>
          <button onClick={() => handleOp('Title')} aria-label="Convert to title case">
            Title
          </button>
          <button onClick={() => handleOp('Sentence')} aria-label="Convert to sentence case">
            Sentence
          </button>
        </div>
      </div>

      <div className="floating-bar-section">
        <span className="section-title">Cleanup</span>
        <div className="button-group">
          <button onClick={() => handleOp('Spaces-')} aria-label="Collapse extra spaces">
            Spaces-
          </button>
          <button onClick={() => handleOp('TrimLines')} aria-label="Trim each line">
            TrimLines
          </button>
          <button onClick={() => handleOp('Punct-')} aria-label="Remove punctuation">
            Punct-
          </button>
        </div>
      </div>

      <div className="floating-bar-section">
        <span className="section-title">Words</span>
        <div className="button-group">
          <button onClick={() => handleOp('Sort A-Z')} aria-label="Sort words alphabetically">
            Sort A-Z
          </button>
          <button onClick={() => handleOp('Unique')} aria-label="Keep unique words only">
            Unique
          </button>
        </div>
      </div>

      <div className="floating-bar-section">
        <span className="section-title">Styles</span>
        <div className="button-group">
          <button onClick={() => handleOp('kebab-')} aria-label="Convert to kebab-case">
            kebab-
          </button>
          <button onClick={() => handleOp('snake_')} aria-label="Convert to snake_case">
            snake_
          </button>
          <button onClick={() => handleOp('camel')} aria-label="Convert to camelCase">
            camel
          </button>
          <button onClick={() => handleOp('Pascal')} aria-label="Convert to PascalCase">
            Pascal
          </button>
        </div>
      </div>

      <div className="floating-bar-section">
        <span className="section-title">Analytics</span>
        <div className="button-group">
          <button onClick={() => handleOp('V/C Count')} aria-label="Count vowels and consonants">
            V/C Count
          </button>
          <button onClick={() => handleOp('Words#')} aria-label="Count words in selection">
            Words#
          </button>
          <button onClick={() => handleOp('Chars#')} aria-label="Count characters in selection">
            Chars#
          </button>
          <button onClick={() => handleOp('Palindrome?')} aria-label="Check if palindrome">
            Palindrome?
          </button>
        </div>
      </div>

      <div className="floating-bar-section">
        <span className="section-title">Tools</span>
        <div className="button-group">
          <button onClick={() => handleOp('Find/Replace')} aria-label="Find and replace">
            Find/Replace
          </button>
          <button onClick={() => handleOp('Wrap ```')} aria-label="Wrap with code block">
            Wrap ```
          </button>
        </div>
      </div>
    </div>
  )
}

