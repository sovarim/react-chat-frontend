import { FC } from 'react';
import { css } from 'styled-components/macro';
import { ItemContainer, DetailContainer, LastMessage } from './ChatListItem.styles';
import Text from '../Text/Text';
import Avatar from '../Avatar/Avatar';

interface ChatListItemProps {
  chatName: string;
  lastMessage?: string;
}

const ChatListItem: FC<ChatListItemProps> = ({ chatName, lastMessage }) => {
  return (
    <ItemContainer>
      <Avatar
        css={css`
          margin: 0 0.75rem;
          flex-shrink: 0;
        `}
      />
      <DetailContainer>
        <Text variant="text">{chatName}</Text>
        <span
          css={css`
            display: flex;
          `}
        >
          <LastMessage>{lastMessage}</LastMessage>
        </span>
      </DetailContainer>
    </ItemContainer>
  );
};

export default ChatListItem;
