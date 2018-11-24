# Typescript

## 基本的な型宣言

number: おなじみnumber(double型も含まれている？)

boolean: true or false

string: おなじみ String

void: 変数としては定義不可

null: 変数としては定義不可

undefined: 変数としては定義不可

any: 従来のJavascript型、JSONをわざわざマッピングしたくない際に使用することが多い

## 宣言方法

```ts
// Scala
let x: number;
const x = 5;

// Array
const array: string[] = ['foo', 'bar', 'baz'];
const prime: number[] = [2, 7, 13, 29];

// 基本的なObject型
interface Position {
    top: number;
    left: number;
}
const position: Position = {};
position.top = 100; // Can be accessed!

// 即興Object
const dict: {key?: string;} = {};//プロパティを省略可能であるという印として?を識別子を使用
dict.key    = 'abc'; // Compile error!
dict['key'] = 'abc'; // OK

```

型推論もあるので基本的にはこのように宣言すると良いかも

