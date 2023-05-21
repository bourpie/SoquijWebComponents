import type { Meta, StoryObj } from '@storybook/react';

import { SqNavSecondaire } from './SqNavSecondaire';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Navigation secondaire',
  component: SqNavSecondaire,
} satisfies Meta<typeof SqNavSecondaire>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    liens: [
        {
            texte: 'Blogue', 
            urlTo: '' 
        },
        {
            texte: 'Carrières', 
            urlTo: '' 
        },
        {
            texte: 'Centre d\'aide', 
            urlTo: '', 
            iconeDto: {
               url: 'https://aristote.soquij.qc.ca/a/media/icones/icone-question.svg',
               name: 'Icone Question'
            } 
        }
    ]
  }
};
