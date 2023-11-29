type FetchArgType = {
  name: string;
  limit: string;
  page: string;
};

export const createFetchArg = (
  search: string | undefined | string[],
  limit: string | undefined | string[],
  page: string | undefined | string[],
): FetchArgType => {
  const fetchArg: FetchArgType = {
    name: typeof search === "string" ? search : " ",
    limit: typeof limit === "string" ? limit : "5",
    page: typeof page === "string" ? page : "1",
  };

  const skip: string = String(
    (Number(fetchArg.page) - 1) * Number(fetchArg.limit),
  );
  fetchArg.page = skip;

  return fetchArg;
};
