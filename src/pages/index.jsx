import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Splotchy from '../components/Splotchy';
import Social from '../components/Social';

import styles from './index.module.css';
import Link from '@docusaurus/Link';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="(A really cool guy)">
      <HomepageHeader />
      <main>
        <section className={styles['link-section']}>
          <div className={styles['link-block']}>
            <h2>Neat Stuff</h2>
            <Link to="https://aaronasachimp.github.io/image-lint/">image-lint</Link>
            <Link to="https://aaronasachimp.github.io/block-game-tools/">Block Game Tools</Link>
          </div>
          <div className={styles['link-block']}>
            <h2>Guides</h2>
            <Link to="/docs/optimizing-images/">Optimizing Images</Link>
          </div>
          <Social twitter="AaronAsAChimp" github="AaronAsAChimp" stackoverflow="1141784/aaronasachimp"></Social>
        </section>
        <Splotchy className={styles.bgBlock} />
      </main>
    </Layout>
  );
}
