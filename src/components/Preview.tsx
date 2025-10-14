/**
 * Preview Component
 * Renders text with basic markdown-lite styling
 * TODO: Implement markdown-lite parser (M4)
 */

import './Preview.css'

type PreviewProps = {
  text: string
}

export default function Preview({ text }: PreviewProps) {
  // TODO (M4): Implement markdown-lite rendering
  // For now, just display plain text with paragraph breaks
  const renderContent = () => {
    if (!text.trim()) {
      return <p className="preview-empty">Preview will appear here...</p>
    }

    // Simple rendering for now - students will enhance this
    const paragraphs = text.split(/\n\s*\n/)
    return paragraphs.map((para, i) => {
      if (!para.trim()) return null
      return <p key={i}>{para}</p>
    })
  }

  return (
    <div className="preview-container">
      <label className="preview-label">Preview Mode</label>
      <div className="preview-content" role="article" aria-label="Post preview">
        {renderContent()}
      </div>
    </div>
  )
}

