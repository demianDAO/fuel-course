---
sidebar_position: 1
---

# 为什么是 Fuel

## 具有欺诈证明的用户主权

Fuel 专门设计和构建为可证明欺诈，从而支持信任最小化的轻客户端。信任最小化的轻客户端和共享数据可用性使信任最小化的桥梁能够连接到其他模块化执行层，这在 L1 之间是不可能实现的。

- 这在实践中意味着什么：
  - 允许长期流动性接入
  - 用户无需运行完整节点即可验证链
  - 安全桥接资产

Fuel 对欺诈证明的优化是使用 UTXO 模型，这反过来意味着 Fuel 没有全局状态树或帐户树。如果你想将欺诈证明的一般结构应用到使用像以太坊这样的账户模型的链上，成本可能是不受约束的，这使得制作欺诈证明的成本非常高。在这种欺诈证明的一般结构中，给定前状态和状态转换，您在本地执行转换并将输出与块生产者生成的后状态进行比较。如果这些不同，则块生产者的后状态无效。如果您应用此一般欺诈今天以太坊的证明模型，有人可以创建一个调用许多不同合约的交易，而这些合约每个可能有多达 24kb 的字节码。为了在本地重新执行，您需要为与之交互的所有合约提供所有字节码。

在此处阅读更多关于信任最小化的轻客户端和主权实体的信息。

## 卓越的 DevEx

Fuel 的技术共同提供卓越的开发人员体验。我们是这样做的：

## sway 和 Fuel 工具链

FuelVM 旨在与工具垂直集成。

与从一开始就没有使用语言设计的 EVM 不同，FuelVM 是与其配套语言 Sway 一起构建的，确保它具有方便且高效的操作，例如获取 tx 的特定部分。Sway 是一种基于 Rust 的 DSL，专门用于利用区块链 VM 而无需冗长的样板文件。Sway 利用 Rust 的安全性并在编译时捕获错误和错误，让开发人员高枕无忧。在此处阅读有关 Sway 的更多信息。

Fuel Labs 还开发了 Fuel 工具链：用于启用/协助 Fuel 应用程序开发体验的全套工具。在此处阅读有关 Fuel 工具链的更多信息。

## 并行执行

![fuelwiki](http://fuelbook.fuel.network/master/images/fuel-parallel.png)

Fuel 在不牺牲去中心化的情况下为以太坊带来规模化。FuelVM 旨在减少传统区块链虚拟机架构的浪费处理，同时极大地增加开发人员的潜在设计空间。FuelVM 可以使用 CPU 的所有线程和内核来验证事务。

## Fuel 架构

![fuelwiki](http://fuelbook.fuel.network/master/images/configs.png)

作为模块化执行层，Fuel 可以在这些类别中的任何一个中发挥作用。开发人员可以根据需要通过切换客户端中的几个模块来配置 Fuel。

## 改进的虚拟机

以太坊社区提出了许多实施改进以提高 EVM 性能。不幸的是，许多这些改进建议尚未实施，因为它们会破坏向后兼容性。

建立在以太坊上的执行层给了我们一个新的机会来构建更好的东西。设计不需要向后兼容，事实上，可以做任何必要的事情来为以太坊提供全局吞吐量和采用。FuelVM 是大大改进的 EVM。在此处查看在 FuelVM 中实施的 EIP（以太坊改进提案）的非详尽列表。

FuelVM 和 EVM 有很多重叠。以下是它们的不同之处，请在 FuelVM 与 EVM 上查看更完整的列表
FuelVM 具有全局共享内存架构，而不是上下文本地内存

FuelVM 具有全局共享内存架构。不是每个合约调用都有自己独立的内存空间、调用数据和返回数据，而是所有合约调用帧共享全局内存。这块内存在所有调用帧之间共享，并且是全局可读的。这允许您在合约之间传递数据而无需昂贵的存储空间，并且无需序列化、从调用数据复制到内存等即可传递数据块。在此处阅读有关 FuelVM 内存模型的更多信息。

## FuelVM 专为防欺诈而设计

EVM 是一个复杂的机器，可以为其构建欺诈证明。它通常需要第二层，如 WASM 或 MIPS，才能被解释为欺诈可证明的系统。查看带有欺诈证明的用户主权以及欺诈证明如何解锁关键功能。

## FuelVM 有多个原生资产

在以太坊中，唯一的原生资产是以太币。它是唯一在成本和通过呼叫被推拉的能力方面获得一流待遇的产品。在 Fuel 中，任何合约都可以使用一组简单的资产操作码来铸造其基于 UTXO 的原生资产。所有这些都可以获得原生级别调用和优化的好处。在 Sway 文档和此处阅读有关对多个本机资产的支持的更多信息。

在此处阅读 [FuelVM](https://fuellabs.github.io/fuel-specs/master/vm)的完整规范。
