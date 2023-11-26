import { ParsedUrlQuery } from "node:querystring";

export function updateSearchParams(paramName: string, paramValue: string) {
  const params = new URLSearchParams(window.location.search);

  if (paramValue && paramName !== 'page') {
    params.set(paramName, paramValue);
    params.set('page', '1');
  } else {
    params.set(paramName, paramValue);
  }

  const newUrl = params.toString()
    ? `${window.location.pathname}?${params}`
    : window.location.pathname;
  return newUrl;
}

export const updateParams = (query: ParsedUrlQuery) => {
  const { limit, page, search } = query;
  const queryParams = new URLSearchParams();
  queryParams.append('limit', typeof limit === 'string' ? limit : '5');
  queryParams.append('page', typeof page === 'string' ? page : '1');
  queryParams.append('search', typeof search === 'string' ? search : '');

  const params = `/?${queryParams.toString()}`;
  return params;
}
