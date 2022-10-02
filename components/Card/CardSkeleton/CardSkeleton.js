import Skeleton from "../../Skeleton/Skeleton";
import styles from "./CardSkeleton.module.scss";

const CardSkeleton = (props) => {
  return (
    <div className={styles.cardSkeleton}>
      <Skeleton height="150px" borderRadius="12px 12px 0 0" />
      <div className={styles.body}>
        <Skeleton height="24px" borderRadius="20px" />
        <div className={styles.tags}>
          <Skeleton height="12px" margin="18px 0 0 0" />
          <Skeleton height="12px" margin="18px 0 0 0" />
          <Skeleton height="12px" margin="18px 0 0 0" />
        </div>

        <div className={styles.text}>
          <Skeleton height="12px" />
          <Skeleton height="12px" />
          <Skeleton height="12px" />
        </div>

        <div className={styles.footer}>
          <Skeleton width="115px" height="12px" />
          <Skeleton width="111px" height="12px" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
