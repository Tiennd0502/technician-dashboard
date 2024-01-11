import { removeSpaces, getPageList } from '../common';

describe('removeSpaces', () => {
  const text = '  this   is text  ';
  test('should return query string with isTrimmed false', () => {
    const result = removeSpaces(text);

    expect(result).toEqual(' this is text ');
  });

  test('should return query string with isTrimmed true', () => {
    const result = removeSpaces(text, true);

    expect(result).toEqual('this is text');
  });
});

describe('getPageList', () => {
  test('should return page list empty', () => {
    const result = getPageList(1, 1);

    expect(result).toEqual([]);
  });

  test('should return page list with page<= 4 and total >= 8', () => {
    const result = getPageList(3, 9);

    expect(result).toEqual([2, 3, 4, 5, '...']);
  });

  test('should return page list with total - page <= 3', () => {
    const result = getPageList(7, 9);

    expect(result).toEqual(['...', 5, 6, 7, 8]);
  });

  test('should return page list with page >=5 and total - page > 3', () => {
    const result = getPageList(5, 9);

    expect(result).toEqual(['...', 4, 5, 6, '...']);
  });
});
