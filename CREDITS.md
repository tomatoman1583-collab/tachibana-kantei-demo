# CREDITS.md — 使用素材の出典

## ヒーロー写真（`assets/hero-tachibana.jpg`）

| 項目 | 内容 |
|---|---|
| 用途 | トップページ（`index.html`）ヒーローセクションの背景写真 |
| 撮影者 | Rafael Garcin |
| 入手元 | Unsplash（https://unsplash.com/photos/ISQ3M9fPa0g） |
| 取得日 | 2026-09-01 |
| 解像度・容量 | 2400×1800px／約654KB（JPEG） |
| ライセンス | Unsplash License（商用利用可・改変可・クレジット表記任意・再配布不可） |
| 人物の写り込み | なし |
| 備考 | ガラス張りオフィスビルを見上げたV字構図。特定の実在企業・実在事務所と紐づく看板等は写っていないことを確認済み。Unsplash Licenseはクレジット表記が任意のため、本サイトでは表記していない |

### 派生ファイル（リサイズ・WebP変換）

上記のオリジナル1点から、Pillow（12.1.1）でリサイズ・再エンコードして生成した派生ファイルです。**内容はオリジナルと同一の写真で、上記と同じUnsplash Licenseの下にあります**（Unsplash Licenseは改変を許諾しています）。オリジナル `hero-tachibana.jpg` は差し替えず、そのまま保持しています（OGP画像として使用中）。

| ファイル | 寸法 | JPEG(q90) | WebP(q90) |
|---|---|---|---|
| `assets/hero-tachibana-420.jpg` / `.webp` | 420×315 | 43.5KB | 36.3KB |
| `assets/hero-tachibana-560.jpg` / `.webp` | 560×420 | 69.3KB | 56.2KB |
| `assets/hero-tachibana-720.jpg` / `.webp` | 720×540 | 105.5KB | 78.0KB |
| `assets/hero-tachibana-900.jpg` / `.webp` | 900×675 | 155.1KB | 114.0KB |
| `assets/hero-tachibana-1200.jpg` / `.webp` | 1200×900 | 253.6KB | 179.0KB |
| `assets/hero-tachibana-1600.jpg` / `.webp` | 1600×1200 | 407.0KB | 265.8KB |

- 生成日：2026-09-05
- 生成方法：Pillow 12.1.1 の `Image.resize(..., Image.LANCZOS)`。ICCプロファイルはオリジナルから引き継ぎ、アスペクト比4:3を厳密に維持（`w*3 == h*4` をアサート）
- 幅の刻みの根拠：`index.html` のヒーロー画像の実表示幅を `getBoundingClientRect()` で実測した結果（デスクトップは1120px以上で457pxに頭打ち、1カラムになる900px以下で最大約852px）から、DPR2までをカバーできる範囲として決定
- 品質の根拠：オリジナルを同じ寸法へ縮小したものとの PSNR が、実際の描画条件で 37.9〜41.6dB（RMSE 2.1〜3.3）に収まる水準として q90 を採用（リサンプリングのみの理論上限は45.3dB）
- 用途：`index.html` の `<picture>` で `srcset` / `sizes` により出し分け（WebP優先、非対応ブラウザはJPEG）
