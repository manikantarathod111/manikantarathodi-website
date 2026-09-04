// Lightweight inline SVG icons. Rendered as vectors so they stay crisp
// at any resolution/zoom level — no icon font or external asset needed.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .5 1 1v3.4c0 .6-.4 1-1 1C10.6 20.5 3.5 13.4 3.5 4.5c0-.6.4-1 1-1H8c.5 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2 2Z" />
    </svg>
  )
}

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3.5a8.5 8.5 0 0 0-7.4 12.7L3.5 20.5l4.5-1.1A8.5 8.5 0 1 0 12 3.5Z" />
      <path
        fill="currentColor"
        stroke="none"
        d="M9 9.6c0-.4.3-1 .7-1 .4 0 .8 0 .9.2.2.3.7 1.6.7 1.8.1.2 0 .4-.1.6-.2.2-.3.3-.5.5-.2.2-.4.3-.2.7.3.5.9 1.3 1.8 2 1 .8 1.7 1 2 1.1.2.1.4 0 .6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.3.1 1.7.8 2 1 .3.1.5.2.5.4 0 .2 0 1-.4 1.5-.4.6-1.6 1.1-2.2 1.1-.6 0-1.6-.2-3.4-1.4-2.3-1.5-3.8-4-3.9-4.2-.1-.2-.9-1.2-.9-2.2Z"
      />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  )
}

export function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 21s-6.5-5.7-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.3-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  )
}

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h5v-7H9.5v-3H12V8.8C12 6.6 13.4 5.4 15.4 5.4c.9 0 1.8.07 2 .1v2.7h-1.6c-1.1 0-1.3.5-1.3 1.3V11H17l-.4 3H14.5v7H17a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z" />
    </svg>
  )
}

export function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 4l7.3 9.3L4.4 20H7l5.6-5.7L17 20h3l-7.6-9.7L19.4 4h-2.6l-5.2 5.3L7 4H4Z" />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.1" cy="6.9" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <line x1="7.8" y1="10.2" x2="7.8" y2="16.2" />
      <circle cx="7.8" cy="7.6" r="0.4" fill="currentColor" />
      <path d="M11.6 16.2v-3.6c0-1.4 1-2.3 2.3-2.3 1.3 0 2 .8 2 2.4v3.5" />
    </svg>
  )
}

export function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="6.2" width="18" height="11.6" rx="3.6" />
      <path d="M10.5 9.8l4.5 2.2-4.5 2.2Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function HeartHandsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 20.4S4 15.6 4 9.9C4 7 6.2 5 8.7 5c1.6 0 3 .8 3.3 2.1C12.3 5.8 13.7 5 15.3 5 17.8 5 20 7 20 9.9c0 5.7-8 10.5-8 10.5Z" />
    </svg>
  )
}

export function BuildingIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 21h16M5 21V10M19 21V10M3 10l9-6 9 6M7 10v-.01M12 10v-.01M17 10v-.01M7 14v4M12 14v4M17 14v4" />
    </svg>
  )
}

export function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  )
}

export function ArrowUpRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

export function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M9.5 14.5 14.5 9.5" />
      <path d="M11 7.5 12.4 6a3.4 3.4 0 0 1 4.8 4.8l-1.5 1.5" />
      <path d="M13 16.5 11.6 18a3.4 3.4 0 0 1-4.8-4.8l1.5-1.5" />
    </svg>
  )
}

export function DownloadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3v13M7 11l5 5 5-5M5 21h14" />
    </svg>
  )
}

export function PhoneDeviceIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
      <line x1="10.5" y1="18.3" x2="13.5" y2="18.3" />
    </svg>
  )
}

export function SunMoonIcon({ dark, ...rest }) {
  return dark ? (
    <svg viewBox="0 0 24 24" {...base} {...rest}>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" {...base} {...rest}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
    </svg>
  )
}

// Maps a string key (used in data files) to the icon component.
export const iconMap = {
  phone: PhoneIcon,
  whatsapp: WhatsAppIcon,
  mail: MailIcon,
  pin: PinIcon,
  facebook: FacebookIcon,
  x: XIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
  foundation: HeartHandsIcon,
  building: BuildingIcon,
}
