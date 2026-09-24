import type { Metadata } from 'next';
import './globals.css';
import AppShell from './AppShell';

export const metadata: Metadata = {
  title: 'School of Integrated Thoughts (SIT) | Spectrum EduCare',
  description:
    'School of Integrated Thoughts (SIT) develops an integrated curriculum that brings Islamic learning together with strong contemporary education. A project of Spectrum EduCare Limited.',
  openGraph: {
    title: 'School of Integrated Thoughts (SIT)',
    description:
      'Education that connects faith, knowledge and purpose. A project of Spectrum EduCare Limited.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0b1320] text-stone-100 antialiased selection:bg-amber-600 selection:text-white">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
