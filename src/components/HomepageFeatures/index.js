import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fuel专注执行层',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        区块链正在摆脱整体设计，在这种设计中，共识、数据可用性和执行紧密耦合。未来是模块化的，执行与数据可用性和共识是分开的。在
        Fuel，它正在为模块化区块链堆栈构建最快的执行层。
      </>
    )
  },
  {
    title: '并行执行和fuelvm',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Fuel 通过使用 <code>UTXO</code>{' '}
        模型形式的严格状态访问列表并行执行事务的能力，提供无与伦比的处理能力。FuelVM优化了传统的EVM，并且
        的一种兼容和简化的表现，可以有效地让开发者加入到 Fuel 的生态系统中。
      </>
    )
  },
  {
    title: 'Sway语言',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Fuel 的特定领域语言，Sway，提供独特而流畅的开发体验。Fuel
        还有一个支持工具链，称为 Forc。同时开发环境保留了 Solidity
        等智能合约语言的优势，也采用了 Rust 工具生态系统中引入的范例。
      </>
    )
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
