import styled, { css } from 'styled-components';
import Text from '../Text/Text';

interface ItemRootProps {
  isActive: boolean;
}

export const ItemRoot = styled.div<ItemRootProps>`
  display: flex;
  overflow: hidden;
  cursor: pointer;
  transition: all .1s ease-in-out;
  padding: 0.5rem 0;
  border: none;
  text-align: left;
  background-color: transparent;
  width: 100%;
  user-select: none;
  touch-action: none;
  ${({ isActive, theme }) =>
    isActive &&
    css`
      background: ${theme.colors.primary.main}24 !important;
    `}

  }
  @media (hover) {
    &:hover {
    background: rgba(8, 8, 8, 0.027);
  }
  
}
`;

export const DetailContainer = styled.div`
  max-width: calc(100% - 82px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LastMessage = styled(({ children, ...props }) => (
  <Text variant="text2" as="span" light {...props}>
    {children}
  </Text>
))`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  padding-top: 0.25rem;
`;
