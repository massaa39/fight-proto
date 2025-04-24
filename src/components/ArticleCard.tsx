import React from 'react';
// 後で UI キット化する際には Card コンポーネントとして切り出します

export default function ArticleCard({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <article className="p-4 border rounded mb-4">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </article>
  );
}
