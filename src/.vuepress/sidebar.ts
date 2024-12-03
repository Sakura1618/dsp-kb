import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "指南",
      icon: "bxs:book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "知识库",
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
      text: "种子与蓝图",
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
      text: "鸣谢",
      icon: "material-symbols:account-circle-outline",
      prefix: "thanks/",
      children: "structure",
    },
  ],
});
