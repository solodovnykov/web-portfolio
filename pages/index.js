import Head from "next/head";
import HeroBlock from "../components/HeroBlock/HeroBlock";
import LastWorks from "../components/LastWorks/LastWorks";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easing,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      variants={fadeInUp}
      initial="initial"
      animate="animate">
      <div className="container-global">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeroBlock />

        <div className="container">
          <LastWorks />
        </div>

        <div className={styles.bgAnim}>
          <div className={styles.saturnWrapper}>
            <div className={styles.circle}></div>
            <div className={styles.dot}>
              <p>React.js & Next.js</p>
            </div>
          </div>

          <div className={styles.saturnWrapper}>
            <div className={styles.circle}></div>
            <div className={styles.dot}>
              <p>UX/UI</p>
            </div>
          </div>

          <div className={styles.saturnWrapper}>
            <div className={styles.circle}></div>
            <div className={styles.dot}>
              <p>Express.js</p>
            </div>
          </div>
          <div className={styles.saturn}></div>
        </div>
      </div>
    </motion.div>
  );
}
