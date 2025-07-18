---
home: true
icon: home
title: 首頁
heroImage: ./assets/icon/logo.png
# bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
# bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: 戴森球計劃知識庫
heroFullScreen: true
tagline: 專為戴森球計劃玩家設計的遊戲知識庫<br>旨在提供全面的遊戲資訊、攻略、數據、工具等
actions:
  - text: 指南 (必看)
    icon: bxs:book
    link: ./guide/
    type: primary

  - text: 知識庫
    icon: tdesign:data-base
    link: ./knowledge-base/

  - text: 工具
    icon: tabler:tool
    link: ./tools/

  - text: 種子與藍圖
    icon: ph:blueprint
    link: ./blueprints/

  - text: MOD
    icon: icon-park-outline:add-mode
    link: ./mod/
  
  # - text: QQ 群
  #   icon: mingcute:qq-line
  #   link: ./mod/

# highlights:
#   - header: 易於安裝
#     image: /assets/image/box.svg
#     bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
#     bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
#     highlights:
#       - title: 運行 <code>pnpm create vuepress-theme-hope hope-project</code> 以創建一個新的主題項目。
#       - title: 在已有項目根目錄下運行 <code>pnpm create vuepress-theme-hope add .</code> 以在項目中添加主題。

#   - header: 在 Markdown 中添加你想要的內容
#     description: 我們擴展了標準的 CommonMark 規範，為你添加了成噸功能。
#     image: /assets/image/markdown.svg
#     bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
#     bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
#     bgImageStyle:
#       background-repeat: repeat
#       background-size: initial
#     features:
#       - title: 連結檢查
#         icon: clipboard-check
#         details: 檢查 Markdown 連結
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/others.html#link-check

#       - title: 提示容器
#         icon: box-archive
#         details: 用樣式裝飾 Markdown 內容
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/stylize/hint.html

#       - title: GFM 警告
#         icon: bell
#         details: GFM 風格的警告容器
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/stylize/alert.html

#       - title: 選項卡
#         icon: table-columns
#         details: 使用選項卡對相似內容進行分組
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/content/tabs.html

#       - title: 代碼組
#         icon: code
#         details: 使用選項卡對相似代碼進行分組
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/code/code-tabs.html

#       - title: 自訂對齊
#         icon: align-center
#         details: Markdown 中對內容進行自訂對齊
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/stylize/align.html

#       - title: 自訂屬性
#         icon: code
#         details: 為 Markdown 元素添加屬性
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/stylize/attrs.html

#       - title: 上下角標
#         icon: superscript
#         details: 輕鬆在 Markdown 中添加上下角標
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/grammar/sup-sub.html

#       - title: 腳註
#         icon: quote-left
#         details: 在內容中插入腳註
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/content/footnote.html

#       - title: 標記
#         icon: highlighter
#         details: 標記並高亮內容
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/stylize/mark.html

#       - title: 劇透
#         icon: eraser
#         details: 添加劇透標記支持
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/stylize/spoiler.html

#       - title: 任務列表
#         icon: square-check
#         details: 輕鬆插入任務列表
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/grammar/tasklist.html

#       - title: 圖片語法
#         icon: image
#         details: 使用改進的語法指定圖片大小與顏色模式
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/grammar/image.html

#       - title: 組件支持
#         icon: puzzle-piece
#         details: 在 Markdown 中輕鬆插入組件
#         link: https://theme-hope.vuejs.press/zh/guide/component/grammar.html

#       - title: 組件
#         icon: puzzle-piece
#         details: 開箱即用的常用組件
#         link: https://theme-hope.vuejs.press/zh/guide/component/built-in.html

#       - title: Chart.js 支持
#         icon: chart-simple
#         details: 在 Markdown 中展示 Chart.js 圖表
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/chart/chartjs.html

#       - title: 流程圖支持
#         icon: route
#         details: 在 Markdown 中直接寫出流程圖
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/chart/flowchart.html

