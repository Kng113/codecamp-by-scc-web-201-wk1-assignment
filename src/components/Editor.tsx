/**
 * Editor Component
 * A controlled textarea that tracks selection for applying string operations
 */

import { useEffect, useRef } from 'react'
import type { SelectionRange } from '../lib/types'
import './Editor.css'

type EditorProps = {
  text: string
  onTextChange: (text: string) => void
  selection: SelectionRange
  onSelectionChange: (selection: SelectionRange) => void
}

export default function Editor({ text, onTextChange, selection, onSelectionChange }: EditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Update textarea selection when selection prop changes (after ops)
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.setSelectionRange(selection.start, selection.end)
      textareaRef.current.focus()
    }
  }, [selection])

  const handleSelectionChange = () => {
    if (textareaRef.current) {
      onSelectionChange({
        start: textareaRef.current.selectionStart,
        end: textareaRef.current.selectionEnd,
      })
    }
  }

  return (
    <div className="editor-container">
      <label htmlFor="editor" className="editor-label">
        Edit Mode
      </label>
      <textarea
        id="editor"
        ref={textareaRef}
        className="editor-textarea"
        value={text}
        onChange={e => onTextChange(e.target.value)}
        onSelect={handleSelectionChange}
        onKeyUp={handleSelectionChange}
        onMouseUp={handleSelectionChange}
        placeholder="Start writing your post here..."
        aria-label="Post editor"
        spellCheck="true"
      />
    </div>
  )
}

