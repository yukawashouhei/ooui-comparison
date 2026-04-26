# 人事労務管理 UI サンプル

業務SaaSを想定した人事労務管理画面のポートフォリオサンプルです。  
従業員管理、手続き管理、統合運用の3つの画面構成を通して、実務で使われる管理画面の情報設計とUIトーンを確認できます。

## 公開ページ

- [Portfolio Site (GitHub Pages)](https://yukawashouhei.github.io/ooui-comparison/)

## このサンプルで見られるポイント

- 従業員一覧と詳細の2ペイン構成
- ステップ型の申請フロー（基本情報、必要書類、確認、完了）
- 実運用を想定した業務ラベル中心の文言設計
- レスポンシブ対応された管理画面レイアウト

## 技術スタック

- React 18
- Vite 5
- CSS (no framework)
- GitHub Pages

## ローカルでの確認方法

```bash
npm install
npm run dev
```

開発サーバー起動後、表示される `Local` URL（通常 `http://localhost:5173/`）で確認できます。

## 本番相当の確認方法

```bash
npm run build
npm run preview
```

`preview` ではビルド済み成果物（`dist`）をローカル配信して確認できます。

## デプロイ

```bash
BASE_PATH=/ooui-comparison/ npm run deploy
```

このコマンドで `gh-pages` ブランチへ公開用ファイルを反映します。