#       - title: Mermaid 支持
#         icon: chart-pie
#         details: 在 Markdown 中添加 Mermaid 圖例
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/chart/mermaid.html

#       - title: Plantuml 支持
#         icon: diagram-project
#         details: 在 Markdown 中添加 Plant UML 圖表
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/chart/plantuml.html

#       - title: Tex 支持
#         icon: square-root-variable
#         details: Markdown 現在也可以支持 Tex 語法以顯示公式
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/grammar/tex.html

#       - title: 導入文件支持
#         icon: fab fa-markdown
#         details: 將你的文件分段，並在 Markdown 中導入
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/content/include.html

#       - title: 交互示範支持
#         icon: code
#         details: 你可以在 Markdown 中添加交互示範
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/code/playground.html

#       - title: Kotlin 交互示範支持
#         icon: fab fa-kickstarter
#         details: 響應式的 Kotlin 示範
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/code/kotlin-playground.html

#       - title: Vue 交互示範支持
#         icon: fab fa-vuejs
#         details: 在交互示範中展示 Vue 組件
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/code/vue-playground.html

#       - title: Sandpack 交互示範支持
#         icon: code
#         details: Sandpack 驅動的即時的編碼環境
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/code/sandpack.html

#       - title: 代碼案例支持
#         icon: laptop-code
#         details: 你可以很方便的插入代碼案例
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/code/demo.html

#       - title: 幻燈片支持
#         icon: person-chalkboard
#         details: 通過 Reveal.js 在 Markdown 中插入幻燈片
#         link: https://theme-hope.vuejs.press/zh/guide/markdown/content/revealjs.html

#   - header: 可訂製的頁面
#     description: 完整無障礙支持的可訂製外觀
#     image: /assets/image/ui.svg
#     bgImage: https://theme-hope-assets.vuejs.press/bg/9-light.svg
#     bgImageDark: https://theme-hope-assets.vuejs.press/bg/9-dark.svg
#     highlights:
#       - title: 深色模式
#         icon: circle-half-stroke
#         details: 可以自由切換淺色模式與深色模式
#         link: https://theme-hope.vuejs.press/zh/guide/interface/darkmode.html

#       - title: 主題色切換
#         icon: palette
#         details: 支持自訂主題色並允許用戶在預設的主題顏色之間切換
#         link: https://theme-hope.vuejs.press/zh/guide/interface/theme-color.html

#       - title: 更多
#         icon: ellipsis
#         details: RTL 布局，列印支持，全局按鈕等
#         link: https://theme-hope.vuejs.press/zh/guide/interface/others.html

#   - header: 布局
#     description: 一個完美的響應式布局。
#     image: /assets/image/layout.svg
#     bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
#     bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
#     highlights:
#       - title: 導航欄
#         icon: window-maximize
#         details: 完全可訂製的導航欄以及改進的行動端外觀
#         link: https://theme-hope.vuejs.press/zh/guide/layout/navbar.html

#       - title: 側邊欄
#         icon: fas fa-window-maximize fa-rotate-270
#         details: 從文件標題或文件結構中自動生成側邊欄
#         link: https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html

#       - title: 幻燈片頁面
#         icon: person-chalkboard
#         details: 添加幻燈片頁面以顯示你喜歡的內容
#         link: https://theme-hope.vuejs.press/zh/guide/layout/slides.html

#       - title: 布局增強
#         icon: object-group
#         details: 添加路徑導航、頁尾、改進的導航欄、改進的頁面導航等。
#         link: https://theme-hope.vuejs.press/zh/guide/layout/

#       - title: 更多
#         icon: ellipsis
#         details: RTL 布局，列印支持，全局按鈕等
#         link: https://theme-hope.vuejs.press/zh/guide/interface/others.html

