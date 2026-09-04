import { iconMap, ChevronRightIcon } from './Icons.jsx'

export default function LinkCard({ item, showChevron = true, stacked = false }) {
  const Icon = iconMap[item.icon]

  return (
    <a
      className={`card${stacked ? ' card--stacked' : ''}`}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="icon-tile">
        <Icon width={19} height={19} />
      </span>
      <span className="card-text">
        <span className="card-value">{item.title}</span>
        <span className="card-sub">{item.subtitle}</span>
      </span>
      {showChevron && !stacked && (
        <span className="chev">
          <ChevronRightIcon width={17} height={17} />
        </span>
      )}
    </a>
  )
}
