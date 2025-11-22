/**
 * ToastContainer Component
 * Container for displaying toasts in a fixed position
 */

import Toast from './Toast'
import type { ToastMessage } from '../lib/types'
import './ToastContainer.css'

type ToastContainerProps = {
  toast: ToastMessage | null
  onDismiss: () => void
}

export default function ToastContainer({ toast, onDismiss }: ToastContainerProps) {
  return (
    <div className="toast-container" aria-live="polite" aria-atomic="true">
      <Toast toast={toast} onDismiss={onDismiss} />
    </div>
  )
}
