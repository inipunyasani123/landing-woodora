import { Lora, Inter } from "next/font/google";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import "./globals.css";

const lora = Lora({ variable: "--font-lora", subsets: ["latin"], weight: ["500", "600", "700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"FurnitureStore","name":"Woodora","description":"Furnitur kayu solid yang dibuat sesuai ukuran","url":"https://landing-woodora.pintuweb.id"};

export const metadata = {
  metadataBase: new URL("https://landing-woodora.pintuweb.id"),
  title: { default: "Woodora — Furnitur Kayu Solid Sesuai Ukuran", template: "%s — Woodora" },
  description: "Woodora membuat meja, kursi, dan rak kayu solid sesuai ukuran ruang Anda, dengan gambar kerja bertanda ukuran sebelum kayu dipotong. Ukur ke rumah gratis.",
  applicationName: "Woodora",
  keywords: ["furnitur kayu solid", "mebel custom", "meja makan jati", "rak buku mahoni", "jenis kayu furnitur"],
  authors: [{ name: "Woodora" }],
  creator: "Woodora",
  publisher: "Woodora",
  alternates: { canonical: "https://landing-woodora.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-woodora.pintuweb.id",
    siteName: "Woodora",
    title: "Woodora — Furnitur Kayu Solid Sesuai Ukuran",
    description: "Woodora membuat meja, kursi, dan rak kayu solid sesuai ukuran ruang Anda, dengan gambar kerja bertanda ukuran sebelum kayu dipotong. Ukur ke rumah gratis.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Woodora — Furnitur Kayu Solid Sesuai Ukuran" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Woodora — Furnitur Kayu Solid Sesuai Ukuran",
    description: "Woodora membuat meja, kursi, dan rak kayu solid sesuai ukuran ruang Anda, dengan gambar kerja bertanda ukuran sebelum kayu dipotong. Ukur ke rumah gratis.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${lora.variable} ${inter.variable} antialiased`}>
        <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-walnut focus:px-4 focus:py-2 focus:text-linen">Lompat ke konten</a>
        <SiteHeader />
        <div id="konten">{children}</div>
        <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=woodora" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
