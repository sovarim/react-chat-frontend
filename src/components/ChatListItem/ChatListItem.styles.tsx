import styled, { css } from 'styled-components';
import Text from '../Text/Text';

interface ItemRootProps {
  isActive: boolean;
}

export const ItemRoot = styled.div<ItemRootProps>`
  display: flex;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  padding: 0.5rem 0;
  ${({ isActive, theme }) =>
    isActive &&
    css`
      background: ${theme.colors.primary.main}24;
    `}
  &:hover {
    background: ${({ theme }) => theme.colors.primary.main}24;
  }
`;

export const DetailContainer = styled.div`
  max-width: calc(100% - 82px);
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
