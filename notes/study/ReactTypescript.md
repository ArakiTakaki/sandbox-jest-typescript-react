# 基本的な宣言

class と function に関して

## Class の定義方法

```tsx
interface Props {}
interface State {}
class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return <DOM />;
  }
}
```

ジェネリクス型に Props と State を最初に宣言する必要がある。

このため、PropTypes を宣言せずとも直感的に Props と Types を扱え
入力補完にも役立つように設計されている

## function の定義方法

```tsx
interface Props {
  value: string;
}
const TextArea = (props: Props) => {
  return <div>{props.value}</div>;
};

export default TextArea;
```

こちらは引数に型を持たせ、対応させている形を取って居る

## EventHandle

onChange 側の型

- ChangeEventHandler

EventListener 側の型

- ChangeEvent<HTMLInputElement>
  - event.currentTarget.value でイベントの内容を取得できる。
