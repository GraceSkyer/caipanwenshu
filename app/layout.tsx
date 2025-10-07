import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '才判文书网 - 才判文书公开平台',
  description: '面向社会公众开放的才判文书查询平台，致力于司法公开，接受社会监督。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

