import Card from "../components/Card/Card";
import styles from "../styles/Works.module.scss";
import { motion } from "framer-motion";

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
        <motion.ul variants={stagger} className={styles.cardList}>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>

          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default Works;
