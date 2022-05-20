export const removeDuplicated = (arrayEl) => {
  const dataArr = new Set(arrayEl);
  return [...dataArr];
};
