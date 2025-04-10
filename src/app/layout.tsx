import './globals.css';

import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

import { Toaster } from '@/components/ui/toaster';

import QueryProvider from './providers/queryCientProvider';
import 'react-loading-skeleton/dist/skeleton.css';
const oepnsans = Open_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Healf Assessment Test',
  description: 'Healf Assessment Test',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossOrigin=""
          async
        ></script>
      </head>
      <body className={`${oepnsans.className}  dark:bg-[#0d1117] h-full`}>
        <NextTopLoader />
        <QueryProvider>
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
