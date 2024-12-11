---
title: MOD
---

本篇內容整理自 [TTenYX 專欄](https://www.bilibili.com/opus/847736861052895287)

## R2modman (mod 管理器) 的介紹

[R2modman](https://dsp.thunderstore.io/package/ebkr/r2modman/) 是一款基於 [Thunderstore](https://thunderstore.io/c/dyson-sphere-program/) 的 mod 管理器、啟動器。R2modman 可以讓玩家更方便地瀏覽、安裝、卸載和更新遊戲中的各種 mod，並支持多個設定檔 (每個設定檔可開啟不同 mod)。

使用 R2modman 能極大的降低 mod 安裝和管理的難度，非常推薦使用。

## 如何下載和安裝 R2modman

[點我直接下載](https://thunderstore.io/package/download/ebkr/r2modman/3.1.54/)

[點我跳轉官網](https://thunderstore.io/c/dyson-sphere-program/p/ebkr/r2modman/) 跳轉官網後點擊 <mark>Manual Download</mark> 即可下載

![如圖所示](/assets/image/mod1.webp)

安裝：根據提示安裝即可。

## R2modman 的基礎使用

1. 打開 R2modman
2. 輸入遊戲名 (下面可直接複製)，選擇 Set as default，然後選擇對應平台。
```
Dyson Sphere Program
```
![如圖所示](/assets/image/mod2.webp)

3. 等待載入完成，默認只有一個 Default 配置，可以直接進入也可以創建新配置。(不支持中文命名)

![選項釋義](/assets/image/mod3.webp)

4. 界面介紹

![界面介紹](/assets/image/mod4.webp)

5. 點擊左側的 Online 按鈕，可以瀏覽和下載 MOD，點擊 Download 按鈕後 如果不需要指定 MOD 版本，可以直接點 Download with dependencies 進行下載 (會自動安裝依賴 MOD)。

![如何瀏覽和安裝 MOD](/assets/image/mod5.webp)

6. 安裝完模組後，回到 Installed 頁面，點擊 MOD 右側的按鈕即可啟用或禁用 MOD。

    如果出現頂部黃色提示或者雲朵圖示，說明該模組有可用更新，可以選中需要更新的模組，點擊 Update 按鈕進行更新。

    Uninstall 可以卸載 MOD，Disable 可以禁用 MOD (與按鈕功能一樣)

![啟用、禁用、更新 MOD](/assets/image/mod6.webp)

7. 下載安裝好模組後，點擊 Start modded 按鈕啟動遊戲。 

    如果你正在遊戲，請先關閉遊戲，再點擊 Start modded 按鈕。  
    如需進行原版遊戲，請點擊 Start vanilla 按鈕或直接 Steam 啟動遊戲。  
    裝了 MOD 不影響 Steam 原版遊戲，只有通過 R2modman 的 Start modded 啟動遊戲才會載入 MOD。

## 如何修改 MOD 配置

以物品堆疊 MOD [DeliverySlotsTweaks](https://dsp.thunderstore.io/package/starfi5h/DeliverySlotsTweaks/) 為例  

**設定檔 (.cfg) 需要先運行過遊戲一次才會出現**  

1. 在 r2modman 中點擊 Config editor 按鈕，找到 MOD 對應的設定檔  
    在此處為 BepInEx\config\starfi5h.plugin.DeliverySlotsTweaks.cfg
2. 點擊 Edit Config 按鈕，修改需要的 MOD 配置，修改完成之後點擊右上角的 Save 進行保存。
3. 點擊 Start modded 按鈕啟動遊戲，正在遊戲的請重新啟動遊戲。

## 模組推薦

前往模組推薦：<HopeIcon icon="icon-park-outline:add-mode" /> [模組推薦](modlist)

## 常見問題

- 我看不懂界面上的英文：  

    使用手機翻譯拍照翻譯，或者使用電腦 QQ 截圖翻譯。

- 我搜索不到想要的 MOD:  

    確定你在 Online 頁面進行搜索，而不是 Installed 頁面；  
    確認搜索名稱是否正確；
    在搜索不確定的 mod 名稱時應盡量減少輸入的關鍵字並多次嘗試。

- 按照以上方法正常安裝啟動後啟動發現 MOD 未生效，但曾經生效過：  

    如果卸載過遊戲再裝的，看一下前後遊戲的安裝目錄是否一致，R2modman 只能自動識別到第一次的安裝目錄，如果修改了遊戲安裝目錄，需要自行手動配置新的路徑。  
    點擊 Settings -> Change Dyson Sphere Program folder  查看 R2modman 識別到的遊戲安裝路徑，確保其中包含 DSPGAME.exe 文件。

- 我在裝 MOD 後出現報錯或遊戲崩潰：  

    請嘗試卸載該 MOD 並重新安裝；  
    如果問題依然存在，請參考一下條詢問群友。

- 我有其它問題：    

    進入 [戴森球計劃知識庫 QQ 群 (746596008)](https://qm.qq.com/q/8xKItW0dBS)，發送你的**問題截圖**，並盡可能詳細地描述問題：  
    **我是如何操作的、遇到了什麼問題、期望的結果是什麼、實際的結果是什麼等。**
