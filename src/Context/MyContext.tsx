import { createContext, ReactNode } from 'react';
import { ProductResponse } from '../type/type';

type MyContentType = {
  url: URL;
  data: ProductResponse;
  searchName: string;
  search: string;
};

export const MyContext = createContext<MyContentType | undefined>(undefined);

type MyContextProviderProps = {
  children: ReactNode;
  value: MyContentType;
};

export const MyContextProvider = ({
  children,
  value,
}: MyContextProviderProps) => {
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
