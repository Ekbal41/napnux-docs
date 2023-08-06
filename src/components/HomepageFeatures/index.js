import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    description: (
      <>
        Napnux is designed to be easy to use. It has a very simple API and of
        course a well written documentation. So you can learn Napnux in 5
        minutes.🎉
      </>
    ),
  },
  {
    title: "Fast and Lightweight",
    description: (
      <>
        Napnux is built to be fast and lightweight from the ground up. So
        websites built with Napnux have a very fast response time.
      </>
    ),
  },
  {
    title: "Apps",
    description: (
      <>
        Napnux has powerful concepts of apps that make your website more modular
        and easier to maintain. Apps are reuseable sections of your website.
        Like, a blog app, a contact form app, etc.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div
      className={clsx("col col--4")}
      style={{
        marginTop: "2rem",
      }}
    >
      <div className="text--start padding-horiz--md margin-varti-md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
