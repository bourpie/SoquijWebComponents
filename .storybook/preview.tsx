import type { Preview } from "@storybook/react";
import * as DocBlock from "@storybook/blocks";
import * as React from "react";

import '../src/Styles/globals.scss'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Introduction', 'Couleurs']
      },
    },
    docs: {
      page: () => (
        <>
          <DocBlock.Title />
          <DocBlock.Description />
          <DocBlock.Primary />
          <DocBlock.Controls />
          <DocBlock.Stories />
        </>
      ),
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
