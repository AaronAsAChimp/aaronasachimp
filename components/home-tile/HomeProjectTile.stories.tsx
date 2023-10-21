import { HomeProjectTile } from './HomeProjectTile';

export default {
  title: 'Components/HomeProjectTile',
  component: HomeProjectTile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const SampleProject = {
  args: {
    title: 'This is an project name',
    blurb: 'This is a pretty neat project. I wrote soem code for it.',
    href: 'https://example.com'
  },
};
