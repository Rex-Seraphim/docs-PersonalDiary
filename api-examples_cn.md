---
outline: deep
---

# 运行时 API 示例

本页展示部分 VitePress 运行时 API 的使用示例。

核心的 `useData()` API 可用于获取当前页面的站点、主题和页面数据。该 API 在 `.md` 和 `.vue` 文件中均可使用：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## 运行结果

### 主题数据
<pre>{{ theme }}</pre>

### 页面数据
<pre>{{ page }}</pre>

### 页面 Frontmatter
<pre>{{ frontmatter }}</pre>
```
<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 运行结果

### 主题数据
<pre>{{ theme }}</pre>

### 页面数据
<pre>{{ page }}</pre>

### 页面 Frontmatter
<pre>{{ frontmatter }}</pre>

## 更多

查看 [所有运行时 API 的完整列表](https://vitepress.dev/reference/runtime-api#usedata)文档.