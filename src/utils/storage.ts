/**
 * Local storage utilities
 * Handles persisting draft content and editor mode
 */

import type { EditorMode } from '../lib/types'

const DRAFT_KEY = 'post-creator-draft'
const MODE_KEY = 'post-creator-mode'

/**
 * Saves draft text to localStorage
 * @param text - The draft text to save
 */
export function saveDraft(text: string): void {
  try {
    localStorage.setItem(DRAFT_KEY, text)
  } catch (error) {
    console.error('Failed to save draft:', error)
  }
}

/**
 * Loads draft text from localStorage
 * @returns The saved draft text, or empty string if none exists
 */
export function loadDraft(): string {
  try {
    return localStorage.getItem(DRAFT_KEY) ?? ''
  } catch (error) {
    console.error('Failed to load draft:', error)
    return ''
  }
}

/**
 * Saves editor mode to localStorage
 * @param mode - The mode to save ('edit' or 'preview')
 */
export function saveMode(mode: EditorMode): void {
  try {
    localStorage.setItem(MODE_KEY, mode)
  } catch (error) {
    console.error('Failed to save mode:', error)
  }
}

/**
 * Loads editor mode from localStorage
 * @returns The saved mode, or 'edit' as default
 */
export function loadMode(): EditorMode {
  try {
    const saved = localStorage.getItem(MODE_KEY)
    if (saved === 'edit' || saved === 'preview') {
      return saved
    }
    return 'edit'
  } catch (error) {
    console.error('Failed to load mode:', error)
    return 'edit'
  }
}

/**
 * Clears all saved data
 */
export function clearAll(): void {
  try {
    localStorage.removeItem(DRAFT_KEY)
    localStorage.removeItem(MODE_KEY)
  } catch (error) {
    console.error('Failed to clear storage:', error)
  }
}

