import { FC } from 'react';
import styled from 'styled-components';

const TabsRoot = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    height: 0.125rem;
    width: 50%;
    bottom: 0;
    left: 0;
    transition: all 0.3s ease-out;
    background: ${({ theme }) => theme.colors.primary.main};
  }
`;

const Tabs: FC<{ className?: string }> = ({ children, className }) => {
  return <TabsRoot className={className}>{children}</TabsRoot>;
};

export default Tabs;
