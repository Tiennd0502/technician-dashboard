import { ThemeOverride } from '@chakra-ui/react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const fonts = {
  primary: `${roboto.style.fontFamily}, sans-serif`,
  secondary: `${roboto.style.fontFamily}, sans-serif`,
};

export const fontSizes: ThemeOverride['fontSizes'] = {
  xs: '12px',
  xxs: '13px',
  sm: '14px',
  xsm: '15px',
  md: '16px',
  lg: '20px',
  xl: '22px',
  '2xl': '26px',
  '3xl': '30px',
};

export const fontWeights: ThemeOverride['fontWeights'] = {
  normal: 500,
  bold: 700,
};
