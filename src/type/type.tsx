import { ReactNode } from 'react';
import { Character } from 'rickmortyapi';

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
  date: Character[] | null;
};

export type ChildrenContentProps = {
  data: Character;
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
