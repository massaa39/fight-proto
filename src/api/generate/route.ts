import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const client = new OpenAIApi(config);

// 後で細かなプロンプトチューニングを行う想定です
export async function POST(request: Request) {
  const data = await request.json();
  const prompt = `以下の選手情報で要約とタイトルを生成してください。
${JSON.stringify(data)}`;
  const res = await client.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 800,
  });
  return NextResponse.json(res.data.choices[0]);
}
