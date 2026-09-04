import { contactCards } from '../data/profile.js'
import ContactCard from './ContactCard.jsx'

export default function ContactSection({ onCopy }) {
  return (
    <section className="section">
      <div className="section-head">
        <h2>Contact</h2>
        <div className="rule" />
      </div>
      <div className="card-list">
        {contactCards.map((card) => (
          <ContactCard key={card.key} card={card} onCopy={onCopy} />
        ))}
      </div>
    </section>
  )
}
