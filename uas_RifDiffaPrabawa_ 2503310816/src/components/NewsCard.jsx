import { stripHtml, formatDate } from '../api/news'

export default function NewsCard({ article, onOpen, featured = false }) {
  const preview = stripHtml(article.body)

  if (featured) {
    return (
      <button
        onClick={() => onOpen(article)}
        className="focus-ring group relative block w-full border-4 border-ink bg-ink text-left text-newsprint transition-transform hover:-translate-y-1"
      >
        <div className="flex items-center justify-between border-b border-newsprint/20 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold-bright">
          <span>Headline Utama</span>
          <span>#{String(article.id).padStart(3, '0')}</span>
        </div>
        <div className="px-5 py-6 sm:px-8 sm:py-8">
          <h2 className="font-display text-3xl leading-tight tracking-wide text-newsprint sm:text-4xl">
            {article.headline}
          </h2>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-newsprint/80 sm:text-lg">
            {article.abstract || preview.slice(0, 180) + '…'}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-wide text-newsprint/60">
            <span>Oleh {article.author}</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span>{formatDate(article.date)}</span>
            <span className="ml-auto text-gold-bright group-hover:underline">
              Baca selengkapnya →
            </span>
          </div>
        </div>
      </button>
    )
  }

  return (
    <button
      onClick={() => onOpen(article)}
      className="focus-ring group relative flex h-full flex-col border-2 border-ink bg-newsprint-dim/40 text-left transition-transform hover:-translate-y-1 hover:bg-newsprint-dim"
    >
      <div className="absolute -top-3 right-4 rounded-sm bg-gold px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-ink">
        #{String(article.id).padStart(3, '0')}
      </div>
      <div className="flex flex-1 flex-col px-5 py-5">
        <h3 className="font-display text-xl leading-tight tracking-wide text-ink">
          {article.headline}
        </h3>
        <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-ink-soft">
          {(article.abstract || preview).slice(0, 130)}…
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-3 font-mono text-[11px] uppercase tracking-wide text-ink-soft/80">
          <span className="truncate">{article.author}</span>
          <span className="shrink-0">{formatDate(article.date)}</span>
        </div>
      </div>
    </button>
  )
}
