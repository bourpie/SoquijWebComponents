import type { Meta, StoryObj } from '@storybook/react';

import { SqLogoSoquij } from './SqLogoSoquij';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Logo Soquij',
  component: SqLogoSoquij,
  tags: ['autodocs'],
} satisfies Meta<typeof SqLogoSoquij>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    src: 'https://aristote.soquij.qc.ca/a/media/logos/sqj-headerlogo.svg',
    alt: 'Logo de soquij',
    href: 'https://soquij.qc.ca'
  }
};
