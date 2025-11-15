export default function SocialIcon({ icon }: { icon: string }) {
  const getIcon = () => {
    switch (icon) {
      case "instagram":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.6 2c-2 0-3.6 1.6-3.6 3.6v8.4c0 2 1.6 3.6 3.6 3.6h8.4c2 0 3.6-1.6 3.6-3.6V7.6c0-2-1.6-3.6-3.6-3.6H7.2m9.65 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5m-5.4 1.5a4.6 4.6 0 110 9.2 4.6 4.6 0 010-9.2m0 2a2.6 2.6 0 100 5.2 2.6 2.6 0 000-5.2Z" />
          </svg>
        )
      case "twitter":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75-2.63 7-7 7-11a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        )
      case "facebook":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z" />
          </svg>
        )
      case "linkedin":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        )
      default:
        return null
    }
  }

  return <div className="text-white hover:text-gray-300 transition-colors">{getIcon()}</div>
}
