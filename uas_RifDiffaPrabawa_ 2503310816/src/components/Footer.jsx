export default function Footer() {
  return (
    <footer className="border-t-4 border-ink bg-ink text-newsprint/70">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <span className="font-display text-xl tracking-wide text-newsprint">
              SPORT DESK
            </span>
            <p className="mt-2 font-body text-sm leading-relaxed">
              Ringkasan berita olahraga yang diambil langsung dari wire
              fakenews.squirro.com, dibuat untuk keperluan tugas UAS.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gold-bright">
              Sumber Data
            </h4>
            <ul className="mt-3 space-y-2 font-body text-sm">
              <li>
                <a
                  href="https://fakenews.squirro.com/news/sport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded hover:text-newsprint hover:underline"
                >
                  fakenews.squirro.com/news/sport
                </a>
              </li>
              <li>Bagian: Sport</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gold-bright">
              Tentang Proyek
            </h4>
            <ul className="mt-3 space-y-2 font-body text-sm">
              <li>Dibangun dengan React &amp; Vite</li>
              <li>Styling dengan Tailwind CSS</li>
              <li>Tugas Ujian Akhir Semester</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-newsprint/15 pt-5 font-mono text-[11px] uppercase tracking-wide sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Sport Desk — Tugas UAS</span>
          <span>Data ditampilkan untuk tujuan latihan/edukasi</span>
        </div>
      </div>
    </footer>
  )
}
