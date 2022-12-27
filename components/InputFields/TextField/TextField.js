import Image from "next/image";
import { useState } from "react";
import styles from "./TextField.module.scss";

const TextField = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { label = "Input", type, register, name = "default" } = props;

  return (
    <div className={styles.textFieldWrapper}>
      <input
        className={styles.textField}
        type={type === "Password" && !showPassword ? "password" : "text"}
        autoComplete="on"
        placeholder=" "
        value={inputValue}
        {...register(name)}
        onChange={(event) => setInputValue(event.target.value)}
      />
      {type === "Password" ? (
        <span
          onClick={() => setShowPassword(!showPassword)}
          className={styles.visibilityToggle}>
          {showPassword ? (
            <Image
              width={24}
              height={24}
              alt="search icon"
              src={"/assets/icons/IconEyeClose.svg"}
            />
          ) : (
            <Image
              width={24}
              height={24}
              alt="search icon"
              src={"/assets/icons/IconEyeOpen.svg"}
            />
          )}
        </span>
      ) : (
        ""
      )}

      <label className={styles.label}>{label}</label>
    </div>
  );
};

export default TextField;
