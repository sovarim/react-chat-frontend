import { css } from 'styled-components/macro';
import { TextField, Container, Icon } from 'components';
import { faUser, faAt } from '@fortawesome/free-solid-svg-icons';
import PasswordInput from './PasswordInput';

const RegisterForm = () => {
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
      <TextField
        startIcon={<Icon icon={faAt} size="xs" />}
        placeholder="E-mail"
        type="email"
        fullWidth
      />
      <PasswordInput placeholder="Пароль" />
      <PasswordInput placeholder="Подтвердите пароль" />
    </Container>
  );
};

export default RegisterForm;
