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
export const SmallFooter: Story = {
  args: {
    text: 'Lien small footer',
    href: 'https://google.com',
    variant: 'footer'
  },
};

export const Dark: Story = {
    args: {
      text: 'Sur theme foncé',
      href: '',
      theme: 'dark'
    },
    decorators: [
        (Story) => (
            <div style={{
              backgroundColor: 'rgba(0, 0, 22, 1)',
              padding: '3rem'
            }}>
                <Story />
            </div>
        )
    ]
};
export const Megamenu: Story = {
    args: {
      text: 'Lien dans le mégamenu',
      href: '',
      variant: 'megamenu',
    },
    decorators: [
        (Story) => (
            <div style={{
              backgroundColor: 'rgba(242, 242, 242, 1)',
              padding: '3rem'
            }}>
                <Story />
            </div>
        )
    ]
};



