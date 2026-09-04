import { connectCards } from '../data/profile.js'
import LinkCard from './LinkCard.jsx'

export default function ConnectSection() {
  return (
    <section className="section">
      <div className="section-head">
        <h2>Connect</h2>
        <div className="rule" />
      </div>
      <div className="card-list">
        {connectCards.map((item) => (
          <LinkCard key={item.key} item={item} />
        ))}
      </div>
    </section>
  )
}
