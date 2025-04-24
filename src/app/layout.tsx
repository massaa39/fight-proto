// 将来 components/RootLayout.tsx に切り出せるようにコメントを留めています
import './globals.css';

export const metadata = {
  title: '格闘技試合予測＆記事自動生成AIツール',
  description: 'スマホ対応型の格闘技試合予測と記事自動生成プロトタイプ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
