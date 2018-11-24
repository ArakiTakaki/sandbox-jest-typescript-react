# 初期設定

## `tsconfig.json`の生成と設定

`$ tsc --init` > tsconfig.json の生成

コメントアウトを除いた初期設定

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "jsx": "react",
    "experimentalDecorators": true
  }
}
```

experimentalDecorators

いわゆる@functionでwrapできるようにするやつ `export default hot(SampleClass)`的なやつを

```ts
@hot
class SampleClass {}
```

という形で記述できるようにする。

## tslint.json の設定

下記をコピペ、後日コメントを入れて行く。

```json
{
  "defaultSeverity": "error",
  "rulesDirectory": ["tslint-plugin-prettier"],
  "extends": [
    "tslint:latest",
    "tslint-react",
    "tslint-config-airbnb",
    "tslint-config-prettier"
  ],
  "linterOptions": {
    "exclude": [
      "config/**/*.js",
      "node_modules/**/*.ts",
      "coverage/lcov-report/*.js"
    ]
  },
  "rules": {
    "prettier": [
      true,
      {
        "semi": true,
        "singleQuote": true,
        "printWidth": 120,
        "trailingComma": "es5"
      }
    ],
    "no-console": false,
    "variable-name": [
      true,
      "ban-keywords",
      "check-format",
      "allow-pascal-case",
      "allow-leading-underscore"
    ],
    "import-name": false,
    "ordered-imports": false,
    "interface-name": false,
    "no-empty-interface": false,
    "object-literal-sort-keys": false,
    "object-literal-shorthand": true,
    "jsx-no-lambda": false,
    "no-submodule-imports": [true, "excluded-module1", "excluded-module2"]
  },
  "jsRules": {}
}
```

## vscode の設定

`.vscode/setting.json`

typescript 用の設定を記述する。

```json
{
  "editor.formatOnSave": true,
  "tslint.autoFixOnSave": true,
  "tslint.packageManager": "yarn",
  "prettier.singleQuote": true,
  "prettier.semi": true,
  "prettier.printWidth": 120,
  "prettier.trailingComma": "es5"
}
```
