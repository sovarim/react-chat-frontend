import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  imgSrc:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.5SD070ggX2o9ZBwo7KXc5wHaE7%26pid%3DApi&f=1',
};

export const Small = Template.bind({});
Small.args = {
  isSmall: true,
  imgSrc:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.5SD070ggX2o9ZBwo7KXc5wHaE7%26pid%3DApi&f=1',
};
