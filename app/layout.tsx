import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Re:Mind',
  description: '익명 질문/답변 서비스',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className='h-full'>
      <body className='min-h-full flex flex-col font-sans antialiased'>{children}</body>
    </html>
  );
}
