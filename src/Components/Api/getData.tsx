export const getDate = async (
  search: string,
  limitSearch?: string,
  currentPage?: string
) => {
  try {
    const searchName = search ? search : ' ';
    const limit = limitSearch ? limitSearch : 5;
    const skip = currentPage ? Number(limit) * (Number(currentPage) - 1) : 0;
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchName}&limit=${limit}&skip=${skip}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getProduct = async (productId: string) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
