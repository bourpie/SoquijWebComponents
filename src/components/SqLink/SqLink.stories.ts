import { Meta, StoryObj } from "@storybook/react";

import { SqLink } from "./SqLink";

const meta = {
    title: 'Liens',
    component: SqLink,
    tags: ['autodocs'],
} satisfies Meta<typeof SqLink>

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    text: 'Lien normal',
  },
};
export const Small: Story = {
  args: {
    text: 'Lien normal',
    href: '',
    size: 'small'
  },
};
export const Footer: Story = {
  args: {
    text: 'Lien small footer',
    href: '',
    variant: 'footer'
  },
};