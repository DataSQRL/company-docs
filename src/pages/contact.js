import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import HomepageHeader from '../components/HomepageHeader';

const header =  {
                   title: 'Contact DataSQRL',
                   tagLine: "Let's Connect",
                   text: (
                     <>
                    Use the form below to ask us any question about DataSQRL
                       or reach out to connect.
                     </>
                   ),
                   LogoSvg: require('../../static/img/generic/undraw_contact.svg').default,
                 }


const FORMSPARK_ACTION_URL = "https://submit-form.com/8mwiROPE";

function ContactForm() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const onSubmit = async (e) => {
    setFeedback("Your message is being sent...one moment")
    e.preventDefault();
    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        "name" : name,
        "email" : email,
        "message" : message,
      }),
    });
    setFeedback("Thank you for contacting us. We will be in touch shortly.");
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
      <form onSubmit={onSubmit} className={styles.verticalForm}>
        <label for="name">Your Name:</label>
        <input type="text" id="name" name="name" required="" value={name} onChange={(e) => setName(e.target.value)} />
        <label for="email">Your Email:</label>
        <input type="email" id="email" name="email" required="" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label for="message">What's your Question?</label>
        <textarea id="message" name="message" required="" value={message} onChange={(e) => setMessage(e.target.value)} />
        { feedback ? <ContactMessage message={feedback} /> : null }
        <button type="submit">Contact Us</button>
      </form>
  );
}

function ContactMessage({message}) {
    return (
        <div class="alert alert--primary" role="alert">
          {message}
        </div>
    );
}

export default function Contact() {
  return (
    <Layout
      title={header.title}
      description={header.tagLine}>
      <HomepageHeader {...header} />
      <main>
        <section className={styles.closer}>
          <div className="container">
            <div className="row margin-bottom--md">
              <div className="col col--3">
              </div>
              <div className="col col--6">
                <h2 className="margin-bottom--md">Contact Form</h2>
                <p>
                Don't hesitate to use the form below to ask us any questions about DataSQRL.<br />
                  We are excited to hear from you.
                </p>
                <p>
                Enter your name, email, and message in the form below and we will get back to you shortly.
                </p>
                <ContactForm />
              </div>
              <div className="col col--3">
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
