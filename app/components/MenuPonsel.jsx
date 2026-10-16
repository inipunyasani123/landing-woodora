'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const KET = { '/katalog': '6 perabot', '/jenis-kayu': '5 kayu', '/#proses': '4 langkah' };

/* Navigasi ponsel: tombol ikon membuka panel di bawah kepala halaman, dengan
   garis ukur putus-putus sebagai pemisah. Tertutup saat pindah halaman,
   saat tautan diklik, atau dengan Escape. */
export default function MenuPonsel({ tautan }) {
  const [buka, setBuka] = useState(false);
  const tombol = useRef(null);
  const pathname = usePathname();

  useEffect(() => setBuka(false), [pathname]);
  useEffect(() => {
    if (!buka) return;
    const tutup = (e) => {
      if (e.key === 'Escape') { setBuka(false); tombol.current?.focus(); }
    };
    document.addEventListener('keydown', tutup);
    return () => document.removeEventListener('keydown', tutup);
  }, [buka]);

  return (
    <div className="md:hidden">
      <button
        ref={tombol}
        type="button"
        aria-label="Menu"
        aria-expanded={buka}
        aria-controls="menu-ponsel"
        onClick={() => setBuka((b) => !b)}
        className="flex h-11 w-11 items-center justify-center border border-walnut/25 text-walnut hover:border-walnut"
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
          {buka ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
        </svg>
      </button>
      <nav id="menu-ponsel" aria-label="Navigasi utama" hidden={!buka} className="absolute inset-x-0 top-full border-b border-walnut/15 bg-linen px-5 pt-2 pb-5 shadow-[0_24px_40px_-24px_rgb(59_42_29/0.45)]">
        <ul>
          {tautan.map(([h, l]) => (
            <li key={h}>
              <Link href={h} onClick={() => setBuka(false)} className="flex min-h-14 items-center justify-between gap-4 py-2 font-[family-name:var(--font-lora)] text-xl font-semibold text-walnut hover:text-brass-w">
                {l}
                <span className="spec-caps font-sans text-grain">{KET[h]}</span>
              </Link>
              <div aria-hidden="true" className="measure-line text-walnut" />
            </li>
          ))}
          <li>
            <Link href="/#ukur" onClick={() => setBuka(false)} className="mt-4 flex min-h-12 items-center justify-center bg-walnut px-6 font-semibold text-linen hover:bg-walnut-2">Jadwalkan ukur gratis</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
