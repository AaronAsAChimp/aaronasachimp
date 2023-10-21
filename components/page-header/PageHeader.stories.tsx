import { PageHeader } from './PageHeader';

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    nextjs: {
      pagesDirectory: true
    }
  },
};

export const BasicHeader = {
};
