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

| ファイル | 寸法 | JPEG(q90) 容量 | JPEG(q90) PSNR / RMSE | WebP(q90) 容量 | WebP(q90) PSNR / RMSE |
|---|---|---|---|---|---|
| `assets/hero-tachibana-420.jpg` / `.webp` | 420×315 | 43.5KB | 36.10dB / 4.00 | 36.3KB | 38.18dB / 3.14 |
| `assets/hero-tachibana-560.jpg` / `.webp` | 560×420 | 69.3KB | 36.80dB / 3.69 | 56.2KB | 38.96dB / 2.87 |
| `assets/hero-tachibana-720.jpg` / `.webp` | 720×540 | 105.5KB | 37.53dB / 3.39 | 78.0KB | 39.31dB / 2.76 |
| `assets/hero-tachibana-900.jpg` / `.webp` | 900×675 | 155.1KB | 38.20dB / 3.14 | 114.0KB | 40.15dB / 2.51 |
| `assets/hero-tachibana-1200.jpg` / `.webp` | 1200×900 | 253.6KB | 39.17dB / 2.80 | 179.0KB | 41.09dB / 2.25 |
| `assets/hero-tachibana-1600.jpg` / `.webp` | 1600×1200 | 407.0KB | 40.34dB / 2.45 | 265.8KB | 41.64dB / 2.11 |

- 生成日：2026-09-05
- 生成方法：Pillow 12.1.1 の `Image.resize(..., Image.LANCZOS)`。ICCプロファイルはオリジナルから引き継ぎ、アスペクト比4:3を厳密に維持（`w*3 == h*4` をアサート）
- 幅の刻みの根拠：`index.html` のヒーロー画像の実表示幅を `getBoundingClientRect()` で実測した結果（デスクトップは1120px以上で457pxに頭打ち、1カラムになる900px以下で最大約852px）から、DPR2までをカバーできる範囲として決定
- 品質の根拠：q90 を採用。公開している12ファイルすべてを実測した結果は、**WebPが 38.18〜41.64dB（RMSE 2.11〜3.14）、JPEGが 36.10〜40.34dB（RMSE 2.45〜4.00）**。WebP非対応ブラウザにはJPEGを配信するため、実際に描画されうる値の下限は最小幅420pxのJPEGの 36.10dB になる。どちらの形式も幅が広いほど値が高くなる単調な並びで、ファイルごとの内訳は上の表のとおり
- 品質の測定方法：オリジナルを同じ寸法へ LANCZOS で縮小したものを基準画像とし、基準・比較先とも RGB に揃えて全画素・全チャンネルの RMSE を求め、`PSNR = 20*log10(255/RMSE)` で算出（Pillow 12.1.1）。ブラウザの `canvas.drawImage` 経由で測ると縮小比ごとに内蔵スケーラのエイリアスが混ざり、幅の大小で値が逆転して比較にならないため使わない
- 用途：`index.html` の `<picture>` で `srcset` / `sizes` により出し分け（WebP優先、非対応ブラウザはJPEG）

## ページヘッダー帯の写真（`assets/page-cases.jpg` / `page-about.jpg` / `page-contact.jpg`）

解決事例・代表紹介・お問い合わせの3ページに、`<main>` 冒頭の横長ヘッダー帯として使用しています。3点とも同じ扱い（同じクラス `.page-banner`・同じ 16:5・同じ位置）です。トップページのヒーロー写真とは別素材です。

