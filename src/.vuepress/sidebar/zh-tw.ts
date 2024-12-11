import { sidebar } from "vuepress-theme-hope";

export const zhtwSidebar = sidebar({
  "/zh-TW/": [
    "",
    {
      text: "指南",
      icon: "bxs:book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "知識庫",
      icon: "tdesign:data-base",
      prefix: "knowledge-base/",
      children: "structure",
    },
    {
      text: "工具",
      icon: "tabler:tool",
      prefix: "tools/",
      children: "structure",
    },
    {
      text: "種子與藍圖",
      icon: "ph:blueprint",
      prefix: "blueprints/",
      children: "structure",
    },
    {
      text: "MOD",
      icon: "icon-park-outline:add-mode",
      prefix: "mod/",
      children: "structure",
    },
    {
      text: "鳴謝",
      icon: "material-symbols:account-circle-outline",
      prefix: "thanks/",
      children: "structure",
    },
  ],
});