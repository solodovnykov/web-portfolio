import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import TextField from "../InputFields/TextField/TextField";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import styles from "./SignUpForm.module.scss";
import { fetchRegister, selectIsAuth } from "../../redux/slices/auth";

const SignUpForm = () => {
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
      username: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      alert("Failed to register");
    }
    console.log(data.payload);
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
        <TextField register={register} label="Full Name" name="fullName" />
        <TextField register={register} label="Email" name="email" />
        <TextField
          register={register}
          label="Password"
          type="Password"
          name="password"
        />
      </div>
      <Button type="simple" fill icon="IconAuth.svg">
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
