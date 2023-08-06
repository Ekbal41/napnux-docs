import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import { useState } from "react";
import copy from "copy-to-clipboard";

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <header className={clsx("hero hero--primary", styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro"
//           >
//             Learn Napnux in 5 minutes ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="A fast and low-overhead web framework for Node.js"
    >
      {/* <HomepageHeader /> */}
      <Hero />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

function Hero() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = "npm install napnux";
    copy(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500); // Reset "Copied!" after 1.5 seconds
  };

  return (
    <div className={styles.heroBanner}>
      <div>
        <p className={styles.title}>
          Napnux<span className={styles.version}>1.0.3</span>
        </p>
        <p className={styles.subtitle}>
          Fast and low-overhead web framework for Node.js.
        </p>
        <div className={styles.copy} onClick={handleCopyClick}>
          <span className={styles.copyText}>$ npm install napnux</span>{" "}
          <span className={styles.clipboard}>📋</span>
        </div>
        <div className={styles.btnPrimary}>
          <Link className="" to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
