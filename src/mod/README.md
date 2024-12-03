---
title: MOD
---

本篇内容整理自 [TTenYX 专栏](https://www.bilibili.com/opus/847736861052895287)

## R2modman (mod 管理器) 的介绍

[R2modman](https://dsp.thunderstore.io/package/ebkr/r2modman/) 是一款基于 [Thunderstore](https://thunderstore.io/c/dyson-sphere-program/) 的 mod 管理器、启动器。R2modman 可以让玩家更方便地浏览、安装、卸载和更新游戏中的各种 mod，并支持多个配置文件 (每个配置文件可开启不同 mod)。

使用 R2modman 能极大的降低 mod 安装和管理的难度，非常推荐使用。

## 如何下载和安装 R2modman

[点我直接下载](https://thunderstore.io/package/download/ebkr/r2modman/3.1.54/)

[点我跳转官网](https://thunderstore.io/c/dyson-sphere-program/p/ebkr/r2modman/) 跳转官网后点击 <mark>Manual Download</mark> 即可下载

![如图所示](/assets/image/mod1.png)

安装：根据提示安装即可。

## R2modman 的基础使用

1. 打开 R2modman
2. 输入游戏名 (下面可直接复制)，选择 Set as default，然后选择对应平台。
```
Dyson Sphere Program
```
![如图所示](/assets/image/mod2.png)

3. 等待加载完成，默认只有一个 Default 配置，可以直接进入也可以创建新配置。(不支持中文命名)

![选项释义](/assets/image/mod3.png)

4. 界面介绍

![界面介绍](/assets/image/mod4.png)

5. 点击左侧的 Online 按钮，可以浏览和下载 MOD，点击 Download 按钮后 如果不需要指定 MOD 版本，可以直接点 Download with dependencies 进行下载 (会自动安装依赖 MOD)。

![如何浏览和安装 MOD](/assets/image/mod5.png)

6. 安装完模组后，回到 Installed 页面，点击 MOD 右侧的按钮即可启用或禁用 MOD。

    如果出现顶部黄色提示或者云朵图标，说明该模组有可用更新，可以选中需要更新的模组，点击 Update 按钮进行更新。

    Uninstall 可以卸载 MOD，Disable 可以禁用 MOD (与按钮功能一样)

![启用、禁用、更新 MOD](/assets/image/mod6.png)

7. 下载安装好模组后，点击 Start modded 按钮启动游戏。 

    如果你正在游戏，请先关闭游戏，再点击 Start modded 按钮。  
    如需进行原版游戏，请点击 Start vanilla 按钮或直接 Steam 启动游戏。  
    装了 MOD 不影响 Steam 原版游戏，只有通过 R2modman 的 Start modded 启动游戏才会加载 MOD。

## 如何修改 MOD 配置

以物品堆叠 MOD [DeliverySlotsTweaks](https://dsp.thunderstore.io/package/starfi5h/DeliverySlotsTweaks/) 为例  

**配置文件 (.cfg) 需要先运行过游戏一次才会出现**  

1. 在 r2modman 中点击 Config editor 按钮，找到 MOD 对应的配置文件  
    在此处为 BepInEx\config\starfi5h.plugin.DeliverySlotsTweaks.cfg
2. 点击 Edit Config 按钮，修改需要的 MOD 配置，修改完成之后点击右上角的 Save 进行保存。
3. 点击 Start modded 按钮启动游戏，正在游戏的请重新启动游戏。

## 模组推荐

前往模组推荐：<HopeIcon icon="icon-park-outline:add-mode" /> [模组推荐](modlist)

## 常见问题

- 我看不懂界面上的英文：  

    使用手机翻译拍照翻译，或者使用电脑 QQ 截图翻译。

- 我搜索不到想要的 MOD:  

    确定你在 Online 页面进行搜索，而不是 Installed 页面；  
    确认搜索名称是否正确；
    在搜索不确定的 mod 名称时应尽量减少输入的关键词并多次尝试。

- 按照以上方法正常安装启动后启动发现 MOD 未生效，但曾经生效过：  

    如果卸载过游戏再装的，看一下前后游戏的安装目录是否一致，R2modman 只能自动识别到第一次的安装目录，如果修改了游戏安装目录，需要自行手动配置新的路径。  
    点击 Settings -> Change Dyson Sphere Program folder  查看 R2modman 识别到的游戏安装路径，确保其中包含 DSPGAME.exe 文件。

- 我在装 MOD 后出现报错或游戏崩溃：  

    请尝试卸载该 MOD 并重新安装；  
    如果问题依然存在，请参考下条询问群友。

- 我有其它问题：    

    进入 [戴森球计划知识库 QQ 群 (746596008)](https://qm.qq.com/q/8xKItW0dBS)，发送你的**问题截图**，并尽可能详细地描述问题：  
    **我是如何操作的、遇到了什么问题、期望的结果是什么、实际的结果是什么等。**
