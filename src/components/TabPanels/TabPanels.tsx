import { FC, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';

const TabPanelsRoot = styled.div`
  display: flex;
  transition: all 0.2s linear;
`;

const TabPanels: FC<{ value?: number }> = ({ children, value = 0 }) => {
  const tabPanelsRef = useRef<HTMLDivElement>(null);

  const getActiveTabHeight = () => {
    const childElems = tabPanelsRef.current?.children;
    if (childElems) {
      return childElems[value].getBoundingClientRect().height;
    }
    return 0;
  };

  useEffect(() => {
    if (tabPanelsRef.current) {
      tabPanelsRef.current.style.height = `${getActiveTabHeight()}px`;
    }
  }, [value]);

  return (
    <TabPanelsRoot
      ref={tabPanelsRef}
      css={css`
        transform: ${`translateX(${-value * 100}%)`};
      `}
    >
      {children}
    </TabPanelsRoot>
  );
};

export default TabPanels;
