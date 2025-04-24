// 将来 components/HomePage.tsx に切り出せるようにコメントを留めています
import React from 'react';
import FighterForm from '@/components/FighterForm';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">格闘技予測システム</h1>
      <FighterForm />
    </main>
  );
}
