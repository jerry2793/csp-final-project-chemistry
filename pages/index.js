import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Chemistry Cheater - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div onClick={() => router.push("/eq")} className={styles.card}>
            <h3>Balancing Equations &rarr;</h3>
            <p>
              Given compound and coefficient inputs, the chemical equation will
              be balanced!
            </p>
          </div>

          {/* <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>
    </div>
  );
}
