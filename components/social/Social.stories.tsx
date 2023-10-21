import { Social } from './Social';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Social',
  component: Social,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WithAllSocials = {
  args: {
    twitter: 'AaronAsAChimp',
    github: 'AaronAsAChimp',
    stackoverflow: '1141784/aaronasachimp'
  },
};