import { render, renderHook, waitFor } from '@testing-library/react';

import * as ReactQuery from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';

import { API_ROUTES, CATEGORIES, SERVICES } from '@/lib/constants';

import ServiceSection from '..';
import { useFetchServices } from '@/lib/hooks';

const queryClient = new ReactQuery.QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

jest.mock('@/lib/hooks', () => ({
  ...jest.requireActual('@/lib/hooks'),
  useFetchServices: ([]) => [
    {
      data: [],
      isLoading: false,
    },
    {
      data: [],
      isLoading: false,
    },
  ],
}));

const props = {
  width: '100%',
};

const setup = () =>
  render(
    <ChakraProvider>
      <ReactQuery.QueryClientProvider client={queryClient}>
        <ServiceSection {...props} />
      </ReactQuery.QueryClientProvider>
    </ChakraProvider>,
  );

describe('ServiceSection test cases', () => {
  test('should render correctly', async () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
