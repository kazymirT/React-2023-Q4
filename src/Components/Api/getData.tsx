import { ApiResponse, Character, Info, getCharacters } from 'rickmortyapi';

export const getDate = async (search?: string) => {
  const searchName = search ? search?.trim() : '';
  try {
    const characters: ApiResponse<Info<Character[]>> = await getCharacters({
      name: searchName,
    });
    return characters.data.results;
  } catch (error) {
    console.error('Помилка:', error);
  }
};
