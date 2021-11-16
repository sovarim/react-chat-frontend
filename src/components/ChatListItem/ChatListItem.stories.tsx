import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChatListItem from './ChatListItem';

export default {
  title: 'Components/ChatListItem',
  component: ChatListItem,
} as ComponentMeta<typeof ChatListItem>;

const Template: ComponentStory<typeof ChatListItem> = (args) => {
  return (
    <div style={{ width: 400 }}>
      <ChatListItem {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  chatName: 'Sovarim',
  lastMessage:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem labore tempora minus repudiandae optio sunt. Cum dolorem repellendus commodi voluptatum, minima recusandae quidem quod dignissimos esse. Soluta quasi blanditiis rem.',
};
