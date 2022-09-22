import styles from "./Button.module.scss";
import Image from "next/image";

const Button = () => {
  return (
    <button className={styles.button}>
      <p className={styles.buttonText}>Приклади робіт</p>
      <Image src="/assets/iconWorks.svg" alt="icon" width="24" height="24" />
    </button>
  );
};

export default Button;
