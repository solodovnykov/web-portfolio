import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./DropdownFilter.module.scss";

const DropdownFilter = () => {
  const [dropdown, setDropdown] = useState(false);
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
    <div ref={ref} className={styles.dropdownFilter}>
      <div
        onClick={() => setDropdown(!dropdown)}
        tabIndex={0}
        className={styles.head}>
        <span className={styles.label}>Filter</span>
        <p>All</p>
        <button className={styles.button}>
          <span
            style={{
              transform: dropdown ? "rotate(180deg)" : "rotate(0deg)",
            }}>
            <Image
              width={24}
              height={24}
              alt="search icon"
              src={"/assets/icons/IconArrow.svg"}
            />
          </span>
        </button>
      </div>

      <ul className={styles.itemList}>
        {dropdown ? (
          <li>
            <a href="">Item</a>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default DropdownFilter;
