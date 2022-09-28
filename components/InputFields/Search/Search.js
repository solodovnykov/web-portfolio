import Image from "next/image";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <form className={styles.form}>
      <input
        className={styles.searchField}
        type="text"
        id="search"
        placeholder=" "
      />
      <label className={styles.label} htmlFor="search">
        Search
      </label>
      <button className={styles.button}>
        <Image
          width={24}
          height={24}
          alt="search icon"
          src={"/assets/icons/IconSearch.svg"}
        />
      </button>
    </form>
  );
};

export default Search;
