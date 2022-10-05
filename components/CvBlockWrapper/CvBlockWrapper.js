import styles from "./CvBlockWrapper.module.scss";

const CvBlockWrapper = ({ children, title, gap = 24 }) => {
  return (
    <div style={{ gap: gap }} className={styles.cvBlock}>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  );
};

export default CvBlockWrapper;
