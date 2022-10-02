import styles from "./Skeleton.module.scss";

const Skeleton = ({
  width = "100%",
  height = "24px",
  borderRadius = "8px",
  margin = "0",
}) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        margin: margin,
      }}
      className={styles.skeleton}></div>
  );
};

export default Skeleton;
