# Jest

## Jestが実行される場所

下記のディレクトリやファイル名のものが実行される

- `__tests__`ディレクトリ
- {hogehoge}.spec.js
- {fugafuga}.test.js

## 基本的な命令

### test

`test(name: string ,fn: jest.ProvidesCallback)`

doneに関しては非同期的な処理を行う際に必要。

done()が実行されるまで処理が終了しない。

```ts
test("sample test', done => {
  /* テスト処理 */
  done(); // doneを実行すると完了とする。(しなくても完了するがcallback関数用)
});
```

[default sample]()

[callback sample]()

### expect

`expect(method)`

expectでメソッドを呼び出した後、比較命令を付与させ比較を行う

## 比較命令

| 命令        | 内容                                       |
| :---------- | :----------------------------------------- |
| .toEqual    | 連想配列の中身が一致するかどうか           |
| .toBe       | 同値であるかどうか                         |
| .toBeTruthy | true                                       |
| .toBeFalsy  | false                                      |
| .toMatch    | 正規表現でマッチするかどうか               |
| .not        | このあとに付与した命令と一致しない場合PASS |

## 特殊な命令

testのための特殊な命令軍

### beforeEach, afterEach

testを実行する前に毎回`beforeEach`関数が実行される。

storeに対する初期値を記述など

[sample beforeEach]()

### beforeAll, afterAll

testを実行する前に`beforeAll`関数が実行される。

`beforeEach`との違いは最初の１回だけ実施されるところにある。

データベースに接続する際の接続処理を記述する

逆にリソース解放のために`afterAll`を使用したりなど。

[sample beforeAll]()