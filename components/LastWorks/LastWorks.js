import Card from "../Card/Card";
import styles from "./LastWorks.module.scss";

const LastWorks = () => {
  return (
    <div className="container">
      <div className={styles.lastWorks}>
        <ul className={styles.cardList}>
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    </div>
  );
};

export default LastWorks;
