import { useRouter } from "next/router";
import React, { useRef, useCallback } from "react";

import styles from "./styles.module.css";
import { updateSearchParams } from "../utils/updateSearchParams";

export const Search = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const searchValue = inputRef.current?.value || "";
      const newUrl = updateSearchParams("search", searchValue);
      localStorage.setItem("search", searchValue);
      router.push(newUrl);
    },
    [router],
  );

  return (
    <div className={styles.search}>
      <form role="search" data-testid={"search-form"} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          data-testid={"search-input"}
          type="text"
          name="search"
          ref={inputRef}
          defaultValue={router.query.search}
          placeholder="What product are you looking for?"
        />
        <button className={styles.btn} type="submit" id="search-button">
          Search
        </button>
      </form>
    </div>
  );
};