#   - header: 新功能
#     image: /assets/image/features.svg
#     bgImage: https://theme-hope-assets.vuejs.press/bg/1-light.svg
#     bgImageDark: https://theme-hope-assets.vuejs.press/bg/1-dark.svg
#     features:
#       - title: 目錄頁面
#         icon: network-wired
#         details: 自動生成目錄頁以及開箱即用的目錄組件
#         link: https://theme-hope.vuejs.press/zh/guide/feature/catalog.html

#       - title: 瀏覽量與評論
#         icon: comment-dots
#         details: 配合 4 個評論服務開啟閱讀量統計與評論支持
#         link: https://theme-hope.vuejs.press/zh/guide/feature/comment.html

#       - title: 文章資訊
#         icon: circle-info
#         details: 為你的文章添加作者、寫作日期、預計閱讀時間、字數統計等資訊
#         link: https://theme-hope.vuejs.press/zh/guide/feature/page-info.html

#       - title: 文章加密
#         icon: lock
#         details: 你可以為你的特定頁面或特定目錄進行加密，以便陌生人不能隨意訪問它們
#         link: https://theme-hope.vuejs.press/zh/guide/feature/encrypt.html

#       - title: 搜索支持
#         icon: search
#         details: 支持 docsearch 和基於用戶端的搜索
#         link: https://theme-hope.vuejs.press/zh/guide/feature/search.html

#       - title: 代碼塊
#         icon: code
#         details: 自訂代碼塊主題、行號、行高亮、複製按鈕等
#         link: https://theme-hope.vuejs.press/zh/guide/feature/code-block.html

#       - title: 圖片預覽
#         icon: image
#         details: 像相冊一樣允許你瀏覽、縮放並分享你的頁面圖片
#         link: https://theme-hope.vuejs.press/zh/guide/feature/photo-swipe.html

#   - header: 部落格
#     description: 通過主題創建個人部落格
#     image: /assets/image/blog.svg
#     bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
#     bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
#     highlights:
#       - title: 部落格功能
#         icon: blog
#         details: 通過文章的日期、標籤和分類展示文章
#         link: https://theme-hope.vuejs.press/zh/guide/blog/intro.html

#       - title: 部落客頁
#         icon: home
#         details: 全新部落客頁
#         link: https://theme-hope.vuejs.press/zh/guide/blog/home.html

#       - title: 部落客資訊
#         icon: home
#         details: 自訂名稱、頭像、座右銘和社交媒體連結
#         link: https://theme-hope.vuejs.press/zh/guide/blog/blogger.html

#       - title: 時間線
#         icon: home
#         details: 在時間線中瀏覽和通讀博文
#         link: https://theme-hope.vuejs.press/zh/guide/blog/timeline.html

#   - header: 高級
#     description: 增強站點與用戶體驗的進階功能
#     image: /assets/image/advanced.svg
#     bgImage: https://theme-hope-assets.vuejs.press/bg/4-light.svg
#     bgImageDark: https://theme-hope-assets.vuejs.press/bg/4-dark.svg
#     highlights:
#       - title: SEO 增強
#         icon: dumbbell
#         details: 將最終生成的網頁針對搜尋引擎進行最佳化。
#         link: https://theme-hope.vuejs.press/zh/guide/advanced/seo.html

#       - title: Sitemap
#         icon: sitemap
#         details: 自動為你的網站生成 Sitemap
#         link: https://theme-hope.vuejs.press/zh/guide/advanced/sitemap.html

#       - title: Feed 支持
#         icon: rss
#         details: 生成你的 Feed，並通知你的用戶訂閱它
#         link: https://theme-hope.vuejs.press/zh/guide/advanced/feed.html

#       - title: PWA 支持
#         icon: mobile-screen
#         details: 讓你的網站更像一個 APP
#         link: https://theme-hope.vuejs.press/zh/guide/advanced/pwa.html

---

[<div style="text-align: center;">"源於玩家智慧，致力於玩家體驗，一切始於玩家，一切服務玩家。"</div>](/guide/)

![知識庫使用次數](https://profile-counter.glitch.me/Sakura1618/count.svg)
