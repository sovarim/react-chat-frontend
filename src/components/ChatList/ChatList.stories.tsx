import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChatList from './ChatList';
import ChatListItem from '../ChatListItem/ChatListItem';

export default {
  title: 'Components/ChatList',
  component: ChatList,
} as ComponentMeta<typeof ChatList>;

const chats = [
  {
    chatName: 'Sovarim',
    lastMessage: 'Ты где?',
  },
  {
    chatName: 'Ivarim',
    lastMessage:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem labore tempora minus repudiandae optio sunt. Cum dolorem repellendus commodi voluptatum, minima recusandae quidem quod dignissimos esse. Soluta quasi blanditiis rem.',
  },
  {
    chatName: 'Петр Петрович',
    lastMessage: 'Как ты?',
    isActive: true,
  },
  {
    chatName: 'Sovarim',
    lastMessage: 'Ты где?',
  },
  {
    chatName: 'Sovarim',
    lastMessage: 'Ты где?',
  },
  {
    chatName: 'Ivarim',
    lastMessage:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem labore tempora minus repudiandae optio sunt. Cum dolorem repellendus commodi voluptatum, minima recusandae quidem quod dignissimos esse. Soluta quasi blanditiis rem.',
  },
  {
    chatName: 'Петр Петрович',
    lastMessage: 'Как ты?',
  },
];

const Template: ComponentStory<typeof ChatList> = () => {
  return (
    <div style={{ maxWidth: 400, background: '#fff', overflow: 'hidden', height: '100%' }}>
      <ChatList>
        {chats.map((props, idx) => (
          <ChatListItem key={idx} {...props} />
        ))}
      </ChatList>
    </div>
  );
};

export const Default = Template.bind({});
