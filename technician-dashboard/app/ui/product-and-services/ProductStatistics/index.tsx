import { Flex, Heading, Text, Button, Box } from '@chakra-ui/react';
import Image from 'next/image';

import { StatusLabel } from '@/ui/commons';
import { STATUS } from '@/lib/interfaces';

const ProductStatistics = () => (
  <Flex
    flexDirection='column'
    justifyContent='space-between'
    borderRadius='md'
    p='7'
    borderWidth='1px'
    borderColor='border.primary'
    h='100%'
  >
    <Flex justifyContent='space-between' alignItems='center'>
      <Heading as='h3' variant='headingXl'>
        Total Products
      </Heading>
      <Text variant='text3Xl'>350</Text>
    </Flex>
    <Flex justifyContent='center' w='full' gap='2' mt='4'>
      <Box mt='auto' mb={{ base: '5', md: '0', lg: '7' }}>
        <Text>285</Text>
        <Text variant='textXs'>Activated</Text>
      </Box>
      <Box alignSelf='center' flexBasis={{ base: '200px', md: '320px' }}>
        <Image
          src='/images/total-product.webp'
          alt='Total product'
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={200}
          height={180}
          blurDataURL='/images/total-product.webp'
          placeholder='blur'
          priority
        />
      </Box>
      <Box alignSelf='start' mb='4'>
        <Text>65</Text>
        <Text variant='textXs'>Deactivated</Text>
      </Box>
    </Flex>
    <Flex justifyContent='space-between' mt='4'>
      <Button variant='outline'>
        <StatusLabel value={STATUS.Activated} />
      </Button>
      <Button variant='outline'>
        <StatusLabel value={STATUS.Deactivated} />
      </Button>
    </Flex>
  </Flex>
);

export default ProductStatistics;
