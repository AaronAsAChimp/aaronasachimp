import { HomeArticleTile } from './HomeArticleTile';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/HomeArticleTile',
  component: HomeArticleTile,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SampleArticle = {
  args: {
    title: 'This is an article title',
    blurb: 'In a world where articles exist this will navigate you to one.',
    href: '/articles/an-article'
  },
};
