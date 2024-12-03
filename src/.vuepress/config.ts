import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "戴森球计划知识库",
  description: "戴森球计划知识库",
  markdown: {
    headers: {
      // 用到哪一级就提取哪一级
      level: [2, 3, 4, 5, 6],
    },
  },

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
