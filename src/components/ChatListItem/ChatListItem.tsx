import { FC } from 'react';
import { css } from 'styled-components/macro';
import { ItemRoot, DetailContainer, LastMessage } from './ChatListItem.styles';
import Text from '../Text/Text';
import Avatar from '../Avatar/Avatar';

interface ChatListItemProps {
  chatName: string;
  lastMessage?: string;
  isActive?: boolean;
}

const ChatListItem: FC<ChatListItemProps> = ({ chatName, lastMessage, isActive = false }) => {
  return (
    <ItemRoot isActive={isActive}>
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
    </ItemRoot>
  );
};

export default ChatListItem;
