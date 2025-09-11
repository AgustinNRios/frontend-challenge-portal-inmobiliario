// import type { Preview } from '@storybook/nextjs-vite'

const preview: any = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;