import useWindowSize from "../../hooks/useWindowSize";
import Button from "../Button/Button";
import styles from "./HeroBlock.module.scss";
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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const HeroBlock = () => {
  const windowSize = useWindowSize();
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="container-global">
      <div className="container">
        <motion.div variants={stagger} className={styles.heroBlock}>
          <motion.h1 variants={fadeInUp} className={styles.title}>
            Веб-дотаки гарно <br /> та швидко
          </motion.h1>
          <motion.h2 variants={fadeInUp} className={styles.subtitle}>
            Розробка e-commerce додатків та <br /> проєктування інтерфейсів.
          </motion.h2>
          <motion.div variants={fadeInUp} className={styles.btnWrapper}>
            <Button
              size={windowSize.width <= 480 ? "small" : ""}
              icon="iconWorks.svg">
              Приклади робіт
            </Button>
            <p className={styles.skills}>Навички</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroBlock;
