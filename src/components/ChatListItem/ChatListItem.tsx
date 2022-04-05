import { FC } from 'react';
import { css } from 'styled-components/macro';
import { ItemRoot, DetailContainer, LastMessage } from './ChatListItem.styles';
import { IntrinsicElementsKeys } from 'styled-components';
import Text from '../Text/Text';
import Avatar from '../Avatar/Avatar';

interface ChatListItemProps {
  chatName?: string;
  lastMessage?: string;
  isActive?: boolean;
  avatarSrc?: string;
  as?: IntrinsicElementsKeys;
  onClick?: () => void;
}

const ChatListItem: FC<ChatListItemProps> = ({
  chatName,
  lastMessage,
  isActive = false,
  avatarSrc,
  as = 'div',
  onClick,
}) => {
  return (
    <ItemRoot isActive={isActive} as={as} onClick={onClick}>
      <Avatar
        css={css`
          margin: 0 0.75rem;
          flex-shrink: 0;
        `}
        imgSrc={avatarSrc}
        alt={chatName?.[0] || ''}
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
