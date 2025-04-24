import { NextResponse } from 'next/server';
// 後でベクトル検索やPerplexity連携を組み込む想定です

export async function POST(request: Request) {
  const { fighter1, fighter2 } = await request.json();
  // 仮のダミーデータを返却
  return NextResponse.json({ fighter1, fighter2, history: [] });
}