| 項目 | `page-cases.jpg` | `page-about.jpg` | `page-contact.jpg` |
|---|---|---|---|
| 用途 | `cases.html`（解決事例）のヘッダー帯 | `about.html`（代表紹介・事務所概要）のヘッダー帯 | `contact.html`（お問い合わせ）のヘッダー帯 |
| 内容 | 木立と家々にはさまれた住宅街の細い通り | 白いレンガの壁と大きな窓に囲まれ、木の床に白い机と椅子が並ぶ明るい事務所の室内 | 大きな窓ぎわに机と椅子、観葉植物を置いた明るい室内 |
| 撮影者 | Tsuyoshi Kozu | TheStandingDesk | Annie Spratt |
| 入手元 | Unsplash（https://unsplash.com/photos/g3TWCAH9Pto） | Unsplash（https://unsplash.com/photos/hDYBj1wZ7wE） | Unsplash（https://unsplash.com/photos/2pia6OAe5rA） |
| 取得日 | 2026-09-06 | 2026-09-06 | 2026-09-06 |
| 解像度・容量 | 2400×1600px／約809KB（JPEG） | 2400×1200px／約417KB（JPEG） | 2400×1600px／約343KB（JPEG） |
| ライセンス | Unsplash License（商用利用可・改変可・クレジット表記任意・再配布不可） | 同左 | 同左 |
| 人物の写り込み | なし | なし | なし |
| 備考 | 原付と自転車が写るが、ナンバープレート・表札・看板など個人や実在の事業者を特定できる文字は判読できないことを確認済み | 当初は別の写真（Drew Beamer／`dbKwY7Ijsvw`）を使っていたが、**全画素が R=G=B の白黒**（実測：最大彩度差0）でカラーの他2点と系統が揃わないため差し替えた。旧素材は `assets/_unused-page-about-mono.jpg` として保持（サイトからは参照していない）。差し替え後はチャンネル平均の差23.07でカラーであることを実測確認。原本の高さのみ1200pxで他2点と異なるが、16:5に切り出したあとの寸法は3点とも同一 | 室内の小物のみ。個人を特定できる要素なし |

Unsplash Licenseはクレジット表記が任意のため、サイト本体では表記していません。

### 派生ファイル（16:5クロップ・リサイズ・WebP変換）

原本3点から、Pillow（12.1.1）で **先に 16:5（2400×750）へ切り出してから** リサイズ・再エンコードして生成した派生ファイルです。**内容は原本と同一の写真で、上記と同じUnsplash Licenseの下にあります**（Unsplash Licenseは改変を許諾しています）。原本（`page-cases.jpg` と `page-contact.jpg` が 2400×1600、`page-about.jpg` のみ 2400×1200。上の表を参照）は削除も差し替えもせず、そのまま保持しています。

| ファイル | 寸法 | JPEG(q90) 容量 | JPEG(q90) PSNR / RMSE | WebP(q90) 容量 | WebP(q90) PSNR / RMSE |
|---|---|---|---|---|---|
| `assets/page-cases-400.jpg` / `.webp` | 400×125 | 26.7KB | 36.88dB / 3.65 | 20.1KB | 36.74dB / 3.71 |
| `assets/page-cases-560.jpg` / `.webp` | 560×175 | 46.2KB | 37.35dB / 3.46 | 33.3KB | 37.05dB / 3.58 |
| `assets/page-cases-880.jpg` / `.webp` | 880×275 | 99.5KB | 38.33dB / 3.09 | 70.4KB | 38.13dB / 3.16 |
| `assets/page-cases-1200.jpg` / `.webp` | 1200×375 | 168.2KB | 39.19dB / 2.80 | 121.5KB | 39.05dB / 2.84 |
| `assets/page-cases-1600.jpg` / `.webp` | 1600×500 | 274.5KB | 39.83dB / 2.60 | 188.1KB | 39.67dB / 2.65 |
| `assets/page-about-400.jpg` / `.webp` | 400×125 | 23.2KB | 37.50dB / 3.40 | 15.4KB | 35.86dB / 4.11 |
| `assets/page-about-560.jpg` / `.webp` | 560×175 | 38.3KB | 38.25dB / 3.12 | 25.0KB | 36.78dB / 3.70 |
| `assets/page-about-880.jpg` / `.webp` | 880×275 | 79.0KB | 39.62dB / 2.66 | 50.0KB | 38.30dB / 3.10 |
| `assets/page-about-1200.jpg` / `.webp` | 1200×375 | 128.9KB | 40.84dB / 2.31 | 79.8KB | 39.46dB / 2.72 |
| `assets/page-about-1600.jpg` / `.webp` | 1600×500 | 207.2KB | 41.71dB / 2.10 | 116.9KB | 40.38dB / 2.44 |
| `assets/page-contact-400.jpg` / `.webp` | 400×125 | 19.2KB | 40.07dB / 2.53 | 12.8KB | 39.41dB / 2.73 |
| `assets/page-contact-560.jpg` / `.webp` | 560×175 | 29.6KB | 41.26dB / 2.21 | 18.2KB | 40.28dB / 2.47 |
| `assets/page-contact-880.jpg` / `.webp` | 880×275 | 57.4KB | 42.96dB / 1.81 | 31.4KB | 41.59dB / 2.12 |
| `assets/page-contact-1200.jpg` / `.webp` | 1200×375 | 91.8KB | 44.27dB / 1.56 | 43.9KB | 42.18dB / 1.98 |
| `assets/page-contact-1600.jpg` / `.webp` | 1600×500 | 144.1KB | 45.05dB / 1.43 | 64.9KB | 42.75dB / 1.86 |

