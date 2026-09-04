import { profile, featured, socialRow } from '../data/profile.js'
import { iconMap, SunMoonIcon, ArrowUpRightIcon } from './Icons.jsx'
import avatarPhoto from '../assets/avatar.jpg'

export default function Hero({ theme, onToggleTheme }) {
  const FeaturedIcon = iconMap.foundation

  return (
    <header className="hero">
      <div className="toolbar">
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle light and dark mode"
        >
          <SunMoonIcon dark={theme === 'dark'} width={18} height={18} />
        </button>
      </div>

      <div className="hero-card">
        <div className="avatar-wrap">
          <img className="avatar avatar--photo" src={avatarPhoto} alt={profile.name} />
        </div>

        <p className="eyebrow">
          {profile.eyebrow.split(' · ')[0]} <span className="dot" /> {profile.eyebrow.split(' · ')[1]}
        </p>
        <h1 className="name">{profile.name}</h1>
        <p className="handle">
          {profile.handle}
          <span className="sep">·</span>
          {profile.location}
        </p>

        <p className="bio">{profile.bio}</p>

        <div className="social-row">
          {socialRow.map((item) => {
            const Icon = iconMap[item.key]
            return (
              <a key={item.key} href={item.href} aria-label={item.label}>
                <Icon width={19} height={19} />
              </a>
            )
          })}
        </div>
      </div>

      <a href={featured.href} className="featured">
        <span className="ficon">
          <FeaturedIcon width={20} height={20} />
        </span>
        <span>
          <span className="flabel">{featured.label.toUpperCase()}</span>
          <span className="ftitle">{featured.title}</span>
          <span className="fsub">{featured.subtitle}</span>
        </span>
        <span className="farrow">
          <ArrowUpRightIcon width={18} height={18} />
        </span>
      </a>
    </header>
  )
}
