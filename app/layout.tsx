import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.lifegui.hengen.com.br'),
  title: {
    default: 'lifegui Docs',
    template: '%s | lifegui Docs',
  },
  description:
    'Documentation for lifegui, a self-hosted personal organizer for tasks, habits, notes and your calendar.',
  icons: {
    icon: '/logo.svg',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
