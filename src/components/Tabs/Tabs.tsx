import React, { FC } from 'react';
import styled, { css } from 'styled-components/macro';

interface TabsProps {
  className?: string;
  value?: number;
  onChange?: (value: number) => void;
}

const TabsRoot = styled.div<{ length: number }>`
  display: flex;
  justify-content: center;
  position: relative;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::after {
    content: '';
    position: absolute;
    height: 0.125rem;
    width: ${({ length }) => 100 / length}%;
    bottom: 0;
    left: 0;
    transition: all 0.3s ease-out;
    background: ${({ theme }) => theme.colors.primary.main};
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tabs: FC<TabsProps> = ({ className, value = 0, onChange, ...props }) => {
  const getChildrenLength = () => {
    let childrenLength = 0;
    if (Array.isArray(props.children)) {
      childrenLength = props.children.length;
    }
    return childrenLength;
  };

  const children = React.Children.map(props.children, (child, idx) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        onClick: onChange?.bind(null, idx),
      });
    }
    return child;
  });

  return (
    <TabsRoot
      className={className}
      css={css`
        &::after {
          transform: ${`translateX(${value * 100}%)`};
        }
      `}
      length={getChildrenLength()}
    >
      {children}
    </TabsRoot>
  );
};

export default Tabs;
