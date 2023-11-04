import { ReactNode } from 'react';

export type PageProps = object;

export type PageState = {
  searchValue: string | null;
};

export type HeaderProps = {
  onClick: (value: string) => void;
};

export type SearchProps = {
  onClick: (value: string) => void;
};

export type SearchState = {
  value: string;
};

export type ContentProps = {
  data: string | null;
};

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
  total: number;
  skip: number;
  limit: number;
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
