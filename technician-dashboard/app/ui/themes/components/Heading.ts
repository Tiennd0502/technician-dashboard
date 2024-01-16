import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
  baseStyle: {
    color: 'text.primary',
    fontWeight: 'bold',
    fontFamily: 'primary',
  },
  variants: {
    headingMd: {
      fontSize: 'md',
    },
    headingLg: {
      fontSize: 'lg',
    },
    headingXl: {
      fontSize: 'xl',
    },
    heading2Xl: {
      fontSize: '2xl',
    },
  },
  defaultProps: {
    variant: 'headingLg',
  },
});
