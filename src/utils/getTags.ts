export const getTags = (text: string): string[] => {
  const words: string[] = text.toUpperCase().split(' ');

  const tags: string[] = words.filter((word) => word.includes('#'));

  return tags;
};
