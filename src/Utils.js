export const arraySort = (arrayToSort, sortKey) => {
  return arrayToSort.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
};
