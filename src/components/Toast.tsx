/**
 * Toast Component
 * Displays temporary messages for analytics operations
 * Auto-dismisses after 3 seconds
 */

import { useEffect } from 'react'
import type { ToastMessage } from '../lib/types'
import './Toast.css'

type ToastProps = {
  toast: ToastMessage | null
  onDismiss: () => void
}

export default function Toast({ toast, onDismiss }: ToastProps) {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onDismiss()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [toast, onDismiss])

  if (!toast) return null

  return (
    <div
      className={`toast toast-${toast.type}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="toast-message">{toast.message}</span>
      <button className="toast-dismiss" onClick={onDismiss} aria-label="Dismiss message">
        ×
      </button>
    </div>
  )
}
