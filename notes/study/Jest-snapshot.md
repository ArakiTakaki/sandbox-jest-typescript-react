# SnapShotのtest

## 必要なパッケージのダウンロード

`npm install react-test-renderer`

## サンプル

```tsx
import React from "react;
import SampleComponent from "....";
import renderer from "react-test-renderer";
test("comment", () => {
  const component = render.create(
    <SampleComponent />
  );
  /* 処理群 */
});
```
