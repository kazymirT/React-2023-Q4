import React from "react";

import { getProductsByName } from "./api/getData";
import { Header } from "../components/Header/Header";
import { Results } from "../components/Results/Results";
import { wrapper } from "../components/Store/store";
import { FetchArgType, ProductResponse } from "../components/type/type";
import { createFetchArg } from "@/components/utils/createFetchArg";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query: { limit, search, page } }) => {
      const fetchArg: FetchArgType = createFetchArg(search, limit, page);
      const data = await store.dispatch(getProductsByName.initiate(fetchArg));

      return {
        props: {
          cards: data,
        },
      };
    },
);

type HomePropsType = {
  cards: {
    data: ProductResponse;
  };
};

const Home: React.FC<HomePropsType> = ({ cards: { data } }: HomePropsType) => {
  return (
    <>
      <Header />
      <Results data={data} />
    </>
  );
};

export default Home;
