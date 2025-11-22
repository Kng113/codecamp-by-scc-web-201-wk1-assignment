/**
 * Core type definitions for Post Creator
 */

/**
 * Represents a text selection range in the editor
 */
export type SelectionRange = {
  start: number
  end: number
}

/**
 * Result of applying a string operation
 * Contains the new text and where the selection should be after the operation
 */
export type ApplyResult = {
  newText: string
  newSelection: SelectionRange
}

/**
 * A simple string transformation function (pure)
 */
export type StringOp = (input: string) => string

/**
 * A range-aware operation that transforms a selection
 * Takes the full text and a selection range, returns transformed text + new selection
 */
export type RangeOp = (input: string, range: SelectionRange) => ApplyResult

/**
 * Editor mode: edit or preview
 */
export type EditorMode = 'edit' | 'preview'

/**
 * Text metrics for display
 */
export type TextMetrics = {
  words: number
  characters: number
  sentences: number
  paragraphs: number
  readingTimeMin: number
}

/**
 * Toast message for user feedback
 */
export type ToastMessage = {
  id: string
  message: string
  type: 'info' | 'success' | 'error'
}

/**
 * Result type for analytics operations that don't modify text
 * These operations return toast messages instead of text changes
 */
export type AnalyticsResult = {
  toast: ToastMessage
  newText: string // unchanged text
  newSelection: SelectionRange // unchanged selection
}
