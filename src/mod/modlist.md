---
title: "MOD 推荐"
---

<mark>**待补充使用说明和介绍图片**</mark>

## 性能优化类

### DSPOptimizations
[MOD 介绍页](https://thunderstore.io/c/dyson-sphere-program/p/Selsion/DSPOptimizations/)  
减小密集型戴森壳现在对游戏帧数的影响  
为传送带进出站的逻辑添加了多线程  
降低已发射太阳帆在不可见时对 UPS 的影响 (约 15%)  
隐藏建造中的戴森壳，减小延迟  
可在配置中禁用阴影

### PoolOpt
[MOD 介绍页](https://thunderstore.io/c/dyson-sphere-program/p/soarqin/PoolOpt/)  
游戏使用了大量的内存池数组来存储数据，这些内存池的大小和容量是只会随需求膨胀不会收缩的，即使由于拆除物体导致内部大多数数据不再使用，而未使用的槽位 ID 会被保存在回收数组中以供重复使用。  
一些游戏功能会循环遍历内存池中的所有分配过的槽位，因此内存池的大小会影响性能。  
本 MOD 会在加载游戏存档时优化内存池，去除尾部未使用的槽位，减少内存池数组和回收数组的大小，以获得更好的性能。

### CompressSave
[MOD 介绍页](https://thunderstore.io/c/dyson-sphere-program/p/soarqin/CompressSave/)  
压缩游戏存档以降低空间使用并提升保存速度

### LossyCompression
[MOD 介绍页](https://thunderstore.io/c/dyson-sphere-program/p/starfi5h/LossyCompression/)  
压缩戴森壳，太阳帆，传送带的存档数据。延迟加载戴森壳以减少内存占用。

### 不建议使用的 MOD
SampleAndHoldSim  
介绍：模拟帧 - 减慢远端星球工厂更新频率并放大产出以提升帧率  
解读：读取上一帧进行往后若干帧 (可调整) 模拟，停止工厂用数据代替工厂进行消耗和产出，也就是更改统计数据和虚空产物，使用后物流塔会出现不正常的储存 (负数或几十万)，严重可能导致报错坏档。

## 辅助类

### Auxilaryfunction
[MOD 介绍页](https://thunderstore.io/c/dyson-sphere-program/p/blacksnipebiu/Auxilaryfunction/)  
辅助多功能 mod，纯辅助功能无任何作弊类  
作者的介绍 [橙棂九月的主页](https://space.bilibili.com/6704040)

### UXAssist
[MOD 介绍页](https://thunderstore.io/c/dyson-sphere-program/p/soarqin/UXAssist/)  
一些提升用户体验的功能和补丁  

### BlueprintTweaks
[MOD 介绍页](https://thunderstore.io/c/dyson-sphere-program/p/kremnev8/BlueprintTweaks/)  
通过 QoL 更改、强制粘贴、基础蓝图等新功能改进了蓝图系统

### LSTM
[MOD 介绍页](https://thunderstore.io/c/dyson-sphere-program/p/hetima/LSTM/)  
LSTM - 物流站交通管理器  
在 "星际物流优化" 更新后，该 MOD 大部分功能可通过游戏内的总控面板实现。

### DSPAutoSorter
[MOD 介绍页](https://thunderstore.io/c/dyson-sphere-program/p/appuns/DSPAutoSorter/)  
自动整理背包、库存。

### Planet Vein Utilization
[MOD 介绍页](https://thunderstore.io/c/dyson-sphere-program/p/testpushpleaseignore/Planet_Vein_Utilization/)  
为行星上的每种资源添加开采信息，用于查找当前行星是否有未开采的矿脉。

### BuildToolOpt
[MOD 介绍页](https://thunderstore.io/c/dyson-sphere-program/p/starfi5h/BuildToolOpt/)  
优化建筑工具：减少蓝图介面卡顿，替换物流塔，粘贴蓝图时直接读取剪贴板，(可选) 建设虚影

### PlanetFinder
[MOD 介绍页](https://thunderstore.io/c/dyson-sphere-program/p/hetima/PlanetFinder/)  
提供一个可以搜索拥有特定资源的行星的窗口。

### DeliverySlotsTweaks
[MOD 介绍页](https://thunderstore.io/c/dyson-sphere-program/p/starfi5h/DeliverySlotsTweaks/)  
手搓和建造可以直接使用物流背包的物品，配置文件可改物流背包容量及背包堆叠倍率。

### DSP_Save_Game_Sorter
[MOD 介绍页](https://thunderstore.io/c/dyson-sphere-program/p/JClark/DSP_Save_Game_Sorter/)  
存档按时间排序

### DSP Star Sector Resource Spreadsheet Generator
[MOD 介绍页](https://thunderstore.io/c/dyson-sphere-program/p/GreyHak/DSP_Star_Sector_Resource_Spreadsheet_Generator/)  
生成所有星球及其资源的表格，可用于星球量化。

## 作弊类

### CheatEnabler
[MOD 介绍页](https://thunderstore.io/c/dyson-sphere-program/p/soarqin/CheatEnabler/)  
添加一些作弊功能，同时屏蔽异常检测

### Multfuntion mod
[MOD 介绍页](https://thunderstore.io/c/dyson-sphere-program/p/soarqin/CheatEnabler/)  
提供一些 op 功能  
作者的介绍 [橙棂九月的主页](https://space.bilibili.com/6704040)