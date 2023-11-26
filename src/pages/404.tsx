import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/page404.module.css";

const Page404 = () => {
  const router = useRouter();

  const goToMainPage = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Page not found</p>
      <button onClick={goToMainPage}>Go to main page</button>
    </div>
  );
};

export default Page404;
