/* Foto statis: berkas WebP di public/images/foto disajikan langsung, tanpa
   /_next/image (kuota optimasi gambar Vercel tidak dipakai). Dua lebar yang
   sudah dioptimalkan: <nama>-640.webp untuk ponsel dan berkas aslinya untuk
   layar lebar; peramban memilih lewat srcset + sizes. */
export default function Foto({ nama, lebar, tinggi, alt, sizes, utama = false, className = '' }) {
  const asli = `/images/foto/${nama}.webp`;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asli}
      srcSet={`/images/foto/${nama}-640.webp 640w, ${asli} ${lebar}w`}
      sizes={sizes}
      width={lebar}
      height={tinggi}
      alt={alt}
      loading={utama ? 'eager' : 'lazy'}
      fetchPriority={utama ? 'high' : undefined}
      decoding="async"
      className={className}
    />
  );
}
