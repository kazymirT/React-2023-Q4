import React from "react";

import { Card } from "../Card/Card";
import { ProductsType } from "../type/type";
export type CartsProps = {
  products: ProductsType[];
};

export const Cards = ({ products }: CartsProps) => {
  return (
    <>
      {products.map((item) => (
        <Card key={item.id} products={item} />
      ))}
    </>
  );
};
