import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://dsp-kb.top",

  author: {
    name: "DSP-KB",
    url: "https://github.com/Sakura1618",
  },

  darkmode: "enable",

  license: "CC BY-NC-SA 4.0",

  iconAssets: "iconify",

  logo: "/logo.svg",

  favicon: "/logo.svg",

  repo: "Sakura1618/dsp-kb",

  docsDir: "src",

  headerDepth: 6,

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "请遵循 <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/' target='_blank'>CC BY-NC-SA 4.0</a>",
  displayFooter: true,

  //版权信息
  copyright: "Copyright © 2024-至今 DSP-KB. All rights reserved",

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注：这对更新性能有很大负面影响
  // hotReload: true,
  markdown:{
    alert: true,
    align: true,
    attrs: true,
    breaks: true,
    component: true,
    codeTabs: true,
    demo: true,
    echarts: true,
    figure: true,
    flowchart: true,
    footnote: true,
    gfm: true,
    include: true,
    mark: true,
    obsidianImgSize: true,
    plantuml: true,
    spoiler: true,
    imgLazyload: true,
    imgSize: true,
    tabs: true,
    sub: true,
    sup: true,
    tasklist: true,
    vPre: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    revealjs: {
      plugins: ["highlight", "math", "search", "notes", "zoom"],
    },
  },
  // 在这里配置主题提供的插件
  plugins: {
    comment: {
      provider: "Giscus",
      repo: "Sakura1618/dsp-kb-giscus",
      repoId: "R_kgDONXLENg",
      category: "Announcements",
      categoryId: "DIC_kwDONXLENs4CkxTd",
    },

    components: {
      components: [
        "ArtPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VPBanner",
        "VPCard",
        "VidStack",
        "XiGua",
      ],
    },

    slimsearch: true,

    // notice: {
    //   config: [
    //     {
    //       path: '/',
    //       fullscreen: true,
    //       showOnce: false,
    //       title: '公告',
    //       content: '知识库正在搭建中...<br>群：746596008<br>出现 BUG 请在群内反馈<br>参与开发、编写内容请联系群主',
    //       actions: [
    //         {
    //           text: '加入群聊',
    //           link: 'https://qm.qq.com/q/C7bnpa3NbG',
    //           type: 'primary',
    //         },
    //         { text: '我知道了' },
    //       ],
    //     },
    //   ],
    // },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
