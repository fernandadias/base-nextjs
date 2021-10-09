import Head from 'next/head'
import styles from '../styles/Home.module.css'

type Props = {
  title: string
}

export default function Home({ title = 'Base for Next projects' }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={title}>{title}</h1>
      </main>
    </div>
  )
}
