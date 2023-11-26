import React from "react";
import { ChildComponent } from "../ChildComponent/ChildComponents";
import styles from "./styles.module.css";
import { NoResults } from "../NoResults";
import { useRouter } from "next/router";
import { Select } from "../Select/Select";
import { Pagination } from "../Pagination/Pagination";
import { updateSearchParams } from "../utils/updateSearchParams";
import { ProductResponse } from "../type/type";

type ResultsPropsType = {
  data: ProductResponse;
};

export const Results = (props: ResultsPropsType) => {
  const router = useRouter();

  const data: ProductResponse | undefined = props.data;
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = event.target.value;

    if (newLimit !== data?.limit) {
      setParams("limit", newLimit);
    }
  };
  const setParams = (paramName: string, paramValue: string) => {
    const newUrl = updateSearchParams(paramName, paramValue);
    router.push(newUrl);
  };
  const handlePageChange = (newPage: number, totalPages: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setParams("page", String(newPage));
    }
  };

  return (
    <div className={styles.container} data-test="results">
      {data?.products && data.products.length > 0 && (
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
              limit={Number(data.limit)}
              page={router.query.page ? Number(router.query.page) : 1}
              total={Number(data.total)}
              onChange={handlePageChange}
            />
          </div>

          <div className={styles["items"]} id="left-page">
            {data.products.map((item) => (
              <ChildComponent key={item.id} data={item} />
            ))}
          </div>
        </>
      )}

      {data?.products.length === 0 && <NoResults />}
    </div>
  );
};
