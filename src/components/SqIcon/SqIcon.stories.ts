import type { Meta, StoryObj } from '@storybook/react';

import {SqIcon} from "./SqIcon";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Icônes',
  component: SqIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof SqIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icone: Story = {
  args: {
    icon: "iconLienExterne",
  },
};
