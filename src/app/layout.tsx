import './globals.css';

import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${oepnsans.className}   h-full`}>
        <NextTopLoader />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
