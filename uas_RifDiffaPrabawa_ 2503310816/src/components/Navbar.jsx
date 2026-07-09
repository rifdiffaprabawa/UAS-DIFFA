export default function Navbar({ resultCount, isSearching }) {
  return (
    <header className="sticky top-0 z-20 border-b-4 border-ink bg-pitch text-newsprint shadow-lg">
      {/* scrolling ticker strip */}
      <div className="overflow-hidden border-b border-pitch-light/60 bg-ink py-1.5">
        <div className="flex w-max whitespace-nowrap marquee-track font-mono text-[11px] tracking-wide text-gold-bright/90 uppercase">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8 pr-8">
              <span>Wire langsung &middot; Bagian Olahraga</span>
              <span>Sumber data: fakenews.squirro.com/news/sport</span>
              <span>Diperbarui setiap kali Anda memuat halaman</span>
              <span>Gunakan kolom cari untuk menyaring berita</span>
            </span>
          ))}
        </div>
      </div>

      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <a href="#top" className="focus-ring flex items-center gap-3 rounded">
          <span className="grid h-10 w-10 place-items-center rounded-sm bg-gold text-ink font-display text-lg">
            SD
          </span>
          <span>
            <span className="block font-display text-2xl leading-none tracking-wide text-newsprint">
              SPORT DESK
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-newsprint/60">
              Meja Redaksi Olahraga
            </span>
          </span>
        </a>

        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-wide text-newsprint/70">
          <span className="hidden sm:inline">Bagian: Sport</span>
          <span className="h-1 w-1 rounded-full bg-gold hidden sm:inline" />
          <span aria-live="polite">
            {isSearching
              ? `${resultCount} hasil pencarian`
              : `${resultCount} berita dimuat`}
          </span>
        </div>
      </nav>
    </header>
  )
}
