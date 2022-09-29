import Image from "next/image";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./Search.module.scss";

const Search = ({ data }) => {
  const resultRef = useRef();
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(inputValue.toLowerCase());
  });

  const hasFilteredData = filteredData && filteredData.length > 0;

  const itemClickHandler = (e) => {
    setInputValue(e.target.textContent);
    setIsOpen(!isOpen);
  };

  const inputClickHandler = () => {
    setIsOpen(true);
  };

  const arrowKeysHandler = (e) => {
    if (
      ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
        e.code
      ) > -1
    ) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", arrowKeysHandler, false);

    return () => {
      window.removeEventListener("keydown", arrowKeysHandler, false);
    };
  }, []);

  useEffect(() => {
    if (hasFilteredData && inputValue) {
      document.body.addEventListener("keydown", onKeyDown);
    } else {
      document.body.removeEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.removeEventListener("keydown", onKeyDown);
    };
  }, [hasFilteredData, inputValue]);

  const onKeyDown = (event) => {
    const isUp = event.key === "ArrowUp";
    const isDown = event.key === "ArrowDown";
    const inputIsFocused = document.activeElement === inputRef.current;

    const resultsItems = Array.from(resultRef.current.children);

    const activeResultIndex = resultsItems.findIndex((child) => {
      return child.querySelector("a") === document.activeElement;
    });

    if (isUp) {
      if (inputIsFocused) {
        resultsItems[resultsItems.length - 1].querySelector("a").focus({
          preventScroll: true,
        });
      } else if (resultsItems[activeResultIndex - 1]) {
        resultsItems[activeResultIndex - 1].querySelector("a").focus({
          preventScroll: true,
        });
      } else {
        inputRef.current.focus({
          preventScroll: true,
        });
      }
    }

    if (isDown) {
      if (inputIsFocused) {
        resultsItems[0].querySelector("a").focus({
          preventScroll: true,
        });
      } else if (resultsItems[activeResultIndex + 1]) {
        resultsItems[activeResultIndex + 1].querySelector("a").focus({
          preventScroll: true,
        });
      } else {
        inputRef.current.focus({
          preventScroll: true,
        });
      }
    }
  };

  return (
    <form className={styles.form}>
      <input
        ref={inputRef}
        className={styles.searchField}
        type="text"
        id="search"
        autoComplete="off"
        placeholder=" "
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onClick={inputClickHandler}
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

      <ul ref={resultRef} className={styles.autocompleteList}>
        {inputValue && isOpen
          ? filteredData.slice(0, 4).map((item) => (
              <li onClick={itemClickHandler} key={item.id}>
                <a href="">{item.title}</a>
              </li>
            ))
          : null}
      </ul>
    </form>
  );
};

export default Search;
