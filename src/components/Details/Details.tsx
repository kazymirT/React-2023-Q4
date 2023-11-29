import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import styles from "./style.module.css";
import { ProductsType } from "../type/type";
import { updateParams } from "../utils/updateSearchParams";

type DetailsPropsType = {
  data: ProductsType;
};

export const Details = ({ data }: DetailsPropsType) => {
  const query = useRouter().query;
  const params = updateParams(query);
  const { title, images, brand, description, category, price } = data;
  return (
    <div className={styles.container} data-testid={"details"}>
      {data && (
        <div className={styles.item}>
          <Image
            src={images[0]}
            priority={true}
            className={styles.img}
            width={390}
            height={300}
            alt={title}
          />
          <h2 data-testid={"details-title"}>{title}</h2>
          <ul>
            <li>Brand: {brand}</li>
            <li>Category: {category}</li>
            <li>Price: {price}$</li>
          </ul>
          <p>{description}</p>
        </div>
      )}
      <Link
        href={params}
        data-testid="details-cancel"
        className={"details-cancel"}
      >
        Cancel
      </Link>
    </div>
  );
};
