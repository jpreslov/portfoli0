'use client'

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
// import { useEffect, useState } from 'react'

export default function Home() {
  const xp = [
    'JavaScript',
    'TypeScript',
    'React/Redux',
    'Next.js',
    'Material UI',
    'SQL',
    'Postgres',
    'Express.js',
    'Node.js'
  ]

  return (
    <>
      <Head>
        <title>Jake Lovett</title>
        <meta name="description" content="Jake Lovett - Web Dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.shapes}>
        <div className={styles.rectangle}></div>
        <div className={styles.ellipse}></div>
      </div>
      <main className={styles.main}>
        <div className={styles.name}>
          <h1>Jake Lovett</h1>
          <p>Web Dev</p>
        </div>

        <div className={styles.summary}>
          <p className={styles.summaryIntro}>
            My name is Jake.  I am from Birmingham, AL, and I graduated from the Innovate Birmingham coding bootcamp in Dec. 2019. I worked as a T.A. at Innovate for 2 years before moving on to JWEB Development.
          </p>
            <br />
          <p>
            Experienced in:
          </p>
          <ul className={styles.scrolling}>
            {xp.map((item, id) => {
              return (
                <li key={id}>{item}</li>
              )
              }
            )}
          </ul>
        </div>
        <div className={styles.links}>
          <a
            href="https://github.com/jpreslov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github-mark.svg"
              alt="Github logo"
              className={styles.logoSVGs}
              width={35}
              height={35}
              priority
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jake-lovett/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin-logo.svg"
              alt="LinkedIn logo"
              className={styles.logoSVGs}
              width={50}
              height={50}
              priority
            />
          </a>
          <a
            href="jacob-lovett-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/paper.svg"
              alt="View resume"
              className={styles.logoSVGs}
              width={40}
              height={40}
              priority
            />
          </a>
        </div>
      </main>
    </>
  )
}
