import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import TextField from "../InputFields/TextField/TextField";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";

import styles from "./SignInForm.module.scss";

const SignInForm = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const router = useRouter();

  console.log(isAuth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      alert("Failed to login");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    router.push("/");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.signUpForm}>
      <h3 className={styles.formTitle}>Sign Up</h3>
      <div className={styles.fields}>
        <TextField register={register} label="Email" name="email" />
        <TextField
          register={register}
          label="Password"
          type="Password"
          name="password"
        />
      </div>
      <Button type="simple" fill icon="IconAuth.svg">
        Sign In
      </Button>
    </form>
  );
};

export default SignInForm;
