import { useRouter } from "next/router";
import React from "react";

import styles from "./styles.module.css";
import { Cards } from "../Cards/Carts";
import { NoResults } from "../NoResults";
import { Pagination } from "../Pagination/Pagination";
import { Select } from "../Select/Select";
import { ProductResponse } from "../type/type";
import { updateSearchParams } from "../utils/updateSearchParams";

type ResultsPropsType = {
  data: ProductResponse;
};

export const Results = ({
  data: { limit, products, total },
}: ResultsPropsType) => {
  const router = useRouter();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = event.target.value;

    if (newLimit !== limit) {
      setParams("limit", newLimit);
    }
  };

  const handlePageChange = (newPage: number, totalPages: number) => {
    const isNewPageValid = newPage >= 1;
    const isWithinTotalPages = newPage <= totalPages;

    if (isNewPageValid && isWithinTotalPages) {
      setParams("page", String(newPage));
    }
  };

  const setParams = (paramName: string, paramValue: string) => {
    const newUrl = updateSearchParams(paramName, paramValue);
    router.push(newUrl);
  };

  return (
    <div className={styles.container} data-test="results">
      {products.length > 0 && (
        <>
          <div className="control">
            <Select
              limit={
                typeof router.query.limit === "string"
                  ? router.query.limit
                  : "5"
              }
              onChange={handleSelectChange}
            />
            <Pagination
              limit={Number(limit)}
              page={router.query.page ? Number(router.query.page) : 1}
              total={Number(total)}
              onChange={handlePageChange}
            />
          </div>

          <div className={styles["carts"]} id="left-page">
            <Cards products={products} />
          </div>
        </>
      )}

      {products.length === 0 && <NoResults />}
    </div>
  );
};
