import React from "react";
import styles from "./styles.module.css";
import { useCallback } from "react";
import { updateSearchParams } from "../utils/updateSearchParams";
import { useRouter } from "next/router";

export const Search = () => {
  const router = useRouter();
  const handlerSubmit = useCallback(
    (event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = new FormData(event.target);
      const searchValue: string | null = form.get("search") as string;
      const newUrl = updateSearchParams("search", searchValue);
      localStorage.setItem("search", searchValue);
      router.push(newUrl);
    },
    [router],
  );

  return (
    <div className={styles.search}>
      <form role="search" data-testid={"search-form"} onSubmit={handlerSubmit}>
        <input
          className={styles.input}
          data-testid={"search-input"}
          type="text"
          name="search"
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
