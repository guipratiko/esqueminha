const timeLabels = {
  dias: 'DIAS',
  horas: 'HORAS',
  minutos: 'MINUTOS',
  segundos: 'SEGUNDOS',
}

function Countdown({ timeLeft, compact = false }) {
  const gridClass = compact
    ? 'grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4'
    : 'grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8'
  const numberClass = compact
    ? 'text-3xl font-extrabold leading-none text-white sm:text-4xl'
    : 'text-5xl font-extrabold leading-none text-white sm:text-6xl md:text-7xl'

  return (
    <div className={gridClass}>
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="flex min-w-[76px] flex-col items-center">
          <span className={numberClass}>{String(value).padStart(2, '0')}</span>
          <span className="mt-2 text-[10px] tracking-[0.28em] text-cloud sm:text-xs">{timeLabels[key]}</span>
        </div>
      ))}
    </div>
  )
}

export default Countdown
