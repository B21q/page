import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thorium Web Broswer',
  description: 'The fastest browser on Earth.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="us">
      <body className="">{children}</body>
    </html>
  );
}
