import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { updateParams } from "../utils/updateSearchParams";
import { useGetProductByIdQuery } from "../../pages/api/getData";

export const Details = () => {
  const router = useRouter();
  const params = updateParams(router.query);
  const productId: string =
    typeof router.query.id === "string" ? router.query.id : "";
  const result = useGetProductByIdQuery(productId, {
    skip: router.isFallback,
  });
  const { data } = result;

  return (
    <div className={styles.container}>
      {data && (
        <div className={styles.item}>
          <Image
            src={data.images[0]}
            className={styles.img}
            width={300}
            height={300}
            alt={data.title}
          />
          <h2>{data.title}</h2>
          <ul>
            <li>Brand: {data.brand}</li>
            <li>Category: {data.category}</li>
            <li>Price: {data.price}$</li>
          </ul>
          <p>{data.description}</p>
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
