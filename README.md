# たちばな不動産鑑定事務所（Web制作デモ）

士業サイトのリニューアルを想定した、**Web制作ポートフォリオ用のデモサイト**です。

> **これは架空の事務所です。** 実在の団体・個人とは一切関係がありません。事務所名・人物名・所在地・電話番号・料金・実績は、すべて架空の設定です。掲載の電話番号（0120-XXX-XXX）はサンプル表記で、実際には繋がりません。

## 公開ページ

リニューアル後のサイトは、実ファイル7ページ構成でGitHub Pages公開しています。

| ページ | 内容 |
|---|---|
| [トップ](https://tomatoman1583-collab.github.io/tachibana-kantei-demo/) | ヒーロー・よくある3つのご相談・想定する依頼者・査定と鑑定評価の違い・選ばれる理由 |
| [支援内容・料金](https://tomatoman1583-collab.github.io/tachibana-kantei-demo/services.html) | 3メニューの内容と料金目安 |
| [解決事例](https://tomatoman1583-collab.github.io/tachibana-kantei-demo/cases.html) | 架空設定の解決事例6件 |
| [ご相談の流れ](https://tomatoman1583-collab.github.io/tachibana-kantei-demo/flow.html) | 5ステップと納期の目安・必要書類 |
| [よくある質問](https://tomatoman1583-collab.github.io/tachibana-kantei-demo/faq.html) | よくある質問8問 |
| [代表紹介・事務所概要](https://tomatoman1583-collab.github.io/tachibana-kantei-demo/about.html) | 代表者プロフィール・実績数値・事務所概要 |
| [お問い合わせ](https://tomatoman1583-collab.github.io/tachibana-kantei-demo/contact.html) | お問い合わせフォーム（送信はモック） |
| [改善レポート（前後比較）](https://tomatoman1583-collab.github.io/tachibana-kantei-demo/compare.html) | 改善前後をスライダーで見比べられる記録 |
| [改善レポート（詳細版）](https://tomatoman1583-collab.github.io/tachibana-kantei-demo/compare-shosai.html) | レスポンシブ検証・数値の一覧 |

制作の方針・想定ペルソナ・判断基準は [`AGENTS.md`](AGENTS.md)、使用写真の出典は [`CREDITS.md`](CREDITS.md) を参照してください。

## kintsugi比較について（別演習・compare.html／compare-shosai.html）

以下は上記の7ページ構成とは別の演習の記録です。リニューアル後サイトの**旧バージョン（単一HTMLファイル・明朝体フォント使用）**を対象に、UI検査ツールで既存デザインを壊さず整えた前後比較で、現行の7ページ構成（Noto Sans JP・複数ファイル）とは技術構成が異なります。

### 改善の要点

UI検査ツールで計測しながら、既存のデザインを壊さずに整えました。

| 指標 | 改善前 | 改善後 |
|---|---|---|
| 散らかり度（値のばらつき） | 70 | **26** |
| 定番度（AIらしさ・既視感） | 42 | **8** |
| 低コントラストの文字 | 5件 | **0件** |
| 12px未満の極小文字 | 29〜33件 | **0件** |
| 角丸の種類 | 5種 | **3種** |

幅1280 / 768 / 390px の3サイズで検証し、修理前になかった崩れは0件です。

### 主な作業

- **読みやすさ**: 金色のラベル（コントラスト比2.87）など5箇所を、既存の配色から選んだ色で基準値まで引き上げ
- **文字サイズの統一**: 26段あった文字サイズを、役割ごとに9段へ整理
- **既製品らしさの解消**: 英語のセクション名を日本語に、最初の画面の2択ボタンを「主ボタン1つ＋文中リンク」に、ヘッダーのすりガラス調を不透明の面に
- **レイアウト崩れの修正**: 「ご相談の流れ」が幅920px以下で要素がバラける不具合を修正（CSS Gridの列指定漏れが原因）

配色（紺・生成り・金）やブランドの階調色は、意図のある表現として残しています。

### 技術メモ（kintsugi比較デモの旧バージョンについて）

- 単一HTMLファイル・依存ライブラリなし
- 外部リソースは Google Fonts のみ（Shippori Mincho / Zen Kaku Gothic New）
- `prefers-reduced-motion` に対応
- 改善は既存CSSを書き換えず、追補スタイル（`<style id="kintsugi-repair">`）を後から重ねる方式
