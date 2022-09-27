import Button from "../Button/Button";
import styles from "./Card.module.scss";
import { motion } from "framer-motion";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Card = ({ minWidth = 0 }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      style={{ minWidth: `${minWidth}px` }}
      className={styles.card}>
      <div className={styles.head} />
      <div className={styles.body}>
        <h3 className={styles.title}>Some title</h3>
        <ul className={styles.tags}>
          <li className={styles.tag}>
            <span style={{ color: `hsl(65, 25%, 45%)` }}>#</span>UX/UI
          </li>
          <li className={styles.tag}>
            <span style={{ color: `hsl(65, 25%, 45%)` }}>#</span>UX/UI
          </li>
          <li className={styles.tag}>
            <span style={{ color: `hsl(65, 25%, 45%)` }}>#</span>UX/UI
          </li>
        </ul>
        <p className={styles.description}>
          Simple website created with React.js and Redux. Back-end created with
          Express.js and Mongodb
        </p>
        <div className={styles.footer}>
          <div className={styles.date}>Серп 22 (1 day ago)</div>
          <Button size="small" type="simple">
            Перейти
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
