const BASE_URL = 'https://fakenews.squirro.com/news/sport'

/**
 * Fetch a page of sport news articles.
 * @param {number|null} since - cursor for pagination (from previous response's `next`)
 * @param {number} count - number of articles to request
 */
export async function fetchSportNews(since = null, count = 10) {
  const params = new URLSearchParams()
  if (since !== null) params.set('since', since)
  params.set('count', count)

  const res = await fetch(`${BASE_URL}?${params.toString()}`)

  if (!res.ok) {
    throw new Error(`Gagal memuat berita (status ${res.status})`)
  }

  const data = await res.json()
  return {
    articles: data.news ?? [],
    next: data.next ?? null,
    eof: Boolean(data.eof),
  }
}

/** Strip HTML tags from the article body for plain-text previews. */
export function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

export function formatDate(dateString) {
  try {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return dateString
  }
}
