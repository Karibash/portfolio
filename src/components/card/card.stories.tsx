import { Card } from './card';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { width: '100px', height: '100px' },
  },
};
