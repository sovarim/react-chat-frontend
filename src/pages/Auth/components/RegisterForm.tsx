import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { css } from 'styled-components/macro';
import { TextField, Container, Icon } from 'components';
import { faUser, faAt } from '@fortawesome/free-solid-svg-icons';
import PasswordInput from './PasswordInput';

const RegisterForm: FC = () => {
  const { t } = useTranslation();
  return (
    <Container
      as="form"
      css={css`
        & > *:not(:last-child) {
          margin-bottom: 0.75rem;
        }
      `}
    >
      <TextField
        startIcon={<Icon icon={faUser} size="xs" />}
        placeholder={t('Username')}
        fullWidth
        tabIndex={-1}
      />
      <TextField
        startIcon={<Icon icon={faAt} size="xs" />}
        placeholder={t('E-mail')}
        type="email"
        fullWidth
        tabIndex={-1}
      />
      <PasswordInput placeholder={t('Password')} tabIndex={-1} />
      <PasswordInput placeholder={t('Confirm password')} tabIndex={-1} />
    </Container>
  );
};

export default RegisterForm;
