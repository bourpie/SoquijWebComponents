import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'UI SOQUIJ',
  brandUrl: '/',
  brandImage: 'https://aristote.soquij.qc.ca/a/media/logos/sqj-headerlogo.svg',
  brandTarget: '_self',

//
colorPrimary: '#3A10E5',
colorSecondary: '#585C6D',

// UI
appBg: '#ffffff',
appContentBg: '#ffffff',
appBorderColor: '#d9dbe2',
appBorderRadius: 4,

// Text colors
textColor: '#10162F',
textInverseColor: '#ffffff',

// Toolbar default and active colors
barTextColor: '#9E9E9E',
barSelectedColor: '#585C6D',
barBg: '#ffffff',

// Form colors
inputBg: '#ffffff',
inputBorder: '#10162F',
inputTextColor: '#10162F',
inputBorderRadius: 2,

});