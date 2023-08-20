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
export const Primaire: Story = {
  args: {
    label: 'Phrase d\'action',
    color: 'primary',
    variant: 'contained'
  },
  parameters: {
    design: {
      type: "figspec",
      url: "https://www.figma.com/file/4qwskmxOzMNgvtHQq6nFNV/Convertify-Sketch%2FAdobe%2FGoogle-(Community)?type=design&node-id=1%3A5352&mode=design&t=KpsiuoOjxt0FrTSl-1",
      accessToken: import.meta.env.VITE_STORYBOOK_FIGMA_ACCESS_TOKEN
    },
  },
};
export const Secondaire: Story = {
  args: {
    label: 'Phrase d\'action',
    color: 'secondary',
    variant: 'outlined'
  },
};
export const Outlined: Story = {
  args: {
    label: 'Phrase d\'action',
    variant: 'outlined'
  },
};
export const Bouton_texte: Story = {
  args: {
    label: 'Phrase d\'action',
    variant: 'plain'
  },
};
export const Disabled: Story = {
  args: {
    size: 'large',
    label: 'Phrase d\'action',
    disabled: true
  },
};
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Phrase d\'action',
  },
};
