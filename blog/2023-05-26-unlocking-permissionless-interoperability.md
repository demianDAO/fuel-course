---
title: 解锁Hyperlane的无权限互操作
author: fuel
author_title: Fuel Offical
author_url: https://fuel-labs.ghost.io/content/images/size/w100/2021/09/logo.svg
author_image_url: https://fuel-labs.ghost.io/content/images/size/w100/2021/09/logo.svg
tags:
  [
    fuel,
    fuelwiki,
    celestia,
    模块化区块链,
    modular,
    fuelnetwork,
    yul,
    kkdemian,
    kk德米安
  ]
---

原文: <https://fuel-labs.ghost.io/unlocking-permissionless-interoperability-with-hyperlane/?ref=fuelwiki>

编译: kkdemian

      Fuel 正在与 Hyperlane 集成，以实现跨链应用程序和与现有区块链的无许可交互。

![fuelwiki](https://fuel-labs.ghost.io/content/images/size/w2000/2023/05/Fuel_x_Hyperlane_Banner_2.5-1.png)

Fuel Labs 很高兴与 Hyperlane 合作，将无权限互操作性扩展到 Fuel 生态系统，释放出一种简单的、无权限的方式，与现有的区块链连接，让用户快速登入。

在过去几个月中,Hyperlane 和 Fuel 团队致力于构建与 FuelVM 兼容的 Hyperlane 部署,并为 Fuel 带来互操作性。今天,我们很高兴地宣布,Hyperlane 将是 Fuel 的第一个互操作性层,Hyperlane 互操作性堆栈将在 Fuel 推出时准备就绪。

## 什么是 Hyperlane?

Hyperlane 是第一个无许可互操作性层,任何人都可以将 Hyperlane 互操作性堆栈带入任何现成的区块链。利用 Hyperlane,开发人员可以构建链间应用,它可以抽象互换交互的复杂性,并为任何连接链上的用户提供服务。此外,Hyperlane 的模块化安全堆栈使开发人员能够自定义其链间安全。

Hyperlane 是开源的项目,目前由 Abacus Works 的核心开发人员领导。

## Hyperlane 如何补充 Fuel 的多链愿景

Fuel 是区块链技术的一项重大进步。但是，如果没有一种简单和无权限的方式将现有的区块链连接到机载用户，这一切都是徒劳的。

目前,开发人员不得不游说允许的互操作性团队来支持他们的链, 而且互操作性团队无法跟上手动部署到每个新链的速度。由于这种允许的互操作性，新链上的用户和流动性增长受到影响。

- 由于 Hyperlane 的"无允许互操作性"现在支持 FuelVM,因此 Fuel 利益相关者无需担心。Fuel 用户和开发人员现在可以探索 Hyperlane 的独特功能：

  - 将 Hyperlane 部署到任意链上的无允许部署。在这种情况下,任何将来的 FuelVM 汇总都可以无限制地将 Hyperlane 部署到他们的链中,以满足他们的互操作性需求。

  - 通过 Warp Routes 从任何 Hyperlane 支持的链中无权限地桥接任何资产。这对于入职用户和现有链条的流动性尤为重要。

链内应用程序,您的应用程序可以与任何 Hyperlane 支持的链上的其他实例共享状态和流动性。这可以通过将复杂的桥接和链交换概念移动到后端来显着改善用户体验。

为何选择链间应用程序：Yama Finance

一个快速的案例研究,说明在 Fuel 上链间应用程序的含义如何：

Yama Finance 是一个新颖的互换稳定货币和贷款协议，它使借款人能够在波动资产上利用高达 17 倍的杠杆，放大收益率，并提供链上即时流动性。Yama 的稳定币能够通过 Hyperlane 在不同的链条之间传送，没有滑点或流动性陷阱。使用 Hyperlane, Yama 将能够将其稳定币燃烧并铸造到任何支持 Hyperlane 的链条上,以实现无缝链间操作。

目前，Yama 在 Artrium 上只有一个实例，但是有了 Fuel mainnet，它将能够为其稳定组件释放互换协同效应。Yama 的稳定币可以通过 Hyperlane 作为 Artrium 和 Fuel 之间用户的即时流动性桥梁。用户可以直接从 Yama 的界面在链条之间传送他们的 Yama 稳定币，而无需将标签切换到外部桥梁或在官方桥梁上等待。使用 Hyperlane 可以为用户提供更流畅的体验、更快的流动性交换以及更高的应用程序效用。

现在开始使用 Hyperlane x Fuel 构建,使用 Fuel 的文档和 Hyperlane 的文档。

## Fuel：全力以赴扩大以太坊的规模

以太坊对模块化路线图的承诺意味着,在执行层上使计算更具可扩展性和效率是构建更具可扩展性的以太坊生态系统的下一步。替代虚拟机是这一难题的关键部分,而 Fuel 在应对这一挑战时处于领先地位。

Fuel 在设计上具有开发人员的最前沿经验，Sway 语言已经获得了显着的吸引力。通过构建开发人员喜爱的基于 Rust 的 DSL 和综合工具,Fuel 能够吸引数十名新开发人员进入生态系统。

因为 Fuel 将部署在以太坊上，开发人员和用户将直接促进以太坊生态系统的增长，而不是迁移到其它 L1s 上。

## 关注 Fuel

[Twitter](https://twitter.com/fuellabs_?ref=fuelwiki) | [Discord](http://discord.com/invite/xfpK4Pe?ref=fuelwiki) | [LinkedIn](https://www.linkedin.com/company/fuel-labs/?ref=fuelwiki) | [YouTube](https://www.youtube.com/channel/UCam2Sj3SvFSAIfDbP-4jWZQ?ref=fuelwiki)

## 关于 Fuel

Fuel 是最快的模块化执行层。该项目技术功能强大且时尚，可实现并行交易执行，为开发人员提供扩展所需的最高灵活吞吐量和最高安全性。开发人员选择 FuelVM 是因为其卓越的开发体验以及超越 EVM 限制的能力。

### 成为一名贡献者

[探索我们当前的职位空缺](https://jobs.lever.co/fuellabs?ref=fuelwiki)

[学习 Sway](https://fuellabs.github.io/sway/v0.24.5/?ref=fuelwiki)
