import { useRouter } from "next/router";
import { MouseEventHandler } from "react";
import React from "react";

import { Details } from "../../components/Details/Details";
import { Header } from "../../components/Header/Header";
import { Results } from "../../components/Results/Results";
import { wrapper } from "../../components/Store/store";
import { FetchArgType, HomePropsType } from "../../components/type/type";
import { updateParams } from "../../components/utils/updateSearchParams";
import { getProductById, getProductsByName } from "../api/getData";
import { createFetchArg } from "@/components/utils/createFetchArg";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query: { limit, page, search, id } }) => {
      const productId = typeof id === "string" ? id : "";

      const fetchArg: FetchArgType = createFetchArg(search, limit, page);

      const cardsData = await store.dispatch(
        getProductsByName.initiate(fetchArg),
      );
      const detailsData = await store.dispatch(
        getProductById.initiate(productId),
      );

      return {
        props: {
          cards: cardsData,
          details: detailsData,
        },
      };
    },
);

const Home = ({ cards, details }: HomePropsType) => {
  const router = useRouter();

  const handleClick: MouseEventHandler<HTMLDivElement> = async (event) => {
    const targetElement = event.target as HTMLElement;

    if (targetElement && targetElement.id === "left-page") {
      const params = updateParams(router.query);
      router.push(params);
    }
  };

  return (
    <>
      <Header />
      <div className="details-container" onClick={handleClick}>
        <Results data={cards.data} />
        <Details data={details.data} />
      </div>
    </>
  );
};

export default Home;
