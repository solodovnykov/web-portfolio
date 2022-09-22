import styles from "./LangSwitch.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect, createRef } from "react";

const LangSwitch = () => {
  const [dropdown, setDropdown] = useState(false);
  const { locale, locales } = useRouter();
  const ref = useRef();

  useEffect(() => {
    const closeDropdown = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);

    return () => document.addEventListener("mousedown", closeDropdown);
  }, [dropdown]);

  return (
    <div ref={ref} className={styles.langSwitch}>
      <div onClick={() => setDropdown(!dropdown)} className={styles.head}>
        <p>{locale.toUpperCase()}</p>
        <div
          style={{
            transform: dropdown ? "rotate(180deg)" : "rotate(0deg)",
          }}
          className={styles.arrow}
        />
      </div>

      <ul
        style={{
          height: dropdown ? "auto" : "0",
          padding: dropdown ? "8px 7px" : "0",
          opacity: dropdown ? "1" : "0",
        }}
        className={styles.langList}>
        {locales.map((loc) => (
          <li key={loc}>
            <Link href="/" locale={loc}>
              <a className={`${locale == loc ? styles.activeLink : ""}`}>
                {loc.toUpperCase()}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LangSwitch;
