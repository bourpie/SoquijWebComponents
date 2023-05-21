import type { Meta, StoryObj } from '@storybook/react';
import { SqHeader } from './SqHeader';

const meta = {
  title: 'Header',
  component: SqHeader,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SqHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
