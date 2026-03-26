import CTAButton from './CTAButton'

function TicketCard({
  title,
  prices = [],
  image,
  info = [],
  buttonLabel = 'COMPRE SEU INGRESSO',
  buttonHref,
}) {
  return (
    <article className="glass-card animate-fade-up flex flex-col rounded-2xl bg-gradient-to-br from-navy/90 via-[#1b2d65]/85 to-electric/85 p-6 text-center shadow-glow">
      {image && (
        <img
          src={image}
          alt={title}
          className="mb-4 h-36 w-full rounded-xl object-cover object-center sm:h-40"
        />
      )}
      <h3 className="min-h-[56px] text-2xl font-extrabold uppercase tracking-wide text-white">{title}</h3>
      {info.length > 0 && (
        <div className="mt-4 rounded-lg border border-white/10 bg-[#05070D]/35 px-3 py-3 text-left">
          {info.map((line) => (
            <p key={line} className="text-xs font-medium leading-relaxed text-cloud sm:text-sm">
              {line.includes('10 pulseiras e uma Garrafa') ? (
                <>
                  {line.split('10 pulseiras e uma Garrafa')[0]}
                  <span className="font-extrabold text-white">
                    10 pulseiras e uma Garrafa
                  </span>
                  {line.split('10 pulseiras e uma Garrafa')[1]}
                </>
              ) : (
                line
              )}
            </p>
          ))}
        </div>
      )}
      {prices.length > 0 && (
        <div className="mt-4 space-y-3">
          {prices.map((price) => (
            <div
              key={price.label}
              className="rounded-lg border border-white/15 bg-white/10 px-3 py-2"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-cloud">{price.label}</p>
              <p className="mt-1 text-2xl font-black text-white sm:text-3xl">{price.value}</p>
            </div>
          ))}
        </div>
      )}
      <div className="mt-8 pt-2 sm:mt-auto sm:pt-4">
        <CTAButton href={buttonHref} className="w-full text-center text-xs sm:text-sm">
          {buttonLabel}
        </CTAButton>
      </div>
    </article>
  )
}

export default TicketCard
