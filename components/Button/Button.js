import styles from "./Button.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

const Button = ({ children = "button", size, icon, type }) => {
  const button = {
    height: size === "small" ? "32px" : "40px",
    padding: size === "small" ? "0 24px" : "0 36px",
    borderWidth: type === "simple" ? "0" : "2px",
    gap: size === "small" ? "4px" : "6px",
    boxShadow:
      type === "simple"
        ? "none"
        : "0px 0px 20px rgba(152, 157, 154, 0.2), inset -2px -2px 4px rgba(227, 227, 227, 0.34), inset 2px 2px 4px rgba(35, 35, 35, 0.34)",
  };

  const innerText = {
    fontSize: size === "small" ? "14px" : "16px",
  };

  const iconStyle = {
    display: icon ? "" : "none",
  };

  // console.log(btnStyle);

  return (
    <button style={button} className={styles.button}>
      <p style={innerText} className={styles.buttonText}>
        {children}
      </p>
      <span style={iconStyle}>
        <Image
          src={`/assets/${icon}`}
          alt="icon"
          width={size === "small" ? "20" : "24"}
          height={size === "small" ? "20" : "24"}
        />
      </span>
    </button>
  );
};

export default Button;
