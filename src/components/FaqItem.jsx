function FaqItem({ question, answer }) {
  return (
    <article className="glass-card animate-fade-up rounded-xl p-5">
      <h4 className="text-base font-bold text-white sm:text-lg">{question}</h4>
      <p className="mt-3 text-sm leading-relaxed text-cloud">{answer}</p>
    </article>
  )
}

export default FaqItem
