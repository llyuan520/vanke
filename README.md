<h1 align="center">vanke</h1>

主要使用：

- [umijs](https://umijs.org/zh/) --- 手脚架
- [ant-design-pro-cli](https://github.com/ant-design/ant-design-pro-cli) --- 构建工具
- [docz](https://github.com/pedronauck/docz) --- 组件文档库
- [ant-design-pro](https://github.com/ant-design/ant-design-pro) --- 组件库
- [ant design](https://ant.design) --- 组件库
- [jest](https://github.com/facebook/jest) --- UI测试组件库
- [Enzyme](https://github.com/airbnb/enzyme/) --- UI测试组件库
- [Commitizen](https://github.com/commitizen) --- Commit message 和 Change log
- [cross-env](https://github.com/kentcdodds/cross-env) --- 跨平台设置环境变量

## 导航
- [docz](#docz)
## docz

```bash
$ yarn add docz --dev
```

最好在package.json里面配置启动项的别名怕跟其它的有冲突（可选）

```markdown
{
  "scripts": {
      "docz:dev": "docz dev",
      "docz:build": "docz build"
    }
}
```

然后在项目内的任何位置创建一些以`.mdx`为后缀的文件:

```markdown
---
name: Button
---

import { Playground, PropsTable } from 'docz'
import Button from './'

# Button

<PropsTable of={Button} />

## Basic usage

<Playground>
  <Button>Click me</Button>
  <Button kind="secondary">Click me</Button>
</Playground>
```

启动服务:

```bash
$ yarn docz dev
```

- [Commitizen](#Commitizen)
## Commitizen
> 使用目的:统一commit格式，增加可阅读性，自动生成版本的 changelog

- 生成 Change log
```sh
$ npm run changelog
```

- 安装 commitizen
```sh
$ npm install -g commitizen
$ npm install -g conventional-changelog --``不包含命令行工具
$ npm install -g conventional-changelog-cli  --``含命令行工具
```

cd vtax

```sh
$ commitizen init cz-conventional-changelog --save --save-exact
```

使用 ```git cz``` 命令代替 ```git commit```

**常用选项**

- feat: 新功能
- fix: bug修复
- docs: 仅修改文档
- style: 不影响代码的修改 ( 空格、格式化、缺少分号等 )
- refactor: 代码重构
- perf: 修改代码提升性能
- test: 添加或者修改测试代码

**scope name 说明**

- 如果是某个模块的修改则输入该模块具体名称，通用组件的修改则输入 ```通用组件-ComonentName``` 的形式；


**short description**

- 此次变更的简单标题，尽量简短描述


**longer description**

- 此次变更的详细描述，可以具体描述


**affect any open issues**

- 变更影响到某个已知的问题的话请选上,按照提示填写对应禅道编号的bug

## workflow
1. Make changes
2. Commit those changes
3. Make sure Travis turns green
4. Bump version in package.json
5. conventionalChangelog
6. Commit package.json and CHANGELOG.md files
7. Tag
8. Push

