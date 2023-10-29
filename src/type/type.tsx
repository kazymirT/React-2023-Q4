import { ReactNode } from 'react';
import { Character } from 'rickmortyapi';

export type PageProps = object;

export type PageState = {
  searchValue: string;
  isLoader: boolean;
  data: null | Character[];
};

export type HeaderProps = {
  value: string;
  onClick: (value: string) => void;
};

export type SearchProps = {
  value: string;
  onClick: (value: string) => void;
};

export type SearchState = {
  inputValue: string;
};

export type ContentProps = {
  data: Character[] | null;
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
