// .vuepress/client.js
import { defineClientConfig } from 'vuepress/client';
import { setupTransparentNavbar } from 'vuepress-theme-hope/presets/transparentNavbar.js';
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";

export default defineClientConfig({
  setup: () => {
    setupTransparentNavbar({ type: 'homepage' });
  },
  setup() {
    setupRunningTimeFooter(
      new Date("2024-12-03"),
      {
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
  },
});
