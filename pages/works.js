import Card from "../components/Card/Card";
import styles from "../styles/Works.module.scss";
import { motion } from "framer-motion";
import Search from "../components/InputFields/Search/Search";

import Data from "../utils/Data.json";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const Works = () => {
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      initial="initial"
      animate="animate"
      className="container">
      <div className={styles.works}>
        <div className={styles.navigation}>
          <Search data={Data} />
        </div>
        <motion.ul variants={stagger} className={styles.cardList}>
          {[...Array(6)].map((card, index) => (
            <li key={index}>
              <Card />
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default Works;
