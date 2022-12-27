import SignInForm from "../components/SignInForm/SignInForm";
import styles from "../styles/Login.module.scss";

const Login = () => {
  return (
    <div className="container-min">
      <div className={styles.login}>
        <SignInForm />
      </div>
    </div>
  );
};

export default Login;
