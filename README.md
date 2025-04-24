# 格闘技試合予測＆記事自動生成AIツール

スマホ対応のプロトタイプです。

## デモ

フォームに選手名を入力して、試合予測＆記事生成をお試しください。

## 起動方法

```bash
git clone https://github.com/massaa39/fight-proto.git
cd fight-proto
cp .env.template .env.local
npm install
npm run dev
```

## ワンクリック起動

[![Open in Codespaces](https://github.com/massaa39/fight-proto/actions/workflows/ci.yml/badge.svg)](https://github.com/codespaces/new?repo=massaa39/fight-proto)

## テスト

```bash
npm test
```

## CI/CD

GitHub Actions で Lint → Test → Build → Deploy を実施
