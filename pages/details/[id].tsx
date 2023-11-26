import { MouseEventHandler } from "react";
import { getProductById, getProductsByName, getRunningQueriesThunk } from "../api/getData";
import { useRouter } from "next/router";
import { wrapper } from "../../components/Store/store";
import { FetchArgType } from "../../components/type/type";
import { updateParams } from "../../components/utils/updateSearchParams";
import { Results } from "../../components/Results/Results";
import { Header } from "../../components/Header/Header";
import { Details } from "../../components/Details/Details";


export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const productId = typeof context.query.id === 'string' ? context.query.id : '';
    const fetchArg: FetchArgType = {
      name: typeof context.query.search === 'string' ? context.query.search : ' ',
      limit: typeof context.query.limit === 'string' ? context.query.limit : '5',
      page: typeof context.query.page === 'string' ? context.query.page : '1',
    }
    const skip: string = String((Number(fetchArg.page) - 1) * Number(fetchArg.limit))
    fetchArg.page = skip;
    store.dispatch(getProductsByName.initiate(fetchArg));
    store.dispatch(getProductById.initiate(productId));

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);

const Home = () => {
  const router = useRouter();

  const handleClick: MouseEventHandler<HTMLDivElement> = async (event) => {
    const targetElement = event.target as HTMLElement;

    if (targetElement && targetElement.id === 'left-page') {
      const params = updateParams(router.query)
      router.push(params);
    }
  };
  return (
    <>
    <Header />
      <div className="details-container" onClick={handleClick}>
        <Results />
        <Details />
      </div>
    </>
  )
};

export default Home;