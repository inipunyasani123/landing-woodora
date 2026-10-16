import Link from 'next/link';
import { KATALOG } from '@/lib/kayu';
import MenuPonsel from './MenuPonsel';

const TAUTAN = [['/katalog', 'Katalog'], ['/jenis-kayu', 'Jenis kayu'], ['/#proses', 'Proses']];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-walnut/10 bg-linen/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-6">
        <Link href="/" className="py-2 font-[family-name:var(--font-lora)] text-xl font-semibold text-walnut">Woodora</Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
          {TAUTAN.map(([h, l]) => (
            <Link key={h} href={h} className="spec-caps py-2 text-grain hover:text-walnut">{l}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/#ukur" className="inline-flex h-11 items-center bg-walnut px-3.5 text-sm font-semibold text-linen hover:bg-walnut-2 sm:px-4">Jadwalkan ukur</Link>
          <MenuPonsel tautan={TAUTAN} />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-walnut px-6 text-linen">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))]">
        <div className="col-span-2 md:col-span-1">
          <p className="font-[family-name:var(--font-lora)] text-2xl font-semibold">Woodora</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-linen/80">Furnitur kayu solid yang diukur di rumah Anda dan dibuat di bengkel kami. Setiap perabot disertai catatan asal kayunya.</p>
        </div>
        <nav aria-label="Katalog">
          <p className="spec-caps mb-4 text-linen/80">Katalog</p>
          <ul className="space-y-1 text-sm text-linen/80">
            {KATALOG.map((k) => <li key={k.slug}><Link href={`/katalog/${k.slug}`} className="inline-block py-1.5 hover:text-linen">{k.nama}</Link></li>)}
          </ul>
        </nav>
        <nav aria-label="Halaman">
          <p className="spec-caps mb-4 text-linen/80">Halaman</p>
          <ul className="space-y-1 text-sm text-linen/80">
            <li><Link href="/jenis-kayu" className="inline-block py-1.5 hover:text-linen">Panduan jenis kayu</Link></li>
            <li><Link href="/#proses" className="inline-block py-1.5 hover:text-linen">Proses pembuatan</Link></li>
            <li><Link href="/#ukur" className="inline-block py-1.5 hover:text-linen">Jadwalkan ukur</Link></li>
          </ul>
        </nav>
      </div>
      <p className="spec-caps mx-auto max-w-6xl border-t border-linen/15 py-6 leading-[1.9] text-linen/70">© 2026 Woodora · Ukuran, harga, dan waktu produksi adalah contoh purwarupa desain · Foto: StockSnap & rawpixel (CC0)</p>
    </footer>
  );
}
