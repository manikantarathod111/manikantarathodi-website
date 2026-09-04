import { profile } from '../data/profile.js'
import { LinkIcon } from './Icons.jsx'

export default function Footer({ onCopyLink }) {
  return (
    <footer className="footer">
      <button className="copy-link-btn" onClick={onCopyLink}>
        <LinkIcon width={16} height={16} />
        Copy profile link
      </button>
      <div className="footer-meta">
        {profile.footerDomain}
        <span className="sep">·</span>
        {profile.footerTag}
        <span className="sep">·</span>
        {profile.footerYear}
      </div>
    </footer>
  )
}
