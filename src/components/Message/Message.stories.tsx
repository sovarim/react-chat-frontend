import { ComponentStory, ComponentMeta } from '@storybook/react';
import Message from './Message';
import { css } from 'styled-components/macro';

export default {
  title: 'Components/Message',
  component: Message,
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => {
  return (
    <div
      css={css`
        padding: 1rem;
        background: #fff;
        width: 100%;
        max-width: 600px;
        border-radius: 0.25rem;
        box-shadow: -2px 4px 8px 0px rgba(34, 60, 80, 0.2);
        margin-bottom: 2rem;
      `}
    >
      <Message {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Как ты?',
  isMe: true,
};
