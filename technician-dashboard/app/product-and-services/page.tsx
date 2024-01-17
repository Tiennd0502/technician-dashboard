import { Flex, Box } from '@chakra-ui/react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants';
import { getCategories, getServices } from '@/lib/utils/services';

const ServiceSection = dynamic(() => import('@/ui/product-and-services/ServiceSection'));
const ProductStatistics = dynamic(() => import('@/ui/product-and-services/ProductStatistics'));
const Technician = dynamic(() => import('@/ui/product-and-services/Technician'));
const ProductTable = dynamic(() => import('@/ui/product-and-services/ProductTable'), {
  ssr: false,
});

const Page = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.CATEGORIES,
      queryFn: getCategories,
    }),
    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.SERVICES,
      queryFn: getServices,
    }),
  ]);

  return (
    <Box px='5'>
      <Flex gap='5' flexWrap='wrap'>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ServiceSection
            width={{
              base: '100%',
              xl: 'calc(67% - 10px)',
            }}
          />
        </HydrationBoundary>
        <Box
          w={{
            base: '100%',
            md: 'calc(50% - 10px)',
            xl: 'calc(33% - 10px)',
          }}
          order={{ md: 2, xl: 2 }}
        >
          <ProductStatistics />
        </Box>
        <Box
          w={{
            base: '100%',
            xl: 'calc(67% - 10px)',
          }}
          order={{ md: 4, xl: 3 }}
        >
          <ProductTable />
        </Box>
        <Box
          w={{
            base: '100%',
            md: 'calc(50% - 10px)',
            xl: 'calc(33% - 10px)',
          }}
          order={{ md: 3, xl: 4 }}
        >
          <Technician />
        </Box>
      </Flex>
    </Box>
  );
};

export const metadata: Metadata = {
  title: 'Product & Services',
  description: 'The product and services in technical dashboard',
};

export default Page;
