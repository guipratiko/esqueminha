import { useCallback, useEffect, useMemo, useState } from 'react'
import CTAButton from './components/CTAButton'
import Countdown from './components/Countdown'
import TicketCard from './components/TicketCard'
import FaqItem from './components/FaqItem'
import esqueminhaLogo from '../img/esqueminha.png'
import bannerHero from '../img/BannerHero.png'
import onlyFlowLogo from '../img/OnlyFlow-logo.png'
import mapaEvento from '../img/mapa.png'
import secInstImg1 from '../img/IMG_2467.JPG'
import secInstImg2 from '../img/IMG_2468.JPG'
import secInstImg3 from '../img/IMG_2469.JPG'
import pistaCardImg from '../img/BannerHero.png'
import loungeCardImg from '../img/BECLASSIC-26.jpg'
import galeriaImg56 from '../img/BECLASSIC-56.jpg'
import galeriaImg55 from '../img/BECLASSIC-55.jpg'
import galeriaImg42 from '../img/BECLASSIC-42.jpg'

function App() {
  const eventDate = useMemo(() => new Date('2026-04-11T20:00:00'), [])

  const getTimeLeft = useCallback(() => {
    const now = new Date()
    const totalMs = Math.max(0, eventDate.getTime() - now.getTime())
    const totalSeconds = Math.floor(totalMs / 1000)

    const dias = Math.floor(totalSeconds / 86400)
    const horas = Math.floor((totalSeconds % 86400) / 3600)
    const minutos = Math.floor((totalSeconds % 3600) / 60)
    const segundos = totalSeconds % 60

    return { dias, horas, minutos, segundos }
  }, [eventDate])

  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [getTimeLeft])

  const gridImageClass =
    'h-52 w-full rounded-xl object-cover transition-transform duration-300 hover:scale-[1.03] sm:h-56'

  const faqItems = [
    {
      question: 'Até que horas pode entrar no evento?',
      answer: 'Até 4h antes do encerramento do evento, será possível entrar.',
    },
    {
      question: 'Há banheiros disponíveis?',
      answer:
        'No evento, teremos dois tipos de banheiro disponíveis: químicos, posicionados por todo festival, e também banheiros premium na Área Vip, garantindo um fluxo adequado próximo às áreas dos palcos.',
    },
    {
      question: 'Terá comida à venda?',
      answer: 'Sim. Teremos diversos food trucks.',
    },
  ]

  const lineUpDjs = [
    { name: 'Thauane', stage: 'Line up anunciada' },
    { name: 'Lucas e Nathan', stage: 'Line up anunciada' },
    { name: 'Dj Vitor Bueno', stage: 'Line up anunciada' },
  ]

  return (
    <main className="overflow-hidden bg-noir">
      <section
        className="bg-overlay relative isolate min-h-[90vh] overflow-hidden px-6 pb-20 pt-8 sm:px-10"
        style={{
          backgroundImage:
            `linear-gradient(180deg, rgba(5,7,13,0.28) 0%, rgba(5,7,13,0.88) 100%), url('${bannerHero}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="mx-auto flex max-w-6xl animate-fade-in flex-col gap-12">
          <div className="flex items-center justify-end">
            <div className="glass-card hidden rounded-xl px-4 py-3 sm:block">
              <Countdown timeLeft={timeLeft} compact />
            </div>
          </div>

          <div className="mx-auto max-w-4xl py-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.5em] text-cloud">FESTA</p>
            <img
              src={esqueminhaLogo}
              alt="Logo Esqueminha"
              className="mx-auto mt-5 w-[260px] max-w-full drop-shadow-[0_0_28px_rgba(79,70,229,0.65)] sm:w-[360px] lg:w-[460px]"
            />
            <p className="mt-6 text-base font-semibold uppercase tracking-[0.3em] text-cloud sm:text-lg">
              DE GOIANIA PARA O BRASIL!
            </p>
          </div>

          <div className="glass-card mx-auto rounded-2xl p-6 sm:hidden">
            <Countdown timeLeft={timeLeft} compact />
          </div>

          <div className="mt-2 flex justify-center">
            <CTAButton className="px-8 py-3 sm:px-10 sm:py-4" />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#08112b] to-noir px-6 py-16 sm:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="animate-fade-up space-y-8 text-left">
            <p className="max-w-md text-xl font-extrabold uppercase leading-snug tracking-wide text-white sm:text-2xl">
              QUEM VIVE A LIBERDADE,
              <br />
              TEM MOMENTOS INCRIVEIS.
              <br />
              UMA VIBE UNICA COM ARTISTAS
              <br />
              RENOMADOS, PARA UMA
              <br />
              EXPERIENCIA EXCLUSIVA!
            </p>
            <CTAButton />
          </div>
          <div className="grid animate-fade-up gap-4 sm:grid-cols-2">
            <img
              src={secInstImg1}
              alt="Esqueminha"
              className={`${gridImageClass} sm:col-span-2`}
            />
            <img
              src={secInstImg2}
              alt="Esqueminha"
              className={gridImageClass}
            />
            <img
              src={secInstImg3}
              alt="Esqueminha"
              className={gridImageClass}
            />
          </div>
        </div>
      </section>

      <section className="relative bg-cloud/10 px-6 py-16 sm:px-10">
        <div className="absolute inset-0 opacity-25">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.5),transparent_65%)]" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cloud">Line Up</p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-[0.12em] text-white sm:text-4xl">
              DJS CONFIRMADOS
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lineUpDjs.map((dj) => (
              <article
                key={dj.name}
                className="glass-card animate-fade-up rounded-xl border-white/20 bg-gradient-to-br from-[#101D47]/85 to-[#3D3AB5]/55 p-4 text-left"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cloud">{dj.stage}</p>
                <h3 className="mt-2 text-xl font-black uppercase tracking-wide text-white">{dj.name}</h3>
                {dj.time ? (
                  <p className="mt-3 inline-block rounded-md bg-white/10 px-3 py-1 text-sm font-bold text-white">
                    {dj.time}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-noir px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-6xl space-y-7">
          <div className="grid gap-3 md:grid-cols-3">
            {[
              galeriaImg56,
              galeriaImg55,
              galeriaImg42,
            ].map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Mosaico de festa ${index + 1}`}
                className="animate-fade-up h-40 w-full rounded-xl object-cover sm:h-52"
              />
            ))}
          </div>
          <div className="text-center">
            <CTAButton className="px-10 py-4 text-base" />
          </div>
        </div>
      </section>

      <section
        className="bg-overlay px-6 py-20 sm:px-10"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(8,17,43,0.45) 0%, rgba(5,7,13,0.9) 100%), url('https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?auto=format&fit=crop&w=1800&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="glass-card mx-auto max-w-5xl animate-fade-up rounded-3xl p-8 text-center sm:p-12">
          <Countdown timeLeft={timeLeft} />
        </div>
      </section>

      <section id="ingressos" className="bg-gradient-to-b from-[#07102A] to-noir px-6 py-16 sm:px-10">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          <TicketCard
            title="INGRESSO PISTA"
            image={pistaCardImg}
            buttonHref="https://beta.meubilhete.com.br/esqueminha"
            prices={[
              { label: 'Mulher', value: 'R$ 60,00' },
              { label: 'Homem', value: 'R$ 95,00' },
            ]}
          />
          <TicketCard
            title="LOUNGE"
            image={loungeCardImg}
            buttonLabel="RESERVE AGORA"
            buttonHref="https://wa.me/556284194865?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20LOUGE%20da%20festa%20ESQUEMINHA"
            info={[
              'Direito à 1 garrafa (Absolut ou Beefeater ou Old Parr).',
              'Espaço reservado e exclusivo + 10 pulseiras e uma Garrafa.',
            ]}
            prices={[{ label: 'Valor', value: 'R$ 2.200,00' }]}
          />
        </div>
      </section>

      <section
        className="px-6 py-16 sm:px-10"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(5,7,13,0.9) 0%, rgba(5,7,13,0.9) 100%), url('https://images.unsplash.com/photo-1570717173024-ec8081c8f8e9?auto=format&fit=crop&w=1800&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="animate-fade-up text-center text-2xl font-bold uppercase tracking-[0.5em] text-white sm:text-3xl">
            EXPERIENCIA
          </h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {faqItems.map((item) => (
              <FaqItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#05070D] to-[#070f22] px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-xl font-bold uppercase tracking-[0.25em] text-white/90 sm:text-2xl">
            MAPA DO EVENTO
          </h2>
          <div className="mx-auto mt-7 w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-2 sm:max-w-md">
            <img
              src={mapaEvento}
              alt="Mapa do evento Esqueminha"
              className="aspect-[9/16] w-full rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-[#060910] px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:gap-7">
          <img
            src={esqueminhaLogo}
            alt="Logo Esqueminha"
            className="w-[120px] max-w-full opacity-80 sm:w-[150px]"
          />

          <div className="h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="flex w-full max-w-2xl flex-col items-center justify-between gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 sm:flex-row sm:gap-5 sm:px-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-white/60 sm:text-xs">
              © 2026 desenvolvido por OnlyFlow Tecnologia
            </p>
            <img
              src={onlyFlowLogo}
              alt="OnlyFlow Tecnologia"
              className="h-6 w-auto object-contain opacity-70 sm:h-7"
            />
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
