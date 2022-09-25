import useWindowSize from "../../hooks/useWindowSize";
import Button from "../Button/Button";
import styles from "./HeroBlock.module.scss";

const HeroBlock = () => {
  const windowSize = useWindowSize();
  return (
    <div className="container-global">
      <div className="container">
        <div className={styles.heroBlock}>
          <h1 className={styles.title}>
            Веб-дотаки гарно <br /> та швидко
          </h1>
          <h2 className={styles.subtitle}>
            Розробка e-commerce додатків та <br /> проєктування інтерфейсів.
          </h2>
          <div className={styles.btnWrapper}>
            <Button
              size={windowSize.width <= 480 ? "small" : ""}
              icon="iconWorks.svg">
              Приклади робіт
            </Button>
            <p className={styles.skills}>Навички</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
