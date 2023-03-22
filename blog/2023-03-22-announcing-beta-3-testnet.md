---
title: Fuel 的“Beta-3”测试网已上线！
author: fuel
author_title: Fuel Offical
author_url: https://fuel-labs.ghost.io/content/images/size/w100/2021/09/logo.svg
author_image_url: https://fuel-labs.ghost.io/content/images/size/w100/2021/09/logo.svg
tags: [fuel, fuelwiki, celestia, 模块化区块链, modular, fuelnetwork, yul]
---

体验 P2P 网络等新功能，并参与塑造以太坊的未来。

![](https://fuel-labs.ghost.io/content/images/size/w2000/2023/02/Announcement_banner_1.png)

这篇文章由 Fuel 大使通过俄语翻译而来。

我们很高兴地宣布推出 beta-3 测试网，在 Fuel 上增加 P2P 网络。有了这第三个测试网，Fuel 进入了测试的后期阶段，并在通往主网的道路上达到了一个关键的里程碑，这是一个模块化的未来，为以太坊生态系统实现真正的可扩展性。

11 月，我们推出了 beta-2，增加了桥接支持，以便开发者可以在 Fuel 上进行跨链 dapp 的实验。我们很高兴看到一个充满活力的生态系统在 Fuel 上出现，现在有超过[25 个项目](https://fuel.build/?ref=fuelwiki)在这里。自之前 Beta2 以来，已经处理了超过 900,000 笔交易，并看到了来自开发者、项目和社区成员的巨大兴趣。

激动人心的新可能性正等待着 beta-3 的到来。

## P2P 网络现在在 Fuel 上

beta-3 扩展了 beta-2 的功能，引入了**P2P 网络和运行同步全节点的能力**。这使得 beta-3 的 API 能够扩展到并达到 beta-2 中观察到的需求水平。在接下来的测试网中，我们将启用公共 P2P 访问，这样任何人都可以运行连接到 Fuel 的本地节点。

**请注意，beta-3 不是一个激励性的测试网。参与这个网络不会有直接的奖励。**

## 关键功能

以下是 beta-3 测试网的关键功能的完整列表:

### ⛓️ 区块同步

同步的完整节点可以通过 P2P 网络与 Fuel 网络同步。这主要是对于能够分叉主网状态进行合约测试或拥有一个专门的全节点进行应用索引的事情很有用。虽然 P2P 已经启用，但目前只适用于我们用来加速/扩展 API 的可信连接。

### 🤝 单一共享网络

beta-3 是一个共享的、面向开发者和用户的公共测试网。开发者可以部署合同，然后用户可以与这些合同进行交互。

### 🚰 水龙头

任何人都可以使用龙头来获得一些测试 ETH 来部署或与合约互动。可在此[领取](https://faucet-beta-3.fuel.network/?ref=fuelwiki)。

### 📃 GraphQL 端点

Fuel Core 节点使用 GraphQL 而不是 JSON RPC。beta-3 的公共 GraphQL 端点的玩法可在此获得。

### 🔍 区块浏览器

这里有一个区块资源管理器（仍然大量是一个正在进行的工作）。

如果你有任何问题（与开发有关或其他），你可以加入 Fuel Labs Discord 并前往 Testnet 类别下的#questions 频道。请务必关注我们的 Twitter，了解最新信息。

## 新内容

### 编译器

由于引入了各种后端优化，编译器现在能够更稳健、更有效地处理大型设计，从而使字节码大小减少 30%。还引入了新的功能和增强功能，如支持可变静态数组，#[应付]注解，消除了~访问相关函数的需要，能够从脚本中返回 Vec，以及能够通过 main()在谓词中传递谓词数据。

### 🌐 客户端

支持运行本地节点的块同步（见上面的关键特征）

Gas 计量的谓词 - 谓词费用的计算与脚本类似，解锁标准控制流的能力，如循环或动态跳转。谓词使用的气体从整个 txn 汽油限额中扣除，防止昂贵的操作码被低估。

修订后的气体时间表--vm 操作码是根据更精确的基准系统重新定价的。随着更多的功能和优化的加入，气体时间表将继续调整，新的定价框架将使其更容易发现变化并在必要时调整定价。

新的数据库优化，以提高 API 性能。

### 🔧 工具箱

### forc test 语法高亮

现在你可以使用 `#[test(should_revert)]` 属性来描述一个预期会恢复的单元测试。这使得测试失败状态成为可能。

测试输出现在显示失败测试的名称、文件路径和行数。

为单元测试中的合同调用奠定了基础。当在一个合同项目上运行 forc test 时，forc 将首先构建和部署合同，然后再构建和运行单元测试。这使得早期支持单元测试中的合同调用。

### fuelup 亮点

现在支持用 fuel-toolchain.toml 覆盖工具链。这样就可以把目录和仓库钉在特定的 fuelup 通道和组件版本上，提高 Fuel 项目的可重复性。

### forc doc 亮点

由 forc doc 生成的 HTML 现在支持改进的模块导航。

新的和改进的样式和 markdown 渲染。

### 其它亮点

forc test 和 forc fmt 现在支持工作区，并将为每个成员包运行。

forc.toml 现在支持为合同依赖关系指定一个盐(Salt)。

增加了一个简单的 forc tx 插件命令，用于通过 CLI 构建序列化的事务。

### 🧩 语言服务器

对语言服务器进行了优化，使其能够同时与多个项目一起工作，使用户能够在不中断工作流程的情况下轻松地在项目之间切换。

实施了改进的警告和错误诊断，提供了关于潜在问题的更准确和详细的信息。

增加了代码动作，用于为 abi 定义自动生成一个植入块。

初步支持 neovim，为用户的开发环境提供了更多的灵活性。

## SDK

### Rust SDK

区块操作，用于测试特定场景下的智能合约。

更简单的测试基础设施设置：在一个宏中描述你的测试钱包、合约、脚本、谓词和部署。

改善智能合约的调试, 优化解析和人类可读的还原错误。

交易费用现在可以使用消息支付，即桥接资产。

谓词数据编码器。

abigen！宏重做：现在支持多个合约、谓词和脚本都在同一个宏调用中。

新的谓词 API。

更好的依赖关系导入体验。

## TS SDK

更好、更可靠的日志解析。

整体的人机工程学改进。

新的 Abi-typegen CLI;

全新文档。

## 🔌 前端

### Fuel 钱包

交易预览能够更好地预览复杂的交易，例如包含多种操作的交易，如将资产转移到多个地址，调用合同，或同时进行两种操作。

多账户支持现在可以在 Fuel 钱包内管理多个地址。

交易历史让用户在不离开钱包的情况下看到账户的所有交易。

新的软件包 `@fuel-wallet/sdk` 用于类型支持。当使用 Fuel Wallet 开发时，您可以导入我们的 TypeScript 包，以拥有我们钱包的类型，并与目前使用 Fuel TS SDK 的项目更好地整合。

使用私钥创建账户。在特殊情况下，如开发，你可能需要使用一个与当前钱包助记词无关的私钥来创建一个新的帐户。

添加自定义资产。现在 dApps 和用户可以添加元数据到钱包上的自定义资产，使得不仅有 Fuel 团队的官方代币列表，而且有第三方应用程序的可定制资产。

### 🗃 索引器

- 结合你编译的 Sway 合同 ABI 和 GraphQL 模式，建立索引器，编译到 WASM。

- 重新部署新的索引器，而无需重新部署你的合同。

- 你可以根据自己的需要对 FuelVM 块的信息进行索引，或多或少。

- forc-index 插件

  - 一个新的 Forc 插件，用于使用一组简单的命令创建、构建和部署新的索引器。

- 新版文档上线! (查看新的快速入门)

## 应用开发

- Sway 标准库:

  - 支持低级别的调用（在编译时 ABI 未知）
  - 新的字节类型，以取代 `vecu8>`，用于非类型化/原始数据。

- Sway-libs:
  - 固定点和有符号整数类型
  - 所有权库

## 开发者教育

- 我们为开发者更新并发布了新的资源:
  - [开发者快速入门手册](https://fuelbook.fuel.network/master/quickstart/developer-quickstart.html?ref=fuelwiki)（学习如何在 Fuel 上构建和部署他们的第一个全栈应用）。
  - [技术论坛](https://forum.fuel.network/?ref=fuelwiki)，查看常见问题，发布问题，并从社区成员和 Fuel 贡献者那里获得支持。

## 对于开发者

这里有更多的 beta-3 文档:

### 🚰 测试币水龙头

部署合约和与网络互动需要有效的交易，而这些交易需要币。Testnet ETH 可以通过完成一个验证码从[水龙头领取](https://faucet-beta-3.fuel.network/?ref=fuelwiki)。

### 💰 钱包

这里有一个持久的[CLI 钱包](https://github.com/FuelLabs/forc-wallet/releases/latest?ref=fuelwiki)（有 Linux 和 MacOS 的二进制文件）。

一个网络/浏览器插件钱包正在积极开发中，可在此[查看](https://github.com/FuelLabs/fuels-wallet?ref=fuelwiki)。

### ⚡️ 入门

关于 Fuel 的概述，请看[Fuel 的文档](https://www.fuelwiki.org/)。

要在 Fuel 上开始构建，请查看开发者快速入门。该[指南](https://fuelbook.fuel.network/master/quickstart/developer-quickstart.html?ref=fuelwiki)为开发者在 Fuel 上构建应用程序提供了一个端到端的操作指南。

### 🌴 智能合约语言(Sway)

要开始为 Fuel 开发合约，请看看 Sway Book，以及 Rust SDK 和 TypeScript SDK。

请注意，beta-3 测试网正在积极开发中，可能会出现突破性的升级，甚至是再生事件。

### 超越单片机

模块化的区块链设计正迅速成为应对区块链数量级扩展挑战的首要解决方案。该行业正在迅速摆脱单一的区块链设计，转向模块化设计。

我们相信创新不需要推出新的 L1，而是可以在执行层发生。Fuel Labs 正以最快的模块化执行层 Fuel 引领这一潮流。

不受 EVM 的限制，Fuel 从模块化优先的角度来处理可扩展的执行，允许对 EVM 的低效执行环境进行重大改进，从而实现最大的分散化和最高的灵活吞吐量。

通过这场新的运动，我们有机会重新开始，并从根本上建立新一代的区块链，超越单片机。

## 关注 Fuel

[Twitter](https://twitter.com/fuellabs_?ref=fuelwiki) | [Discord](http://discord.com/invite/xfpK4Pe?ref=fuelwiki) | [LinkedIn](https://www.linkedin.com/company/fuel-labs/?ref=fuelwiki) | [YouTube](https://www.youtube.com/channel/UCam2Sj3SvFSAIfDbP-4jWZQ?ref=fuelwiki)

## 关于 Fuel

Fuel 是最快的模块化执行层。该项目技术功能强大且时尚，可实现并行交易执行，为开发人员提供扩展所需的最高灵活吞吐量和最高安全性。开发人员选择 FuelVM 是因为其卓越的开发体验以及超越 EVM 限制的能力。

### 成为一名贡献者

[探索我们当前的职位空缺](https://jobs.lever.co/fuellabs?ref=fuelwiki)

[学习 Sway](https://fuellabs.github.io/sway/v0.24.5/?ref=fuelwiki)
