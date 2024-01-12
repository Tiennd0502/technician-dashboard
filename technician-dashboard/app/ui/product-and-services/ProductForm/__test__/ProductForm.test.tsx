import { render } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import ProductForm from '..';

const queryClient = new QueryClient();

const onClose = jest.fn();

const mockMutateAsync = jest.fn();

jest.mock('@/lib/hooks', () => ({
  ...jest.requireActual('@/lib/hooks'),
  useProduct: () => ({
    createProduct: {
      mutateAsync: mockMutateAsync,
      isLoading: false,
    },
    editProduct: {
      mutateAsync: mockMutateAsync,
      isLoading: false,
    },
  }),
}));

describe('ProductForm', () => {
  const setup = () =>
    render(
      <QueryClientProvider client={queryClient}>
        <ProductForm isOpen={true} onClose={onClose} />
      </QueryClientProvider>,
    );

  it('it matches the snapshot', () => {
    const dom = setup();
    expect(dom).toMatchSnapshot();
  });

  test('should simulate click button Submit', () => {
    const dom = setup();
    const btnClick = dom.getByRole('button', { name: 'Submit' });

    expect(btnClick).toBeTruthy();
  });
});
