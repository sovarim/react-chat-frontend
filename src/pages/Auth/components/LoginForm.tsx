import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { css } from 'styled-components/macro';
import { TextField, Container, Icon } from 'components';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import PasswordInput from './PasswordInput';

const LoginForm: FC = () => {
  const { t } = useTranslation();
  return (
    <Container
      as="form"
      css={css`
        & > * {
          margin-top: 0.1rem;
          margin-bottom: 1rem;
        }
      `}
    >
      <TextField
        startIcon={<Icon icon={faUser} size="xs" />}
        placeholder={t('Username')}
        fullWidth
        tabIndex={-1}
      />
      <PasswordInput placeholder={t('Password')} tabIndex={-1} />
    </Container>
  );
};

export default LoginForm;
