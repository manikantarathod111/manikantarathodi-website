export default function Toast({ message, visible }) {
  return (
    <div className={`toast${visible ? ' toast--show' : ''}`} role="status" aria-live="polite">
      {message}
    </div>
  )
}
