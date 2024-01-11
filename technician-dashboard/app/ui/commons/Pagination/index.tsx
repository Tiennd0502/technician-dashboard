'use client';

import { getPageList } from '@/lib/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Button } from '@chakra-ui/react';
import React, { useCallback, useMemo } from 'react';

interface PaginationProps {
  total: number;
  page: number;
  onChange: (value: number) => void;
}

const Pagination = ({ total, page, onChange }: PaginationProps) => {
  const handleClickNext = useCallback(() => {
    onChange(page + 1);
  }, [onChange, page]);

  const handleClickPrev = useCallback(() => {
    onChange(page - 1);
  }, [onChange, page]);

  const handleClickFirst = useCallback(() => {
    onChange(1);
  }, [onChange]);

  const handleClickLast = useCallback(() => {
    onChange(total);
  }, [total, onChange]);

  const pages = useMemo(() => getPageList(page, total), [total, page]);

  return (
    <Flex columnGap='2' justifyContent='flex-end' w='full' data-testid='list-page'>
      <Button
        aria-label='Previous page in the list'
        variant='outline'
        isDisabled={page <= 1}
        w='42px'
        onClick={handleClickPrev}
      >
        <ChevronLeftIcon fontSize={20} />
      </Button>
      <Button
        aria-label='1'
        w='42px'
        variant={page === 1 ? 'solid' : 'outline'}
        onClick={handleClickFirst}
      >
        1
      </Button>
      {pages.map((item, index) => {
        const handleChangePage = () => {
          if (typeof item === 'number' && item !== page) {
            onChange(item);
          }
        };

        return (
          <Button
            aria-label={`Page number ${item} in the list`}
            w='42px'
            variant={page === +item ? 'solid' : 'outline'}
            key={`${item}${index}`}
            onClick={handleChangePage}
            isDisabled={typeof item === 'string'}
          >
            {item}
          </Button>
        );
      })}

      {total >= 2 && (
        <Button
          aria-label={total.toString()}
          w='42px'
          variant={page === total ? 'solid' : 'outline'}
          onClick={handleClickLast}
        >
          {total}
        </Button>
      )}
      <Button
        aria-label='Next page in the list'
        variant='outline'
        isDisabled={page === total}
        w='42px'
        onClick={handleClickNext}
      >
        <ChevronRightIcon fontSize={20} />
      </Button>
    </Flex>
  );
};

export default Pagination;
