import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'ElikH — Accra · Interior Architecture',
    template: '%s | ElikH',
  },
  description:
    'French Interior Architecture & Design Studio based in Accra, Ghana. Residential and commercial projects crafted with precision, warmth, and a deep respect for place.',
  keywords: [
    'interior architecture',
    'interior design',
    'Accra',
    'Ghana',
    'French designer',
    'residential design',
    'commercial design',
    'luxury interiors',
    'ElikH',
  ],
  openGraph: {
    title: 'ElikH — Accra · Interior Architecture',
    description:
      'French Interior Architecture & Design Studio based in Accra, Ghana.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
