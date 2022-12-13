export const uniqueID = (): number => {
  return Math.floor(Math.random() * Date.now());
};
