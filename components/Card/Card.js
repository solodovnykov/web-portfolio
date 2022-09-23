import Button from "../Button/Button";
import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
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
    </div>
  );
};

export default Card;
