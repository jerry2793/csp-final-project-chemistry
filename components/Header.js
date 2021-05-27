import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  //   console.log(router.asPath);

  return (
    <div>
      <h1 className={styles.title}>
        Welcome to the <Link href="/">Chemistry Cheater App</Link>!
      </h1>
      <p className={styles.description}>
        {router.asPath === "/"
          ? "Explore the Features from below"
          : "To go back, click on the blue link above ^"}
      </p>
    </div>
  );
};

export default Header;