- 生成日：2026-09-06（30ファイル＝3点×5幅×2形式）
- 生成方法：Pillow 12.1.1。原本から `crop((0, y, 2400, y+750))` で 16:5 を切り出し（切り出し上端 y は cases=425 / about=250 / contact=650。写り込ませたい被写体を基準に個別に決定。about だけ原本の高さが1200pxなので y の取りうる上限が他の2点と異なる）、`Image.resize(..., Image.LANCZOS)` で縮小。ICCプロファイルは原本から引き継ぎ、全ファイルで `w*5 == h*16` をアサート
- **クロップしてから縮小している理由**：表示比率と同じ 16:5 のファイルを配ることで、`<img>` の `width`/`height` 属性の比＝配信される全ファイルの実寸比＝表示比率が一致し、CSSの `aspect-ratio` / `object-fit` に頼らずレイアウトシフトを構造的に防げるため
- 幅の刻みの根拠：帯が入る `.section.container` の content 幅を `getBoundingClientRect()` で実測した結果（320px→280 / 375px→335 / 430px→390 / 768px→705 / 1024px→961 / 1120px以上→1072で頭打ち）から、DPR2の携帯（〜780px）・DPR3の携帯（〜1170px）・タブレットDPR2（〜1440px）をカバーする5段として決定。刻みはすべて16の倍数（16:5の高さが整数になる幅）
- **上限を1600pxにした引き換え**：デスクトップ最大表示幅1072pxに対しDPR2で必要なのは2144pxだが、最も重い `page-cases` は2144px幅のWebPで309.8KBに達する（同じcrop・LANCZOS・q90・ICC引き継ぎで実測。ICCを引き継がない場合は306.7KB）。ヒーロー写真も同じ理由で1600pxを上限にしている（1カラム時の最大852pxに対し1.88倍）ため揃え、**DPR2のデスクトップでは1.49倍相当**にとどまる。写真主体で細い文字を含まない帯であることを踏まえた判断で、2倍を厳密に満たしてはいない
- 品質の根拠：q90 を採用（ヒーロー写真と同一）。30ファイルの実測は **JPEGが 36.88〜45.05dB（RMSE 1.43〜3.65）、WebPが 35.86〜42.75dB（RMSE 1.86〜4.11）**。実際に描画されうる値の下限は、最小幅400pxの `page-about` の 35.86dB（WebP）と `page-cases` の 36.88dB（JPEG）
- 品質の測定方法：**切り出し後の原寸（2400×750）を同じ寸法へ LANCZOS で縮小したもの**を基準画像とし、基準・比較先とも RGB に揃えて全画素・全チャンネルの RMSE を求め、`PSNR = 20*log10(255/RMSE)` で算出（Pillow 12.1.1）。ブラウザの `canvas.drawImage` 経由で測ると縮小比ごとに内蔵スケーラのエイリアスが混ざり幅の大小で値が逆転するため使わない
- 単調性について：**3点とも、JPEG・WebPの両形式で幅が広いほど値が高くなる単調な並び**（実測で確認）。差し替え前の `page-about`（白黒写真）はWebPだけ 880px→1200px で 0.10dB 下がる非単調があったが、カラー写真へ差し替えたことで解消した。なお単調性は「指標が壊れていないこと」の確認であって品質の保証ではない
- 用途：`cases.html` / `about.html` / `contact.html` の `<picture>` で `srcset` / `sizes` により出し分け（WebP優先、非対応ブラウザはJPEG）
