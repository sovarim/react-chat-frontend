import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { css } from 'styled-components/macro';
import { TextField, Container, Icon, Button } from 'components';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import PasswordInput from './PasswordInput';

const LoginForm: FC = () => {
  const { t } = useTranslation();
  return (
    <Container
      as="form"
      css={css`
        & > *:not(:last-of-type) {
          margin-top: 0.1rem;
          margin-bottom: 1rem;
        }
      `}
    >
      <TextField
        startIcon={<Icon icon={faUser} size="xs" />}
        placeholder={t('Username')}
        fullWidth
      />
      <PasswordInput placeholder={t('Password')} />
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
        `}
      >
        <Button type="submit">{t('Login')}</Button>
      </div>
    </Container>
  );
};

export default LoginForm;
