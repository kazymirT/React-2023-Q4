import { Header } from "../components/Header/Header";
import { Results } from "../components/Results/Results";
import { wrapper } from "../components/Store/store";
import { FetchArgType } from "../components/type/type";
import { getProductsByName, getRunningQueriesThunk } from "./api/getData";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {

    const fetchArg: FetchArgType = {
      name: typeof context.query.search === 'string' ? context.query.search : ' ',
      limit: typeof context.query.limit === 'string' ? context.query.limit : '5',
      page: typeof context.query.page === 'string' ? context.query.page : '1',
    }
    const skip: string = String((Number(fetchArg.page) - 1) * Number(fetchArg.limit))
    fetchArg.page = skip;
    store.dispatch(getProductsByName.initiate(fetchArg));
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);

const Home = () => {
  return (
    <>
    <Header />
    <Results />
    </>
  )
};

export default Home;