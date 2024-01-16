'use client';

import React, { useCallback, useMemo, useState } from 'react';
import { Box, Button, Flex, Heading, VStack, useDisclosure, useToast } from '@chakra-ui/react';

// Types
import { Filter, Product, STATUS, TableData } from '@/lib/interfaces';

// Constants
import { DEFAULT_PRODUCT_FILTER, ROUTES } from '@/lib/constants';

// Utils
import { removeSpaces } from '@/lib/utils';

// Components / icons
import { ConfirmModal, Pagination, SearchBox, Spinner, StatusLabel, Table } from '@/ui/commons';
import { FilterIcon } from '@/ui/icons';
import ProductForm from '../ProductForm';

// Hooks
import { useFetchProducts, useProduct } from '@/lib/hooks';

const ProductTable = () => {
  const toast = useToast();

  const [productEdit, setProductEdit] = useState<Product>();
  const [productFilter, setProductFilter] = useState<Filter>(DEFAULT_PRODUCT_FILTER);
  const [productDelete, setProductDelete] = useState<string>('');

  const { isOpen: isOpenForm, onToggle: onToggleForm } = useDisclosure();
  const {
    isOpen: isOpenConfirmModal,
    onOpen: onOpenConfirmModal,
    onClose: onCloseConfirmModal,
  } = useDisclosure();

  const {
    deleteProduct: { mutate: deleteProduct, isPending: isDeleting },
  } = useProduct();

  const { data: products = [], isLoading } = useFetchProducts(productFilter);

  // TODO: Config api return total pages
  const { data: productAll = [] } = useFetchProducts({
    name: productFilter.name || '',
    sortBy: productFilter.sortBy,
    order: productFilter.order,
  });

  const totalPage = useMemo(
    () => Math.ceil(productAll.length / +DEFAULT_PRODUCT_FILTER.limit),
    [productAll],
  );

  const handleCloseForm = useCallback(() => {
    productEdit && setProductEdit(undefined);
    onToggleForm();
  }, [onToggleForm, productEdit]);

  const handleSortProduct = useCallback((value: Filter) => {
    setProductFilter((prev: Filter) => ({
      ...prev,
      ...value,
    }));
  }, []);

  const handleClickEditProduct = useCallback(
    (id: string) => {
      setProductEdit(products?.find((product) => product.id === id));
      onToggleForm();
    },
    [onToggleForm, products],
  );

  const handleSearchProduct = useCallback((value: string) => {
    setProductFilter((prev: Filter) => ({
      ...prev,
      name: removeSpaces(value, true),
      page: '1',
    }));
  }, []);

  const handleCloseConfirmModal = useCallback(() => {
    setProductDelete('');
    onCloseConfirmModal();
  }, [onCloseConfirmModal]);

  const handleDeleteProduct = useCallback(() => {
    deleteProduct(productDelete, {
      onSuccess: () => {
        handleCloseConfirmModal();
        toast({
          position: 'top-right',
          title: `Product deleted.`,
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      },
      onError: () => {
        toast({
          position: 'top-right',
          title: `Product delete failed.`,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      },
    });
  }, [deleteProduct, handleCloseConfirmModal, productDelete, toast]);

  const handleOpenConfirmModal = useCallback(
    (id: string) => {
      setProductDelete(id);
      onOpenConfirmModal();
    },
    [onOpenConfirmModal],
  );

  const handleChangePage = useCallback((page: number) => {
    setProductFilter((prev: Filter) => ({
      ...prev,
      page: page.toString(),
    }));
  }, []);

  const productHeaderColumn = useMemo(() => {
    const customViewStatus = (value: string | number | boolean) => (
      <StatusLabel value={value as STATUS} />
    );

    return [
      {
        key: 'checkbox',
        label: 'Checkbox',
        width: {
          md: '30px',
          lg: '50px',
        },
        isCheckbox: true,
      },
      {
        key: 'name',
        label: 'Product name',
        width: {
          md: '100%',
          lg: '28%',
        },
        onSort: handleSortProduct,
      },
      {
        key: 'brand',
        label: 'Brand name',
        width: {
          md: '100%',
          lg: '17%',
        },
      },
      {
        key: 'service',
        label: 'Service',
        width: {
          md: '100%',
          lg: '15%',
        },
      },
      {
        key: 'status',
        label: 'Status',
        width: {
          md: '100%',
          lg: '18%',
        },
        customView: customViewStatus,
      },
      {
        key: 'actions',
        label: 'Actions',
        width: {
          md: '100%',
          lg: 'calc(32% - 35px)',
        },
        isAction: true,
      },
    ];
  }, [handleSortProduct]);

  return (
    <VStack spacing={7} p='7' borderWidth='1px' borderRadius='md' borderColor='primary' h='100%'>
      {isOpenForm && (
        <ProductForm
          title={`${productEdit ? 'Edit' : 'Add'} Product`}
          isOpen={isOpenForm}
          product={productEdit}
          onClose={handleCloseForm}
        />
      )}
      {isOpenConfirmModal && (
        <ConfirmModal
          title='Delete Product'
          description='Are you sure you want to delete this product?'
          isOpen={isOpenConfirmModal}
          isSubmitting={isDeleting}
          onSubmit={handleDeleteProduct}
          onClose={handleCloseConfirmModal}
        />
      )}
      <Flex
        gap={{ base: 4, md: 2, lg: 0 }}
        justifyContent='space-between'
        alignItems='center'
        w='full'
        flexWrap='wrap'
      >
        <Heading variant='headingLg' mr='auto' w={{ base: '100%', lg: '25%' }}>
          Products listing
        </Heading>
        <Box minW='200px' w={{ base: '100%', md: '50%', lg: '40%' }}>
          <SearchBox onSearch={handleSearchProduct} />
        </Box>
        <Button as={Flex} gap='4' variant='outline' ml={{ md: 'auto' }} mr={{ md: 4 }}>
          Filter <FilterIcon />
        </Button>
        <Button onClick={onToggleForm}>Add new</Button>
      </Flex>

      {isLoading ? (
        <Flex minH='388px' alignItems='center'>
          <Spinner />
        </Flex>
      ) : (
        <>
          <Table
            filter={productFilter}
            columns={productHeaderColumn}
            data={products as unknown as TableData[]}
            onEdit={handleClickEditProduct}
            onDelete={handleOpenConfirmModal}
          />

          {!!products.length && (
            <Pagination
              onChange={handleChangePage}
              total={totalPage}
              page={+(productFilter?.page || 1)}
            />
          )}
        </>
      )}
    </VStack>
  );
};

export default ProductTable;
