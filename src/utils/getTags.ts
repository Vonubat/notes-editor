export const getTags = (text: string): string[] => {
  const words: string[] = text.toUpperCase().split(/[\s\\r\\n]+/);
  const tags: string[] = words.filter((word) => word.includes('#'));

  return tags;
};
