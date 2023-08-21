import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import { useState } from "react";
import copy from "copy-to-clipboard";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={"A fast and low-overhead web framework for Node.js"}
      description="A fast and low-overhead web framework for Node.js"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = "npm install napnux";
    copy(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500); // Reset "Copied!" after 1.5 seconds
  };
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.title}>{siteConfig.title}<span className={styles.version}>v1.5</span></h1>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>
        <div className={styles.copy} onClick={handleCopyClick}>
          <span className={styles.copyText}>$ npm install napnux</span>{" "}
          <span className={styles.clipboard}>📋</span>
        </div>
        <div className={styles.btnBlack}>
          <Link className="" to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
