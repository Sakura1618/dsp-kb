---
title: 游戏设置与存档结构
description: 
---

## 戴森球计划云存档

> [!caution]
> 戴森球计划没有云存档！只能在本地保存游戏进度。

> [!tip]
> 请定期备份整个 [Dyson Sphere Program](#默认存档位置) 文件夹，以防止数据丢失。
> 推荐使用云盘同步存档，并定期手动进行云备份。

## 游戏外设置
### 默认存档位置

```
%USERPROFILE%\Documents\Dyson Sphere Program
```

点上面框内的按钮复制路径，在文件夹路径中粘贴，按回车会自动跳转本地文件夹。

### 如何更改存档位置

1. 打开游戏根目录：  
戴森球计划 - 管理 - 浏览本地文件

![Steam 玩家可以参考操作](/assets/image/save1.webp)

2. 进入 Configs 文件夹，新建 path.txt 文件，填写想要修改的存放路径。  
此处填写 `F:\` ，即代表修改数据存放位置为 F 盘根目录，如图所示：

![修改示例](/assets/image/save2.webp)

3. 修改后请手动转移之前的存档，后续的数据会存储在修改的位置。

戴森球计划数据结构说明：
```
├── Achievement 
│   └── steamID 成就数据
├── Blueprint 工厂蓝图
├── Customize 
│   └── Mecha 机甲蓝图
│        └── .mecha 以.mecha结尾的是机甲蓝图文件
├── DysonBluePrint 戴森球蓝图 (需模组)
├── Property
│    └── steamID 元数据
├── Save 存档
│    ├── .dsv 以.dsv结尾的是原版存档文件
│    └── .moddsv 以.moddsv结尾的是模组数据文件 (如果不使用模组不会有该类型文件)
└── options.xml 游戏内设置
```

## 游戏内设置
### 画面设置
简单来说：前期拉满，后期全关。

| 设置名称 | 可选项 | 释义 | 推荐 |
| :--- | :-: | :-: | :-: |
| 视频分辨率 | - | 游戏画面分辨率 | 显示器分辨率 |
| 全屏 | - | 是否全屏模式 | 开启 |
| 垂直同步 | - | 限制游戏帧率至显示器刷新率，可减少画面撕裂，但可能会感觉卡顿 | 自行判断 |
| 最大帧速率 | 自动/其它 | 限制游戏最大帧速率 | 自动 |
| 泛光效果 | 关闭/高/减弱 | 游戏画面泛光效果 | 高 |
| 屏幕空间环境光遮蔽 (SSAO) | - | 在不大幅增加计算负担的情况下，显著提升游戏场景的真实感和视觉质量 | 开启，如帧数过低可选择关闭 |
| 多重采样抗锯齿 (MSAA) | 禁用/2x/4x/8x | 减少或消除图形中的锯齿边缘，提高图像的质量和视觉平滑度 | 越高质量越好，如帧数过低可选择禁用 |
| 快速近似抗锯齿 (FXAA) | - | 不牺牲太多性能的情况下改善游戏视觉质量 | 开启 |
| 星球大气层模糊 | 关 - 120% | 星球大气层模糊效果 | 建议关闭 |
| 星球地表自阴影 | - | 提供更真实的星球阴影效果 | 开启 |
| 暗部噪点 | - | 提供更真实的暗部效果 | 开启 |
| 渲染行星云层 | - | 提供更真实的天空效果 | 建议关闭 |
| 渲染云雾粒子特效 | - | 提供更真实的天空效果 | 建议关闭 |
| 残骸最大数量 | 0 - 1000 | 游戏中残骸的最大数量 | 保持默认，如果残骸数量多时卡顿，可视情况降低 |