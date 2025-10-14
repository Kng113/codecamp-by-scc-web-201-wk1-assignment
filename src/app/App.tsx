/**
 * App Component - Main Application Shell
 * Manages state, mode switching, and orchestrates all components
 */

import { useState, useEffect } from 'react'
import type { EditorMode, SelectionRange, RangeOp } from '../lib/types'
import { loadDraft, saveDraft, loadMode, saveMode } from '../utils/storage'
import { estimateReadingTimeMin } from '../lib/metrics'
import Editor from '../components/Editor'
import Preview from '../components/Preview'
import FloatingBar from '../components/FloatingBar'
import Metrics from '../components/Metrics'
import './layout.css'

export default function App() {
  const [text, setText] = useState('')
  const [mode, setMode] = useState<EditorMode>('edit')
  const [selection, setSelection] = useState<SelectionRange>({ start: 0, end: 0 })

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

  const handleApplyOp = (_op: RangeOp, opName: string) => {
    // TODO (M3): Apply the operation
    // const result = _op(text, selection)
    // setText(result.newText)
    // setSelection(result.newSelection)
    console.log('Apply operation:', opName, 'to selection:', selection)
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

      <footer className="app-footer">
        <p>
          Built by <strong>[Your Name]</strong> • Code Camp Week 1 Assignment
        </p>
      </footer>
    </div>
  )
}

