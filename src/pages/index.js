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
        Our vision is to make building with data streams as easy as creating a
        spreadsheet. Data streams are the lifeblood of the modern economy. Our mission
        is to enable people to build with data so they can participate in the data
        economy.
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
        Our culture is build around the principles of belonging, resourcefulness, and
        responsibility. To us, culture is not just fancy words. Each of us actively
        participates in creating a culture we want to be a part of.
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
        DataSQRL is a distributed company and we built processes to make that work
        well. It's how we work together, get stuff done, and have a good time doing it.
        Every team member has the autonomy they want and the structure they need
        to work effectively.

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
                  <br />
                  Whether you just joined DataSQRL, have worked at DataSQRL for a while, or just want to learn more about
                  DataSQRL as a company, you've come to the right place.
                </p>
                <p>
                  Why read a bunch of words about boring company internals? We started DataSQRL to build a company that empowers you,
                  helps you grow, and is worth your while. A place where we build things together that none of us could have dreamt of
                  accomplishing alone. An environment where you feel safe to challenge yourself.<br />
                  But at the same time, we not only respect that working hard is just one part of your life, we actively
                  support each other to disconnect and live our full lives.
                </p>
                <p>
                  As a result, we are doing a lot of things differently and are pretty obsessed with how we work together.
                  Not just to put some fancy words on a page or score PR brownie-points. We do it because how we spend
                  our days is how we spend our lives. And that's quite important.
                </p>
                <p>
                  So, hopefully this page gives you a good sense for how we work. I promise you: no corporate bla bla.
                  And if you have any questions or cannot find what you are looking for, please <Link to="/contact">ask us</Link>.
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
