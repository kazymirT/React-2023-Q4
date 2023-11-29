import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import styles from "./styles.module.css";
import { ProductsType } from "../type/type";
import { updateParams } from "../utils/updateSearchParams";

export type CartProps = {
  products: ProductsType;
};

export const Card = ({ products: { id, title, images } }: CartProps) => {
  const router = useRouter();
  const params = updateParams(router.query);

  const openDetails = () => {
    router.push(`/details/${id}${params}`);
  };

  return (
    <>
      <div onClick={openDetails} data-testid={"card"}>
        <div className={styles.item}>
          <Image
            className={styles.images}
            width={300}
            height={300}
            priority={true}
            src={images[0]}
            alt={title}
          />
          <h2 className={styles.title}>{title}</h2>
        </div>
      </div>
    </>
  );
};
