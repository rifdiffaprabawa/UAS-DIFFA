export default function SearchBar({ value, onChange }) {
  return (
    <div className="border-2 border-ink bg-newsprint-dim/60">
      <div className="flex items-center gap-3 px-4 py-3">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft shrink-0">
          Cari Wire
        </span>
        <div className="h-6 w-px bg-line" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Cari judul, ringkasan, atau nama penulis…"
          aria-label="Cari berita"
          className="focus-ring w-full bg-transparent font-body text-base text-ink placeholder:text-ink-soft/50 outline-none"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="focus-ring shrink-0 rounded-sm border border-ink px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-soft hover:bg-ink hover:text-newsprint transition-colors"
          >
            Hapus
          </button>
        )}
      </div>
    </div>
  )
}
