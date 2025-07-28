import { Background } from './background';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  component: Background,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Background>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { width: '100vw', height: '100vh' },
  },
};
