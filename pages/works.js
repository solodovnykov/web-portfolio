import Card from "../components/Card/Card";
import styles from "../styles/Works.module.scss";

const Works = () => {
  return (
    <div className="container">
      <div className={styles.works}>
        <ul className={styles.cardList}>
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
        </ul>
      </div>
    </div>
  );
};

export default Works;
