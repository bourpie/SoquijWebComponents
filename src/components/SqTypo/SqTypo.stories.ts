import type { Meta, StoryObj } from '@storybook/react';

import { SqTypo } from './SqTypo';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Typographie',
  component: SqTypo,
  tags: ['autodocs'],
} satisfies Meta<typeof SqTypo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const H1: Story = {
  args: {
    variant: 'h1',
    text: 'Whereas recognition of the inherent dignity',
  },
};
export const H2: Story = {
  args: {
    variant: 'h2',
    text: 'Whereas recognition of the inherent dignity',
  },
};
export const H3: Story = {
  args: {
    variant: 'h3',
    text: 'Whereas recognition of the inherent dignity',
  },
};
export const H4: Story = {
  args: {
    variant: 'h4',
    text: 'Whereas recognition of the inherent dignity',
  },
};
export const H5: Story = {
  args: {
    variant: 'h5',
    text: 'Whereas recognition of the inherent dignity',
  },
};
export const H6: Story = {
  args: {
    variant: 'h6',
    text: 'Whereas recognition of the inherent dignity',
  },
};
export const Small: Story = {
  args: {
    variant: 'h6',
    text: 'Whereas recognition of the inherent dignity',
    component: 'small'
  },
};
export const Texte: Story = {
  args: {
    variant: 'body2',
    text: 'No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him. No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.',
  },
};