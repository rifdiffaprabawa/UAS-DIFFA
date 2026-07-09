import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import NewsCard from './components/NewsCard'
import NewsModal from './components/NewsModal'
import { fetchSportNews } from './api/news'

export default function App() {
  const [articles, setArticles] = useState([])
  const [nextCursor, setNextCursor] = useState(null)
  const [eof, setEof] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    fetchSportNews(null, 10)
      .then(({ articles, next, eof }) => {
        if (cancelled) return
        setArticles(articles)
        setNextCursor(next)
        setEof(eof)
      })
      .catch((err) => {
        if (!cancelled) setError(err.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  async function loadMore() {
    if (loadingMore || eof) return
    setLoadingMore(true)
    setError(null)
    try {
      const { articles: more, next, eof: reachedEnd } = await fetchSportNews(
        nextCursor,
        10
      )
      setArticles((prev) => [...prev, ...more])
      setNextCursor(next)
      setEof(reachedEnd)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoadingMore(false)
    }
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return articles
    return articles.filter((a) => {
      return (
        a.headline?.toLowerCase().includes(q) ||
        a.abstract?.toLowerCase().includes(q) ||
        a.author?.toLowerCase().includes(q)
      )
    })
  }, [articles, query])

  const [featured, ...rest] = filtered

  return (
    <div id="top" className="min-h-screen bg-newsprint">
      <Navbar resultCount={filtered.length} isSearching={query.trim().length > 0} />

      <main className="mx-auto max-w-6xl px-5 py-8">
        <div className="mb-8">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        {loading && (
          <div className="border-2 border-dashed border-line py-16 text-center font-mono text-sm uppercase tracking-wide text-ink-soft">
            Memuat berita dari wire…
          </div>
        )}

        {error && !loading && (
          <div className="border-2 border-ink bg-newsprint-dim/60 px-5 py-4 font-body text-sm text-ink">
            Gagal memuat berita: {error}
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="border-2 border-dashed border-line py-16 text-center font-body text-ink-soft">
            Tidak ada berita yang cocok dengan pencarian "{query}".
          </div>
        )}

        {!loading && filtered.length > 0 && (
          <div className="space-y-8">
            {featured && (
              <NewsCard article={featured} onOpen={setSelected} featured />
            )}

            {rest.length > 0 && (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((article) => (
                  <NewsCard
                    key={article.id}
                    article={article}
                    onOpen={setSelected}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {!loading && !query && !eof && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={loadMore}
              disabled={loadingMore}
              className="focus-ring border-2 border-ink bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-newsprint transition-colors hover:bg-pitch disabled:opacity-50"
            >
              {loadingMore ? 'Memuat…' : 'Muat berita berikutnya'}
            </button>
          </div>
        )}
      </main>

      <Footer />

      <NewsModal article={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
