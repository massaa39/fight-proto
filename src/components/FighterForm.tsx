import React, { useState } from 'react';
import Notification from './Notification';
// 後でバリデーションやコンテキスト管理を組み込む想定です

export default function FighterForm() {
  const [fighter1, setFighter1] = useState('');
  const [fighter2, setFighter2] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      const searchRes = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fighter1, fighter2 }),
      });
      if (!searchRes.ok) throw new Error('検索に失敗しました');
      const searchData = await searchRes.json();

      const genRes = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(searchData),
      });
      if (!genRes.ok) throw new Error('記事生成に失敗しました');
      const article = await genRes.json();

      console.log(article); // TODO: 表示コンポーネントに渡す
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      {error && <Notification message={error} type="error" />}
      <input
        className="w-full p-2 border mb-2"
        placeholder="選手1"
        value={fighter1}
        onChange={e => setFighter1(e.target.value)}
      />
      <input
        className="w-full p-2 border mb-2"
        placeholder="選手2"
        value={fighter2}
        onChange={e => setFighter2(e.target.value)}
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
        予測＆記事生成
      </button>
    </form>
  );
}
