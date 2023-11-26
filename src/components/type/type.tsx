import { ReactNode } from "react";

export type ComponentLoader = {
  isLoader: boolean;
};

export type ComponentDate = {
  date: ProductsType[] | null;
};

export type ChildrenContentProps = {
  data: ProductsType;
};

export type ErrorBtnProps = {
  children?: ReactNode;
};

export type ErrorBtnState = {
  hasError: boolean;
};

export type ErrorBoundaryProps = {
  children?: ReactNode;
};

export type ErrorBoundaryState = {
  hasError: boolean;
};

export type ProductResponse = {
  products: ProductsType[];
  total: string;
  skip: string;
  limit: string;
};

export type ProductsType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [string, string, string];
};

export type SelectProps = {
  selectedValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};

export type PageLoader = {
  url: URL;
  data: ProductResponse;
  search: string;
  searchName: string;
};

export type DetailsLoader = {
  data: ProductsType;
  search: string;
  url: URL;
};

export type HeaderLoader = {
  searchName: string;
  search: string;
};

export type ResultsLoader = {
  data: {
    skip: string;
    products: ProductsType[];
    total: string;
    limit: string;
  };
};

export type SelectPropsType = {
  limit: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type PaginationPropsType = {
  limit: number;
  total: number;
  page: number;
  onChange: (pageNumber: number, totalPages: number) => void;
};

export type InitialFetchArgState = {
  limit: string;
  page: string;
  total: string;
};

export type UpdateArgPayload = {
  payload: {
    limit?: string;
    page?: string;
    total?: string;
  };
};

export type FetchArgType = {
  name: string;
  limit: string;
  page: string;
};
