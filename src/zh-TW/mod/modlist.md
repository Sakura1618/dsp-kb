---
title: "MOD 推薦"
---

<mark>**待補充使用說明和介紹圖片**</mark>

## 性能最佳化類

### DSPOptimizations
[MOD 介紹頁](https://thunderstore.io/c/dyson-sphere-program/p/Selsion/DSPOptimizations/)  
減小密集型戴森殼現在對遊戲幀數的影響  
為傳送帶進出站的邏輯添加了多執行緒  
降低已發射太陽帆在不可見時對 UPS 的影響 (約 15%)  
隱藏建造中的戴森殼，減小延遲  
可在配置中禁用陰影

### PoolOpt
[MOD 介紹頁](https://thunderstore.io/c/dyson-sphere-program/p/soarqin/PoolOpt/)  
遊戲使用了大量的記憶體池數組來儲存數據，這些記憶體池的大小和容量是只會隨需求膨脹不會收縮的，即使由於拆除物體導致內部大多數數據不再使用，而未使用的槽位 ID 會被保存在回收數組中以供重複使用。  
一些遊戲功能會循環遍歷記憶體池中的所有分配過的槽位，因此記憶體池的大小會影響性能。  
本 MOD 會在載入遊戲存檔時最佳化記憶體池，去除尾部未使用的槽位，減少記憶體池數組和回收數組的大小，以獲得更好的性能。

### CompressSave
[MOD 介紹頁](https://thunderstore.io/c/dyson-sphere-program/p/soarqin/CompressSave/)  
壓縮遊戲存檔以降低空間使用並提升保存速度

### LossyCompression
[MOD 介紹頁](https://thunderstore.io/c/dyson-sphere-program/p/starfi5h/LossyCompression/)  
壓縮戴森殼，太陽帆，傳送帶的存檔數據。延遲載入戴森殼以減少記憶體占用。

### 不建議使用的 MOD
SampleAndHoldSim  
介紹：模擬幀 - 減慢遠端星球工廠更新頻率並放大產出以提升幀率  
解讀：讀取上一幀進行往後若干幀 (可調整) 模擬，停止工廠用數據代替工廠進行消耗和產出，也就是更改統計數據和虛空產物，使用後物流塔會出現不正常的儲存 (負數或幾十萬)，嚴重可能導致報錯壞檔。

## 輔助類

### Auxilaryfunction
[MOD 介紹頁](https://thunderstore.io/c/dyson-sphere-program/p/blacksnipebiu/Auxilaryfunction/)  
輔助多功能 mod，純輔助功能無任何作弊類  
作者的介紹 [橙櫺九月的首頁](https://space.bilibili.com/6704040)

### UXAssist
[MOD 介紹頁](https://thunderstore.io/c/dyson-sphere-program/p/soarqin/UXAssist/)  
一些提升用戶體驗的功能和補丁  

### BlueprintTweaks
[MOD 介紹頁](https://thunderstore.io/c/dyson-sphere-program/p/kremnev8/BlueprintTweaks/)  
通過 QoL 更改、強制黏貼、基礎藍圖等新功能改進了藍圖系統

### LSTM
[MOD 介紹頁](https://thunderstore.io/c/dyson-sphere-program/p/hetima/LSTM/)  
LSTM - 物流站交通管理器  
在 "星際物流最佳化" 更新後，該 MOD 大部分功能可通過遊戲內的總控面板實現。

### DSPAutoSorter
[MOD 介紹頁](https://thunderstore.io/c/dyson-sphere-program/p/appuns/DSPAutoSorter/)  
自動整理背包、庫存。

### Planet Vein Utilization
[MOD 介紹頁](https://thunderstore.io/c/dyson-sphere-program/p/testpushpleaseignore/Planet_Vein_Utilization/)  
為行星上的每種資源添加開採資訊，用於尋找當前行星是否有未開採的礦脈。

### BuildToolOpt
[MOD 介紹頁](https://thunderstore.io/c/dyson-sphere-program/p/starfi5h/BuildToolOpt/)  
最佳化建築工具：減少藍圖介面卡頓，替換物流塔，黏貼藍圖時直接讀取剪貼簿，(可選) 建設虛影

### PlanetFinder
[MOD 介紹頁](https://thunderstore.io/c/dyson-sphere-program/p/hetima/PlanetFinder/)  
提供一個可以搜索擁有特定資源的行星的窗口。

### DeliverySlotsTweaks
[MOD 介紹頁](https://thunderstore.io/c/dyson-sphere-program/p/starfi5h/DeliverySlotsTweaks/)  
手搓和建造可以直接使用物流背包的物品，設定檔可改物流背包容量及背包堆疊倍率。

### DSP_Save_Game_Sorter
[MOD 介紹頁](https://thunderstore.io/c/dyson-sphere-program/p/JClark/DSP_Save_Game_Sorter/)  
存檔按時間排序

### DSP Star Sector Resource Spreadsheet Generator
[MOD 介紹頁](https://thunderstore.io/c/dyson-sphere-program/p/GreyHak/DSP_Star_Sector_Resource_Spreadsheet_Generator/)  
生成所有星球及其資源的表格，可用於星球量化。

## 作弊類

### CheatEnabler
[MOD 介紹頁](https://thunderstore.io/c/dyson-sphere-program/p/soarqin/CheatEnabler/)  
添加一些作弊功能，同時屏蔽異常檢測

### Multfuntion mod
[MOD 介紹頁](https://thunderstore.io/c/dyson-sphere-program/p/soarqin/CheatEnabler/)  
提供一些 op 功能
作者的介紹 [橙櫺九月的首頁](https://space.bilibili.com/6704040)
