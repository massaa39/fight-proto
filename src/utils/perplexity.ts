import fetch from 'node-fetch';

// 検索用のユーティリティ関数
export async function searchHistory(f1: string, f2: string) {
  const res = await fetch(`https://api.perplexity.ai/search?query=${f1}+vs+${f2}`, {
    headers: { Authorization: `Bearer ${process.env.NEXT_PERPLEXITY_API_KEY}` }
  });
  return res.json();
}
