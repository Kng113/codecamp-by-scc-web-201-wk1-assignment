/**
 * Metrics Component
 * Displays live text statistics
 */

import { computeMetrics } from '../lib/metrics'
import './Metrics.css'

type MetricsProps = {
  text: string
}

export default function Metrics({ text }: MetricsProps) {
  const metrics = computeMetrics(text)

  return (
    <div className="metrics-container">
      <div className="metrics-grid">
        <div className="metric">
          <span className="metric-value">{metrics.words}</span>
          <span className="metric-label">Words</span>
        </div>
        <div className="metric">
          <span className="metric-value">{metrics.characters}</span>
          <span className="metric-label">Characters</span>
        </div>
        <div className="metric">
          <span className="metric-value">{metrics.sentences}</span>
          <span className="metric-label">Sentences</span>
        </div>
        <div className="metric">
          <span className="metric-value">{metrics.paragraphs}</span>
          <span className="metric-label">Paragraphs</span>
        </div>
        <div className="metric metric-highlight">
          <span className="metric-value">{metrics.readingTimeMin}</span>
          <span className="metric-label">Min Read</span>
        </div>
      </div>
    </div>
  )
}
