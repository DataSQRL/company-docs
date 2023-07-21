import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageHeader from '../components/HomepageHeader';
import LinkRotation from "../components/LinkRotation";
import FeatureGrid from "../components/FeatureGrid";


const header =  {
                   title: 'Build With Data',
                   tagLine: 'Welcome to DataSQRL',
                   text: (
                     <>
                       We are on a mission to make building with data simple and we are thrilled to have you on board.
                     </>
                   ),
                   buttonLink: '/docs/intro',
                   buttonText: 'Read the Handbook',
                   LogoSvg: require('../../static/img/generic/welcome.svg').default,
                 };



const WhyDataSQRLList = [
  {
    title: 'Mission & Vision',
    image: '/img/generic/undraw_launch.svg',
    description: (
      <>
        DataSQRL allows you to focus on your data logic because it handles all the annoying
        parts of implementing streaming applications that make you want to choke on your keyboard:
        data plumbing, schema management, error handling, data serving, API generation, and so on.
      </>
    ),
    link: '/docs/mission',
    linkText: 'Read our Mission'
  },
  {
    title: 'Culture',
    image: '/img/generic/undraw_community.svg',
    description: (
      <>
        Express your data logic, transformations, and analytics with the SQL you already know.
        DataSQRL allows you to focus on the "what" and worry less about the "how". Import your
        functions when SQL is not enough - DataSQRL makes custom code integration easy.
      </>
    ),
    link: '/docs/culture',
    linkText: "Learn about DataSQRL's Culture"
  },
  {
    title: 'Processes',
    image: '/img/generic/undraw_partner.svg',
    description: (
      <>
        DataSQRL builds efficient event-driven microservices that optimize data processing,
        partitioning, index selection, view materialization, denormalization, and query execution.
        There actually is some neat technology behind this buzzword bingo.
      </>
    ),
    link: '/docs/process',
    linkText: "See How We Work"
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={header.title}
      description={header.tagline}>
      <HomepageHeader {...header} />
      <main>
        <section className={styles.content}>
          <div className="container">
            <div className="row margin-bottom--md">
              <div className="col col--3"></div>
              <div className="col col--6">
                <p>
                  This is our internal website where you can learn more about DataSQRL the company, our <Link to="/docs/mission">mission & vision</Link>,
                  the <Link to="/docs/culture">culture at DataSQRL</Link>, and <Link to="/docs/process">how we work</Link>.
                </p>
                <p>
                  Whether you just joined DataSQRL, have worked at DataSQRL for a while, or just want to learn more about
                  DataSQRL as a company, this is the place where you find the information you are looking for. <br />
                  And if you cannot find it, please don't hesitate to <Link to="/contact">contact us</Link>.
                </p>
              </div>
              <div className="col col--3"></div>
            </div>
          </div>
        </section>
        <HomepageFeatures FeatureList={WhyDataSQRLList} />


      </main>
    </Layout>
  );
}
