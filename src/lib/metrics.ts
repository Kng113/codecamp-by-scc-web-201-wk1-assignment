/**
 * Text metrics calculations
 * Pure functions for computing text statistics
 */

import type { TextMetrics } from './types'

/**
 * Counts words in text
 * @param text - Input text
 * @returns Number of words
 */
export function countWords(text: string): number {
  if (!text.trim()) return 0
  return text.trim().split(/\s+/).filter(Boolean).length
}

/**
 * Counts characters in text
 * @param text - Input text
 * @param withSpaces - Whether to include spaces in count
 * @returns Number of characters
 */
export function countChars(text: string, withSpaces = true): number {
  return withSpaces ? text.length : text.replace(/\s+/g, '').length
}

/**
 * Counts sentences in text
 * Sentences are delimited by . ! ? followed by space or end of string
 * @param text - Input text
 * @returns Number of sentences
 */
export function countSentences(text: string): number {
  if (!text.trim()) return 0
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0)
  return sentences.length
}

/**
 * Counts paragraphs in text
 * Paragraphs are separated by blank lines (double newline)
 * @param text - Input text
 * @returns Number of paragraphs
 */
export function countParagraphs(text: string): number {
  if (!text.trim()) return 0
  const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0)
  return paragraphs.length
}

/**
 * Estimates reading time in minutes
 * @param text - Input text
 * @param wordsPerMinute - Average reading speed (default 200)
 * @returns Estimated reading time in minutes (minimum 1)
 */
export function estimateReadingTimeMin(text: string, wordsPerMinute = 200): number {
  const words = countWords(text)
  if (words === 0) return 1
  return Math.max(1, Math.ceil(words / wordsPerMinute))
}

/**
 * Computes all text metrics at once
 * @param text - Input text
 * @returns TextMetrics object with all stats
 */
export function computeMetrics(text: string): TextMetrics {
  return {
    words: countWords(text),
    characters: countChars(text),
    sentences: countSentences(text),
    paragraphs: countParagraphs(text),
    readingTimeMin: estimateReadingTimeMin(text),
  }
}

