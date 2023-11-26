import { ProductResponse } from "@/components/type/type";

export function createCardsListResponseMock(arg: boolean) {
  const products: ProductResponse = {
    skip: "0",
    total: "100",
    limit: "10",
    products: [
      {
        brand: "Apple",
        category: "smartphones",
        description: "An apple mobile which is nothing like apple",
        discountPercentage: 12.96,
        id: 1,
        images: [
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
        price: 549,
        rating: 4.69,
        stock: 94,
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        title: "iPhone 9",
      },
      {
        brand: "Apple",
        category: "smartphones",
        description: "An apple mobile which is nothing like apple",
        discountPercentage: 12.96,
        id: 1,
        images: [
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
        price: 549,
        rating: 4.69,
        stock: 94,
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        title: "iPhone 9",
      },
      {
        brand: "Apple",
        category: "smartphones",
        description: "An apple mobile which is nothing like apple",
        discountPercentage: 12.96,
        id: 1,
        images: [
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
        price: 549,
        rating: 4.69,
        stock: 94,
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        title: "iPhone 9",
      },
    ],
  };
  const noProducts: ProductResponse = {
    skip: "0",
    total: "0",
    limit: "10",
    products: [],
  };

  return arg ? products : noProducts;
}
