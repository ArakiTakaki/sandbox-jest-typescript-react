# enzyme とは

- React のユニットのテストコードの記述を簡単にしてくれるユーティリティ
- 公式でも使用が推奨されている。
- jsx の DOM へのアクセスを楽にしてくれる jQuery ライクなセレクタが存在している。

## package

使用するパッケージ群

- enzyme
- @types/enzyme
- enzyme-adapter-react-16
  - react のバージョンに合わせた adapter が必要

## SampleCode

`entry point`に`setupTests.js`を作成する。

//TODO なぜ作成しなければいけないかわからないので後日調べる。

```javascript : sampleTest.js
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
```

test を行うコンポーネントに対して設定

```javascript
import React from "react";
import { shallow } from "enzyme";
import App from "../src/App";

test('handleClickを呼び出すと、setStateが呼び出されること', () => {
  // == 準備 ==
  /** Appコンポーネントをshallowレンダリング */
  const wrapper = shallow(<App />);
  /** setStateをスパイ化 */
  const setStateSpy = jest.spyOn(App.prototype, 'setState');
  /** setStateしてthis.state.inputValueの値を'XXX'に更新 */
  wrapper.setState({
    inputValue: 'XXX',
  });

  // == 実行 ==
  /** handleClick()を呼び出す */
  wrapper.instance().handleClick();

  // == 検証 ==
  /** 適切な引数でspy化したsetStateが呼び出されていればOK */
  expect(setStateSpy).toHaveBeenCalledWith({
    text: 'XXX',
    inputValue: '',
  });
});
```

解説

`const wrapper = shallow(Component);`

使用できるメソッド一覧

| 命令                  | 効果                               |
| :-------------------- | :--------------------------------- |
| text()                | test                               |
| find(Component)       | コンポーネントを配列として取得する |
| setState(Object)      | setStateを実行する                 |
| instance().callback() | callbackを実行しさせる             |
