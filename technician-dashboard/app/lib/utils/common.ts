export const removeSpaces = (text = '', isTrimmed = false) => {
  const result = text.replace(/ +/g, ' ');

  return isTrimmed ? result.trim() : result;
};

export const getPageList = (page: number, total: number) => {
  if (page <= 4 || total < 8) {
    if (total >= 8) {
      return [2, 3, 4, 5, '...'];
    } else {
      const result = Array.from({ length: total }, (_, i) => i + 1);
      return result.slice(1, result.length - 1);
    }
  } else if (total - page <= 3) {
    return ['...', total - 4, total - 3, total - 2, total - 1];
  } else {
    return ['...', page - 1, page, page + 1, '...'];
  }
};
