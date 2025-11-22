/**
 * App Component - Main Application Shell
 * Manages state, mode switching, and orchestrates all components
 *
 * TODO: Complete handleApplyOp to:
 * 1. Call the operation function with current text and selection
 * 2. Update text and selection state
 * 3. For analytics operations (15-18), show toast messages instead
 * 4. Restore textarea selection after update
 */

import { useState, useEffect, useRef } from 'react'
import type { EditorMode, SelectionRange, RangeOp, ToastMessage } from '../lib/types'
import { loadDraft, saveDraft, loadMode, saveMode } from '../utils/storage'
import { estimateReadingTimeMin, countWords, countChars } from '../lib/metrics'
import { normalizeRange, sliceByRange } from '../lib/selection'
import Editor from '../components/Editor'
import Preview from '../components/Preview'
import FloatingBar from '../components/FloatingBar'
import Metrics from '../components/Metrics'
import ToastContainer from '../components/ToastContainer'
import './layout.css'
import { countVowelsConsonantsSel } from '../lib/stringOps'

export default function App() {
  const [text, setText] = useState('')
  const [mode, setMode] = useState<EditorMode>('edit')
  const [selection, setSelection] = useState<SelectionRange>({ start: 0, end: 0 })
  const [toast, setToast] = useState<ToastMessage | null>(null)
  const editorRef = useRef<HTMLTextAreaElement>(null)

  // Load draft and mode from localStorage on mount
  useEffect(() => {
    const draft = loadDraft()
    const savedMode = loadMode()
    setText(draft)
    setMode(savedMode)
  }, [])

  // Save draft whenever text changes
  useEffect(() => {
    saveDraft(text)
  }, [text])

  // Save mode whenever it changes
  useEffect(() => {
    saveMode(mode)
  }, [mode])

  const handleModeToggle = () => {
    setMode((prev: EditorMode) => (prev === 'edit' ? 'preview' : 'edit'))
  }

  const showToast = (message: string, type: 'info' | 'success' | 'error' = 'info') => {
    const toastId = `toast-${Date.now()}`
    setToast({ id: toastId, message, type })
  }

  const handleApplyOp = (_op: RangeOp, opName: string) => {
    // TODO: Implement operation application
    //
    // Steps:
    // 1. Call op(text, selection) to get result
    // 2. For analytics operations (check opName), calculate and show toast
    // 3. For transform operations, update text and selection
    // 4. Restore textarea selection using editorRef.current?.setSelectionRange()

    // Analytics operations that need special handling:
    const analyticsOps = ['V/C Count', 'Words#', 'Chars#', 'Palindrome?']

    if (analyticsOps.includes(opName)) {
      // TODO: Handle analytics operations
      // Calculate the analytics and show toast
      // Don't modify text

      const normalized = normalizeRange(text, selection)
      const { selected } = sliceByRange(text, normalized)

      if (opName === 'Words#') {
        const count = countWords(selected || text)
        showToast(`Word count: ${count}`, 'info')
      } else if (opName === 'Chars#') {
        const withSpaces = countChars(selected || text, true)
        const withoutSpaces = countChars(selected || text, false)
        showToast(`Characters: ${withSpaces} (${withoutSpaces} without spaces)`, 'info')
      }
      // else if (opName === 'V/C#'){
      //   const vowels = countVowelsConsonantsSel(selected || text)
      //   const consonant = countVowelsConsonantsSel(selected || text)
      //   showToast(`VowelsCharacters: ${vowels} ('Consonents: ${consonant}, 'info')
      // }
      // TODO: Add handlers for V/C Count and Palindrome?

      return
    }

    // For transform operations, apply the op and update state
    const result = _op(text, selection)
    setText(result.newText)
    setSelection(result.newSelection)

    // Restore textarea selection
    setTimeout(() => {
      editorRef.current?.setSelectionRange(result.newSelection.start, result.newSelection.end)
      editorRef.current?.focus()
    }, 0)

    console.log('TODO: Apply operation:', opName, 'to selection:', selection)
  }

  const readingTime = estimateReadingTimeMin(text)

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">📝 Post Creator</h1>
          <div className="header-actions">
            <div className="reading-time-chip" aria-label={`${readingTime} minute read`}>
              ⏱ {readingTime} min read
            </div>
            <button onClick={handleModeToggle} className="mode-toggle" aria-label="Toggle mode">
              {mode === 'edit' ? '👁 Preview' : '✏️ Edit'}
            </button>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="metrics-section">
          <Metrics text={text} />
        </div>

        {mode === 'edit' ? (
          <div className="editor-section">
            <FloatingBar onApplyOp={handleApplyOp} />
            <Editor
              ref={editorRef}
              text={text}
              onTextChange={setText}
              selection={selection}
              onSelectionChange={setSelection}
            />
          </div>
        ) : (
          <div className="preview-section">
            <Preview text={text} />
          </div>
        )}
      </main>

      <ToastContainer toast={toast} onDismiss={() => setToast(null)} />

      <footer className="app-footer">
        <p>
          Built by <strong>Karma</strong> • Code Camp Week 1 Assignment
        </p>
      </footer>
    </div>
  )
}
