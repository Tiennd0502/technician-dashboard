'use client';

import React, { memo } from 'react';
import { Flex, FlexProps, Heading, LayoutProps } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

// Types
import { Category, Service } from '@/lib/interfaces';

// Constants
import { API_ROUTES, QUERY_KEYS } from '@/lib/constants';

// Components
import { Spinner } from '@/ui/commons';
import { Categories, ServiceList } from '@/ui/product-and-services';

// Utils
import { getCategories, getServices } from '@/lib/utils/services';

interface ServiceSectionProps extends FlexProps {
  width: LayoutProps['w'];
}

const ServiceSection = ({ width, ...props }: ServiceSectionProps) => {
  const { data: categories = [] } = useQuery({
    queryKey: QUERY_KEYS.CATEGORIES,
    queryFn: () => getCategories(),
  });

  const { data: services = [] } = useQuery({
    queryKey: QUERY_KEYS.SERVICES,
    queryFn: () => getServices(),
  });

  return (
    <Flex
      w={width}
      flexDirection='column'
      justifyContent='space-between'
      gap='5'
      borderWidth='1px'
      borderColor='border.primary'
      borderRadius='md'
      p='7'
      minH='315px'
      order={{
        md: 1,
        xl: 1,
      }}
      {...props}
    >
      <Heading variant={{ base: 'headingLg', lg: 'headingXl' }}>About Services</Heading>
      <ServiceList list={services as Service[]} />
      <Categories list={categories as Category[]} />
    </Flex>
  );
};

export default memo(ServiceSection);
