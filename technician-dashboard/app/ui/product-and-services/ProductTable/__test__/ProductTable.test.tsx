import { render } from '@testing-library/react';

import * as ReactQuery from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';

import ProductTable from '..';

const queryClient = new ReactQuery.QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const mockMutateAsync = jest.fn();

jest.mock('@/lib/hooks', () => ({
  ...jest.requireActual('@/lib/hooks'),
  useProduct: () => ({
    deleteProduct: {
      mutateAsync: mockMutateAsync,
      isLoading: false,
    },
  }),
}));

const setup = () =>
  render(
    <ChakraProvider>
      <ReactQuery.QueryClientProvider client={queryClient}>
        <ProductTable />
      </ReactQuery.QueryClientProvider>
    </ChakraProvider>,
  );

describe('Product Table test cases', () => {
  test('should render correctly', async () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
