import { useEffect, useRef } from 'react'
import { formatDate } from '../api/news'

export default function NewsModal({ article, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    closeRef.current?.focus()
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!article) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/80 px-4 py-8 sm:py-14"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={article.headline}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl border-4 border-ink bg-newsprint shadow-2xl"
      >
        <div className="flex items-center justify-between border-b-2 border-ink bg-pitch px-5 py-3 text-newsprint">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-bright">
            Sport Desk &middot; Artikel #{String(article.id).padStart(3, '0')}
          </span>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Tutup artikel"
            className="focus-ring rounded-sm px-2 py-1 font-mono text-sm text-newsprint hover:bg-newsprint/10"
          >
            ✕
          </button>
        </div>

        <div className="max-h-[75vh] overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
          <h2 className="font-display text-3xl leading-tight tracking-wide text-ink">
            {article.headline}
          </h2>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-line pb-4 font-mono text-xs uppercase tracking-wide text-ink-soft">
            <span>Oleh {article.author}</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span>{formatDate(article.date)}</span>
          </div>

          <div
            className="prose-news mt-5 space-y-4 font-body text-base leading-relaxed text-ink [&_p]:mb-4"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />

          <a
            href={article.article_uri}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-6 inline-block border-2 border-ink px-4 py-2 font-mono text-xs uppercase tracking-wide text-ink hover:bg-ink hover:text-newsprint transition-colors"
          >
            Buka sumber asli ↗
          </a>
        </div>
      </div>
    </div>
  )
}
