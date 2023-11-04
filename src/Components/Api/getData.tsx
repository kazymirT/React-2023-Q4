export const getDate = async (
  search: string,
  limit: string,
  currentPage: number
) => {
  try {
    const searchName = search ? search : '';
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchName}&limit=${limit}&skip=${
        Number(limit) * (currentPage - 1)
      }`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
