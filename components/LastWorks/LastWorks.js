import Image from "next/image";
import Card from "../Card/Card";
import styles from "./LastWorks.module.scss";

const LastWorks = () => {
  return (
    <div className={styles.lastWorks}>
      <div className={styles.titleBlock}>
        <h4>Last Works</h4>
        <a className={styles.lastWorksLink} href="#">
          <p>All Works</p>
          <Image
            alt="icon"
            width={12}
            height={12}
            src="/assets/IconArrowRight.svg"
          />
        </a>
      </div>
      <div className={styles.cardListWrapper}>
        <ul className={styles.cardList}>
          <Card minWidth={300} />
          <Card minWidth={300} />
          <Card minWidth={300} />
        </ul>
      </div>
    </div>
  );
};

export default LastWorks;
