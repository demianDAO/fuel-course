---
sidebar_position: 3
---

# Fuel 工具链

由 Fuel 实验室设计和建造的全栈工具，帮助开发者实现或协助 Fuel 应用的便捷工具。

- 工具概述：

  - Fuel-core： Fuel VM 节点的客户端。
  - forc: Fuel Orchestrator。包括 Sway 编译器、打包和插件支持。
  - Fuel 索引器： 一个独立的二进制文件，可用于索引区块链的各种组件。请看这里的文档。

- Fuel Labs 的 Forc 插件：
  - forc-fmt: Sway 代码格式化器。
  - forc-lsp: Sway 语言服务器协议的实现。
  - forc-explore： 运行 Fuel 区块探索器。
  - forc-client： 用于通过 CLI 部署和运行 Sway 应用程序。
  - forc-wallet： 用于初始化一个钱包，添加账户和签署交易。
  - fuelup： Fuel 工具链管理器--一种检索上述所有内容的简单方法。

关于工具链的更多具体文档，请查看这里的 Sway 文档。

## 在 Fuel 上构建

开发人员可以通过一个工具链获得他们所需要的一切，开始为 Fuel VM 创建 Sway 应用程序，该工具链由创建 FuelVM 和 Sway 语言的相同团队提供祝福。

开发人员在以太坊生态系统内工作时面临的一个共同问题是如何选择一套工具来开始工作。从历史上看，以太坊的创始人一直特别关注协议的低级细节，EVM 和较少的 Solidity，把创建可访问的高级工具的工作留给了社区。因此，不同的第三方出现了许多不同的项目，都是提供这些高层次的解决方案，如 truffle, dapptools, hardhat, foundry 等。对于新入门以太坊开发者来说，要想掌握这个空间并知道他们在选择这些工具链时做出正确的选择是很困难的。

相比之下，Fuel Labs 采取了一种精心策划的、"包含电池"的、但又是模块化的方法来提供工具。我们的目标是提供一个全面的、标准化的、典型的工具集，不仅涵盖堆栈的较低层次（如协议和虚拟机实现），而且涵盖较高层次（如包管理、编辑器支持、通用插件等）。我们的目标是以一种开放、透明和欢迎外部贡献的方式来做这件事。

澄清一下，我们的目标根本不是要阻止第三方扩展 Fuel 生态系统。相反，我们的目标是使官方的工具链变得非常好，以激励上游的贡献，并在一个统一的开发者生态系统下进行合作。对于那些我们的工具不足，需要添加或扩展的情况，我们通过 forc 提供了一个可扩展的插件系统，使社区的创造力以一种易于分享和熟悉的方式被 Fuel 的同伴们所接受。

Sway VSCode 插件是一个很好的例子，说明了我们对统一的开发者体验的看法。该插件与 Sway 语言服务器互动，这是一个 forc 插件，直接与 Sway 编译器通信，并共享其大部分代码库。该插件还允许启动 Fuel 节点，实时显示其状态，并（在不久的将来）通过 TypeScript SDK 与你的智能合约进行互动。一个完整的解决方案完全在插件内，来自一个有共同愿景的团队。

你可以按照 Fuelup 快速入门指南开始尝试使用 Fuel 工具链。
