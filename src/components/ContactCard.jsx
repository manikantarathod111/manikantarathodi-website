import { useState } from 'react'
import { iconMap } from './Icons.jsx'

export default function ContactCard({ card, onCopy }) {
  const Icon = iconMap[card.icon]
  const [justCopied, setJustCopied] = useState(false)

  const inner = (
    <>
      <span className="icon-tile">
        <Icon width={19} height={19} />
      </span>
      <span className="card-text">
        <span className="card-label">{card.label}</span>
        <span className="card-value">{card.value}</span>
      </span>
      {card.type === 'copy' && (
        <span className={`copy-flag${justCopied ? ' copy-flag--show' : ''}`}>Copied</span>
      )}
    </>
  )

  if (card.type === 'copy') {
    return (
      <button
        type="button"
        className="card"
        onClick={() => {
          onCopy(card.copyValue, card.toast)
          setJustCopied(true)
          setTimeout(() => setJustCopied(false), 1400)
        }}
      >
        {inner}
      </button>
    )
  }

  if (card.type === 'link') {
    return (
      <a className="card" href={card.href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    )
  }

  // static (non-interactive, e.g. location)
  return <div className="card card--static">{inner}</div>
}
