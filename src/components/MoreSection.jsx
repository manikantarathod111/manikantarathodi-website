import { moreCards } from '../data/profile.js'
import LinkCard from './LinkCard.jsx'

export default function MoreSection() {
  return (
    <section className="section">
      <div className="section-head">
        <h2>More</h2>
        <div className="rule" />
      </div>
      <div className="grid-2">
        {moreCards.map((item) => (
          <LinkCard key={item.key} item={item} stacked />
        ))}
      </div>
    </section>
  )
}
