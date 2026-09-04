import { useTheme } from './hooks/useTheme.js'
import { useToast } from './hooks/useToast.js'
import Hero from './components/Hero.jsx'
import ContactSection from './components/ContactSection.jsx'
import ConnectSection from './components/ConnectSection.jsx'
import MoreSection from './components/MoreSection.jsx'
import AppInstall from './components/AppInstall.jsx'
import Footer from './components/Footer.jsx'
import Toast from './components/Toast.jsx'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const { message, visible, showToast } = useToast()

  const handleCopy = async (value, toastMessage) => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      // clipboard API unavailable — the toast still confirms intent
    }
    showToast(toastMessage || 'Copied')
  }

  const handleCopyLink = () => handleCopy(window.location.href, 'Profile link copied')

  return (
    <div className="page">
      <Hero theme={theme} onToggleTheme={toggleTheme} />
      <ContactSection onCopy={handleCopy} />
      <ConnectSection />
      <MoreSection />
      <AppInstall onNoPromptAvailable={() => showToast('Use your browser menu → Add to Home screen')} />
      <Footer onCopyLink={handleCopyLink} />
      <Toast message={message} visible={visible} />
    </div>
  )
}
