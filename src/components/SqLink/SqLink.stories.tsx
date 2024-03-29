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
export const FooterLienImportant: Story = {
  args: {
    text: 'Lien externe',
    variant: 'footer',
    href: 'https://soquij.qc.ca'
  },
  decorators: [
      (Story) => (
          <div style={{
            backgroundColor: 'rgb(29, 33, 65)',
            padding: '3rem'
          }}>
              <Story />
          </div>
      )
  ]
}
export const FooterCopyright: Story = {
  args: {
    text: 'ministre de la Justice du Québec',
    href: 'https://www.justice.gouv.qc.ca',
    variant: 'copyright'
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

export const LienExterne: Story = {
  args: {
    text: 'Lien externe',
    href: 'https://formations.soquij.qc.ca'
  }
}

export const LienExterneDark: Story = {
  args: {
    text: 'Lien externe',
    theme: 'dark',
    href: 'https://formations.soquij.qc.ca'
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
}



