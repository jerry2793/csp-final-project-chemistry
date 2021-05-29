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
          <div
            onClick={() => {
              // router.push("/eq")
            }}
            className={styles.card}
          >
            <h3>Balancing Equations - In Development &rarr;</h3>
            <p>
              Given compound and coefficient inputs, the chemical equation will
              be balanced!
            </p>
          </div>

          <div onClick={() => router.push("/parse")} className={styles.card}>
            <h3>Parsing Compounds &rarr;</h3>
            <p>
              Given the Compound input string, it will parse out all the
              elements and coefficients. You can also use imaginery compounds as
              it adheres to the Chemistry rules.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
