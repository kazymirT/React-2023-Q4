export const setLocalStorages = (name: string, search: string): void => {
  localStorage.setItem(name, search);
};

export const getLocalStorages = (name: string): string => {
  const search = localStorage.getItem(name);
  return search ? search : ' ';
};
