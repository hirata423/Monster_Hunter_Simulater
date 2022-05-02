
# Src/components/Helm　※Helm~Leginsは全て同じ処理をします

## /Helm.tsx

inputに入力されたキーワードとhelmList内の文字列で一致するものをfilterで探し、
戻り値を持ったfilterItemをmapで表示しています。
helmListはヘルムのjsonデータを　globalState化したものです。

## /HelmFix.tsx

お気に入り機能と同じロジックです。
【固定】ボタンを押すと、右側にテキストが表示されます。
 
## /HelmTable.tsx

HelmFixでinputの横に表示されている要素を【テスト】ボタンでtotal配列に格納し、
Helm・Armコンポーネントの下に、防御力合計とスキル値合計という項目で表示しています。
totalはヘルム〜レギンスコンポーネント内で【固定】→【テスト】された配列が格納される空の　globalStateです。

# Src/components/test

Helm・Armコンポーネントの下に表示される防御力合計とスキル値合計のコンポーネントです。
Helm~Leginsコンポーネント内で更新されるtotalを処理します。

# Src/component/TopPage

全てのコンポーネント表示されてます。

# 課題

### １、testコンポーネントでtotal内のskillLevel:{ firstSK,secondSK,thirdSK }をそれぞれreduceで合計値を出す
### ２、上記はskill:{ firstSK,secondSK,thirdSK }名が同じなら足す、異なる場合は足さずに表示したい

とりあえず、１だけ解消できると嬉しいです。
