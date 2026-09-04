import { useEffect, useRef } from 'react'
import { PhoneDeviceIcon, DownloadIcon } from './Icons.jsx'

export default function AppInstall({ onNoPromptAvailable }) {
  const deferredPromptRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      deferredPromptRef.current = e
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstallClick = async () => {
    const promptEvent = deferredPromptRef.current
    if (promptEvent) {
      promptEvent.prompt()
      await promptEvent.userChoice
      deferredPromptRef.current = null
    } else {
      onNoPromptAvailable?.()
    }
  }

  return (
    <section className="section">
      <div className="section-head">
        <h2>Get the app</h2>
        <div className="rule" />
      </div>
      <div className="app-card">
        <div className="app-top">
          <span className="icon-tile">
            <PhoneDeviceIcon width={19} height={19} />
          </span>
          <span>
            <div className="app-title">Android &amp; iPhone</div>
            <p>
              Install this page as an app on your phone — works offline-style from the
              home screen, no Play Store or App Store needed.
            </p>
          </span>
        </div>
        <button className="install-btn" onClick={handleInstallClick}>
          <DownloadIcon width={17} height={17} />
          Install app
        </button>
        <div className="install-hint">
          <DownloadIcon width={14} height={14} />
          <span>
            <b>Android:</b> Chrome menu → Install app or Add to Home screen
          </span>
        </div>
      </div>
    </section>
  )
}
