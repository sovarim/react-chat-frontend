import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { css } from 'styled-components/macro';
import { Container, Tabs, Tab, TabPanels, TabPanel } from 'components';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const Login: FC = () => {
  const { t, i18n } = useTranslation();
  const [acitveTabValue, setActiveTabValue] = useState<number>(0);

  const onChange = (value: number) => {
    setActiveTabValue(value);
  };

  return (
    <Container
      fullHeight
      display="flex"
      css={css`
        padding: 0.5rem;
      `}
    >
      <Container
        maxWidth={600}
        verticalCenter
        horizontalCenter
        css={css`
          border-radius: ${({ theme }) => theme.shape.borderRadius};
          box-shadow: ${({ theme }) => theme.shadows[0]};
          background: ${({ theme }) => theme.colors.background};
        `}
      >
        <Tabs value={acitveTabValue} onChange={onChange}>
          <Tab>{t('Sign in')}</Tab>
          <Tab>{t('Sign up')}</Tab>
        </Tabs>
        <TabPanels value={acitveTabValue}>
          <TabPanel>
            <LoginForm />
          </TabPanel>
          <TabPanel>
            <RegisterForm />
          </TabPanel>
        </TabPanels>
      </Container>
    </Container>
  );
};

export default Login;
