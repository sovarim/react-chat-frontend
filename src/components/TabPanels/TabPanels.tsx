import { FC, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';

const TabPanelsRoot = styled.div`
  display: flex;
  transition: all 0.2s linear;
`;

const TabPanels: FC<{ value?: number }> = ({ children, value = 0 }) => {
  const tabPanelsRef = useRef<HTMLDivElement>(null);

  const getChilds = () => {
    const childs = tabPanelsRef.current?.children;
    return childs || [];
  };

  const getActiveTabHeight = () => {
    return getChilds()[value].getBoundingClientRect().height;
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (tabPanelsRef.current) {
        tabPanelsRef.current.style.height = `${entries[0].target.getBoundingClientRect().height}px`;
      }
    });

    resizeObserver.observe(getChilds()[0]);

    return () => resizeObserver.disconnect();
  }, []);

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
