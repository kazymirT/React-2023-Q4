import { ApiResponse, Character, Info, getCharacters } from 'rickmortyapi';

export const getDate = async (search?: string) => {
  try {
    const characters: ApiResponse<Info<Character[]>> = await getCharacters({
      name: search,
    });
    return characters.data.results;
  } catch (error) {
    console.error('Помилка:', error);
  }
};
