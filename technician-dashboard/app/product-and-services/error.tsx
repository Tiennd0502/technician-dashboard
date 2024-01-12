'use client';

import { VStack, Text, Heading } from '@chakra-ui/react';
import Link from 'next/link';

import { ROUTES } from '@/lib/constants';

interface ErrorProps {
  error: Error & { digest?: string };
}

const ErrorPage = ({ error }: ErrorProps) => (
  <VStack minH='50vh' spacing='20px'>
    <Heading variant='headingLg'>An error has been occurred!</Heading>
    <Text as='sub' style={{ whiteSpace: 'pre-wrap', color: 'red' }}>
      {error.message}
    </Text>
    <Link href={ROUTES.PRODUCT_AND_SERVICES}>
      <Text color='primary.500' _hover={{ color: 'primary.600' }}>
        Try again?
      </Text>
    </Link>
  </VStack>
);

export default ErrorPage;
