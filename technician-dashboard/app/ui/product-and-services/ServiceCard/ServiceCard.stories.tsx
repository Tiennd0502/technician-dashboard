import type { Meta, StoryObj } from '@storybook/react';

import { CURRENCY_CHARACTERS, SERVICES } from '@/lib/constants';

import ServiceCard from '.';

const meta: Meta<typeof ServiceCard> = {
  title: 'Components/ServiceCard',
  component: ServiceCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ServiceCard>;

export const Default: Story = {
  args: { service: SERVICES[0] },
};

export const HasCurrencyCharacter: Story = {
  args: { service: SERVICES[0], currencyCharacter: CURRENCY_CHARACTERS.EURO },
};
