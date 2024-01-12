import { VStack, Text, Heading } from '@chakra-ui/react';
import Link from 'next/link';

const Page = () => (
  <VStack minH='50vh' spacing='20px'>
    <Heading variant='headingLg'>404 Not Found!</Heading>
    <Text as='sub' style={{ whiteSpace: 'pre-wrap', color: 'red' }}>
      Could not find the requested data.
    </Text>
    <Link href='/'>
      <Text color='primary.500' _hover={{ color: 'primary.600' }}>
        Go to Home page
      </Text>
    </Link>
  </VStack>
);

export default Page;
