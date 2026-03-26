function CTAButton({
  href = '#ingressos',
  children = 'COMPRE SEU INGRESSO',
  className = '',
}) {
  const isExternal = /^https?:\/\//.test(href)

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-neon to-electric px-6 py-3 text-sm font-bold tracking-wider text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-neon/80 focus:ring-offset-2 focus:ring-offset-noir ${className}`}
    >
      {children}
    </a>
  )
}

export default CTAButton
