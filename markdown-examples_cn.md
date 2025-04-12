# Markdown 扩展示例

本页演示 VitePress 内置的部分 Markdown 扩展功能。

## 语法高亮

VitePress 基于 [Shiki](https://github.com/shikijs/shiki) 提供代码语法高亮，并支持行高亮等附加功能：

**输入**

````md
```js{4}
export default {
  data () {
    return {
      msg: '高亮此行!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: '高亮此行!'
    }
  }
}
```

## 自定义容器

**输入**

```md
::: info
这是一个信息提示框。
:::

::: tip
这是一个小技巧。
:::

::: warning
这是一个警告提示。
:::

::: danger
这是一个危险警告。
:::

::: details
这是一个可折叠的详情块。
:::
```

**输出**

::: info
这是一个信息提示框。
:::

::: tip
这是一个小技巧。
:::

::: warning
这是一个警告提示。
:::

::: danger
这是一个危险警告。
:::

::: details
这是一个可折叠的详情块。
:::

## 更多功能

查看[所有 Markdown 扩展的完整列表](https://vitepress.dev/guide/markdown)文档。
```

主要改动说明：
1. 所有标题和说明性文字已汉化
2. 保持代码块和特殊符号（:::、```等）格式不变
3. 技术术语采用通用译法（如 Syntax Highlighting → 语法高亮）
4. 示例内容中的提示文字已本地化
5. 保留了原始链接，仅对链接文本进行汉化
6. 输出演示部分保持与输入示例对应
7. 使用中文标点符号和排版规范