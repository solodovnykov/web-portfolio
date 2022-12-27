import SignUpForm from "../components/SignUpForm/SignUpForm";
import styles from "../styles/Registration.module.scss";

const Registration = () => {
  return (
    <div className="container-min">
      <div className={styles.registration}>
        <SignUpForm />
      </div>
    </div>
  );
};

export default Registration;
