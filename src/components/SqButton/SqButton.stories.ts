import type { Meta, StoryObj } from '@storybook/react';

import { SqButton } from './SqButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Boutons',
  component: SqButton,
  tags: ['autodocs'],
} satisfies Meta<typeof SqButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BoutonOrange: Story = {
  args: {
    label: 'Button',
  },
};
export const LienOrange: Story = {
  args: {
    label: 'Button',
    href: 'Mon lien'
  },
};

export const Outline: Story = {
  args: {
    label: 'Button',
    variant: 'outline'
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
