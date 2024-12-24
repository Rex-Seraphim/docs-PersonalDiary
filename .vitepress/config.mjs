import { defineConfig } from 'vitepress'
//import { set_siderbar} from "../utils/auto-sidebar.js"; //自动生成左侧边栏

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs-PersonalDiary/",

  head:[["link",{rel: "icon", href: "/docs-PersonalDiary/logo.png"}]],

  title: "Personal-Diary",
  description: "A VitePress Site",
  themeConfig: {
    logo:'/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [  

      // 这个目录下可以有多个章节，text是一个小章节的标题，其中可以包括多个内容

      {
        text: 'Examples',
        items: [
          { text: 'Markdown 演示', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown 演示', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
      
    ],

    // sidebar: { "/front-end/react": set_sidebar("front-end/react") },
    //这个好像有自动化，但是貌似教程写的比较细碎，再说吧

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Rex-Seraphim' }
    ],
    footer:{
      copyright:"Copyright @ 2024 personal-diary RexSeraphim"
    },
   // 设置搜索框的样式
   search: {
    provider: "local",
    options: {
      translations: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          noResultsText: "无法找到相关结果",
          resetButtonTitle: "清除查询条件",
          footer: {
            selectText: "选择",
            navigateText: "切换",
          },
        },
      },
    },
  },


  }
})
