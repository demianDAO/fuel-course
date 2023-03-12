---
title: 回顾Fuel的2022以及23年最新消息
author: fuel
author_title: Fuel Offical
author_url: https://fuel-labs.ghost.io/content/images/size/w100/2021/09/logo.svg
author_image_url: https://fuel-labs.ghost.io/content/images/size/w100/2021/09/logo.svg
tags: [fuel, fuelwiki, celestia, 模块化区块链, modular, fuelnetwork, yul]
---

来自最快的模块化执行层的最新消息。

![fuelwiki](https://fuel-labs.ghost.io/content/images/size/w2000/2023/02/Inside-Fuel-Winter-1.png)

欢迎来到 Inside Fuel，我们对技术发展的回顾以及 Fuel 网络上发生的一切。花点时间了解所有最新消息。

## 🆕 Fuel 的团队最新情况

没有令人难以置信的贡献者团队，构建最快的模块化执行层是不可能的。以下是本月团队的最新成员：

![fuelteam](https://fuel-labs.ghost.io/content/images/size/w1600/2023/02/Winter-2023-1.png)

## 📰 在 Rust 中的新闻

![rustfuel](https://fuel-labs.ghost.io/content/images/size/w1600/2022/06/image.png)

根据 Rust In Blockchain 的月度回顾，Fuel 是今年冬天最活跃的基于 Rust 的项目之一，Fuel：在 2022 年 12 月和 2023 年 1 月之间有 548 个合并的 PR，406 个封闭的问题，以及 256 个开放的问题，使我们在最活跃的基于 Rust 的区块链中排名前五。

## 🎙️ 播客和 AMAs

约翰-阿德勒参加了 Bankless Podcast，解释了为什么以及模块化区块链将为自主的未来设定道路。

<iframe width="720" height="407" src="https://www.youtube.com/embed/ZFbmmWV4kjQ" title="Alpha Leak | The Bull Case for Modular Blockchains" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

他还参加了[OxResearch 的播客](https://open.spotify.com/show/0rGocvZ7oZR6vuy0UHKAON?si=a980953b546743b9&ref=fuel)，解释了 Fuel 如何区别于其他扩容方案。

<iframe width="720" height="407" src="https://www.youtube.com/embed/nSMK4jgobNE" title="Fuel, The Fastest Modular Execution Layer | John Adler" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 🌴 Sway 语言日

我们主持了第三期 Sway Day，这是一个关于 Sway 所有事情的月度讨论。这一次，我们回顾了 2022 年的所有发展成就，并与约翰-阿德勒一起设定了 2023 年的期望。

- 在 2022 年底，你可以记住。
- 自 Sway 开始以来，已有 3168 个问题被修复。
- Sway 资源库已经从 0 增长到 350 多颗星。
- 使用 Sway 可以直接在编译器层面进行重入分析。

[Reentrancy detection is a critical function in smart contract systems.](https://twitter.com/SwayLang/status/1621210727275970560?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1621210727275970560%7Ctwgr%5Eed31a57a1b27feed0f79d120bab4aab0c3075d89%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Ffuel-labs.ghost.io%2Finside-fuel-winter-2022%2F)

Fuel Labs 软件库在区块链领域的 Rust 中，整整一年都在关闭的 PR 中排名前五，并且在打开/关闭的问题中一直排名前一。

我们流程的文档不断带来越来越多的第三方贡献者和建设者（目前有 25 个以上的项目在 Fuel 上构建）。

在过去的一年里，Fuel 和 Sway 的受欢迎程度明显上升，其标志是开源贡献和参与我们的赠款计划以使用 Sway 在 Fuel 上构建项目的大幅增加。

- 在 2023 年，你可以期待:
  - 在字节码大小方面的编译器优化。
  - 更多的后端语言将被 Sway 支持（例如 EVM 后端已经在开发中）。
  - 通用和特性约束将被改进，抽象将更加经济和强大。
  - 更多的应用程序将从 Solidity/Vyper 移植到 Sway。
  - 在编译器层面改进重入分析。
  - 增强的工具和语言特性。

## 💻 技术更新

### 什么是 Fuelup？

Fuelup 是 Fuel 的官方软件包管理器和复用器，从官方发布渠道安装 Fuel 工具链。它使你能够轻松地安装预先打包的工具链，保持它们的更新，甚至创建自定义的工具链并在它们之间切换。

二进制文件通过 Fuelup 作为代理执行，允许工具的灵活执行。

它简化了普通平台的 forc 和 fuel-core 的 Sway 应用程序的构建和维护。

Fuelup 中加入了对覆盖工具链的支持。

开发者可以在 Sway 项目根部的 TOML 文件（fuel-toolchain.toml）中指定一个组件的特定版本，当在该目录下工作时，fuelup 将自动使用指定的版本。

fuelup 处理二进制文件的方式也被更新了 - fuelup 现在使用`~/.fuelup/store`中的通用存储来缓存你的二进制下载。这意味着在不同的工具链中不会再有相同版本的重复组件，而且用已经下载的组件创建一个新的工具链几乎不需要时间。

## Sway 应用程序

[已经部署在 Sway 上的 dapp](https://github.com/FuelLabs/sway-applications?ref=fuelwiki)

新的碎片化 NFT 应用: 碎片化 NFT 应用将把 NFT 锁定在 fractional-NFT(f-NFT)合约中，并允许用户购买新铸造的 fractionalized 代币。然后，这些代币可以在 AMM 上买卖，或者在启动回购的情况下将其退回到分销合约。如果所有的代币都被退回，管理员可以从 f-NFT 合约中解锁 NFT，重新获得全部所有权。

新的 Timelock 应用: 时间锁的目的是将交易的执行限制在某个时间窗口。该交易通常涉及资金转移，例如通过托管、归属时间表、延期付款等。然而，它也可用于无价值的执行，即调用合同来执行计算。交易参数被散列并存储在一个队列中，等待后续调用执行。用户可以选择在时间窗口内执行交易，或者通过将其从队列中删除来取消交易。

## Sway 语言一般性更新

- 引入 Sway 参考，这是一个更具技术性的 Sway 文档来源。
- 引入了 \_\_smo intrinsic。
- 启动了 EVM 后端工作。
- 引入配置时间常数。
- 改进了对方法调用、不匹配的 ABI 方法、不正确使用的类型等的错误信息。
- 在 CEI 分析中增加了平衡树和输出消息的效果。
- 增加了对不完整路径表达式/模式的更好的解析器恢复。

## 错误修复

- 对特质约束的解析，允许找到正确的特质方法。
- 对死代码分析，以防止错误报告死代码。
- 防止无限类型统一带来的堆栈溢出。
- 在类型断言方面，防止不健全的类型推理和内部编译器错误。
- 在匹配表达式中计算嵌套枚举匹配的缺失模式。
- 阻止重复的 ABI/特质声明。
- 禁用 ABI 方法的自我参数。

## 标准库更新

- 引入 Byte 类型。
- 支持 u8, u16, u32 的位操作。
- 优化 U128 和 U256 的除法操作。
- 删除 std::context::gas，改用 std::registers::context_gas()。
- 引入低级别的调用功能。
- 改为使用 Bytes 类型的 send_message 数据参数。
- 增强结果库。
- 引入 Never 枚举。

## 工具更新

- 对逗号分隔的注释进行授权。
- 在 forc doc 中增加了 CSS 样式、favicon 和--document-private-items 选项。
- 引入`#[test(should_revert)]`属性，以表示单元测试应该回退。
- 允许 LSP 以部分配置启动。
- 增加 LSP 选项来隐藏编译器的警告和错误。
- 为 ABI 方法增加`#[支付能力]`注解。
- 使 LSP 能够同时与多个项目一起工作。
- 增加了对从单元测试中调用合同 ABI 的支持。
- 增加了 forc 文档中项目与模块之间生成链接的接口。

## Forc 更新

- 引入构建标志以打印死码分析图。
- 在 forc 测试中引入了工作区测试功能。
- 为 forc clean 增加了工作区支持。
- 修正了一个错误，防止在同时运行 forc 的多个实例时出现 git 签出竞赛。
- 修正了纠正 arm64 二进制文件的可执行输出的问题。

## 燃料核心

- P2P 区块同步（增加了运行同步全节点的能力）。
  - 包括增加了两个新的服务，同步和区块导入器。
  - 在标准的 fuel-core 二进制文件中启用了 libp2p。
- 端口和适配器的重新架构。
  - 将 fuel-core 的内部结构分解为易于单元测试和可重用的库。
  - 为其他的实现方式铺平道路，如轻型客户端。
- 改进数据库性能（减少克隆）。
- 引入天然气时间表框架和修订天然气价格。
  - 新的框架使我们能够根据基准输出自动重新定价 gas 计划。
  - 随着我们实施合同状态合并和进一步优化数据库，将会有更多的天然气价格变化。
- 燃气计量的预测。
  测使用标准气体时间表定价，其执行预算将从交易气体限额中扣除。以前，它们只根据它们增加到交易中的字节数来定价。
- 用 1.67 版本的 Rust std lib impl 替换 VM 中的整数对数（现在需要 Rust 1.67 版本来使用 fuel-core & FueVM）。
- 实现了区块头的二进制 MMR。
- 汽油价格现在可以作为 chainconfig / genesis 块的一部分进行配置。
- FuelVM 现在是一个包含虚拟机所有基于 Fuel 的依赖关系的单一程序。
- 更新 GTF 参数常量以符合规范。

## SDKs (Fuel-TS & Fuel-RS)

### Rust SDK

- 更简单的测试基础设施设置：在一个单一的宏中描述你的测试钱包、合同、脚本、谓词和部署。
- 解析和人类可读的还原错误，使智能合约的调试更加友好。
- 交易费用现在可以使用信息支付，即桥接资产。
- 引入了 Predicate 数据编码器。
- 重做 theabigen!宏, 现在支持多个合约、谓词和脚本都在同一个宏调用中。
- 谓词 API 的引入。
- 更好的依赖关系导入体验;

### Typescript SDK

- 更好、更可靠的日志解析。
- 全面改善人机工程学。
- 引入 abi-typegen CLI。
- 实时文档返工。

## 关注我们

[Twitter](https://twitter.com/fuellabs_?ref=fuelwiki) | [Discord](http://discord.com/invite/xfpK4Pe?ref=fuelwiki) | [LinkedIn](https://www.linkedin.com/company/fuel-labs/?ref=fuelwiki) | [YouTube](https://www.youtube.com/channel/UCam2Sj3SvFSAIfDbP-4jWZQ?ref=fuelwiki)

## 关于我们

Fuel 是模块化区块链堆栈的最快执行层。该技术功能强大且时尚，可实现并行交易执行，为开发人员提供扩展所需的最高灵活吞吐量和最高安全性。开发人员选择 FuelVM 是因为其卓越的开发体验以及超越 EVM 限制的能力。
