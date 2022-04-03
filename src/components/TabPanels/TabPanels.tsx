import React, { FC, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import TabPanel from '../TabPanel/TabPanel';

const TabPanelsRoot = styled.div`
  display: flex;
  transition: all 0.2s linear;
`;

const TabPanels: FC<{ value?: number }> = ({ value = 0, ...props }) => {
  const tabPanelsRef = useRef<HTMLDivElement>(null);

  const children = React.Children.map(props.children, (child, idx) => {
    if (idx !== value) {
      // заглушка
      return <TabPanel />;
    }
    return child;
  });

  const getChilds = () => {
    const childs = tabPanelsRef.current?.children;
    return childs || [];
  };

  const getActiveTabHeight = () => {
    return getChilds()[value].getBoundingClientRect().height;
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (tabPanelsRef.current) {
        tabPanelsRef.current.style.height = `${getActiveTabHeight()}px`;
      }
    });

    Object.values(getChilds()).forEach((elem) => {
      resizeObserver.observe(elem);
    });

    return () => resizeObserver.disconnect();
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
