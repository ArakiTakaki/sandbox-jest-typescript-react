# CSSに関しての学びノート

## レイアウトを崩さないBorder

[Outline](http://www.htmq.com/style/outline.shtml)

CSSを書いている際に

```sass
.class:hover
    border-bottom: solid #000 1px
```

などを指定したい場合があるがこの場合他の設定が色々必要になり面倒な場合が多い。

その場合、他の要素に影響を与えずに記述できるプロパティを発見した

```sass
.class:hover
    outline: solid #000 1px
```

ブロックの要素に＋１pxする必要もないので、積極的に使用していこう。

