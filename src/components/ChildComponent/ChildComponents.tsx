import React from "react";
import Link from "next/link";
import { ChildrenContentProps } from "../type/type";
import styles from "./styles.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { updateParams } from "../utils/updateSearchParams";

export const ChildComponent = (props: ChildrenContentProps) => {
  const { id, title, images } = props.data;
  const query = useRouter().query;
  const params = updateParams(query);

  return (
    <>
      <Link href={`/details/${id}${params}`}>
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
      </Link>
    </>
  );
};
