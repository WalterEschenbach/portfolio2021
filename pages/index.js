import Head from 'next/head'
import Project_Container from '../components/Project_Container'
import Flair from '../components/Flair'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Flair />
      <Head>
        <title>Walter Eschenbach</title>
        <link rel="icon" href="/business_suit_icon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Walter Eschenbach
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <Project_Container />
      </main>

      <footer className={styles.footer}>
        Thank you for your time and consideration.
      </footer>
    </div>
  )
}
