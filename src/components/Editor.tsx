/**
 * Editor Component
 * A controlled textarea that tracks selection for applying string operations
 */

import { useEffect, useRef, forwardRef } from 'react'
import type { SelectionRange } from '../lib/types'
import './Editor.css'

type EditorProps = {
  text: string
  onTextChange: (text: string) => void
  selection: SelectionRange
  onSelectionChange: (selection: SelectionRange) => void
}

const Editor = forwardRef<HTMLTextAreaElement, EditorProps>(
  ({ text, onTextChange, selection, onSelectionChange }, ref) => {
    const internalRef = useRef<HTMLTextAreaElement>(null)
    
    // Use forwarded ref if provided, otherwise use internal ref
    const textareaRef = (ref as React.RefObject<HTMLTextAreaElement>) || internalRef

    // Update textarea selection when selection prop changes (after ops)
    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.setSelectionRange(selection.start, selection.end)
        textareaRef.current.focus()
      }
    }, [selection, textareaRef])

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
          onKeyDown={handleSelectionChange}
          placeholder="Start writing your post here..."
          aria-label="Post editor"
          aria-describedby="editor-help"
          spellCheck="true"
        />
        <p id="editor-help" className="editor-help">
          Select text and use the toolbar above to apply transformations
        </p>
      </div>
    )
  }
)

Editor.displayName = 'Editor'

export default Editor

