import { FC } from 'react';
import { css } from 'styled-components/macro';
import { TextField, Container, Icon } from 'components';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import PasswordInput from './PasswordInput';

const LoginForm: FC = () => {
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
        placeholder="Имя пользователя"
        fullWidth
      />
      <PasswordInput placeholder="Пароль" />
    </Container>
  );
};

export default LoginForm;
