# enzymeとは

- Reactのユニットのテストコードの記述を簡単にしてくれるユーティリティ
- 公式でも使用が推奨されている。
- jsxのDOMへのアクセスを楽にしてくれるjQueryライクなセレクタが存在している。

## package

使用するパッケージ群

- enzyme
- @types/enzyme
- enzyme-adapter-react-16
    - reactのバージョンに合わせたadapterが必要

## SampleCode

```javascript : sampleTest.js
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
```
