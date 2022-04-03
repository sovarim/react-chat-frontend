import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { css } from 'styled-components/macro';
import { TextField, Container, Icon, Button, Text } from 'components';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import PasswordInput from './PasswordInput';
import { useLoginMutation } from 'api/authApi';

const LoginForm: FC = () => {
  const { t } = useTranslation();
  const [login, { isLoading, isError }] = useLoginMutation();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <Container
      as="form"
      css={css`
        & > *:not(:last-of-type) {
          margin-top: 0.1rem;
          margin-bottom: 1rem;
        }
      `}
      onSubmit={handleSubmit}
    >
      {isError && (
        <Text
          variant="caption"
          css={css`
            color: ${({ theme }) => theme.colors.error};
            margin-bottom: 0.5rem;
          `}
        >
          {t('dd')}
        </Text>
      )}
      <TextField
        fullWidth
        name="username"
        startIcon={<Icon icon={faUser} size="xs" />}
        placeholder={t('Username')}
        value={formData.username}
        onChange={handleChange}
      />
      <PasswordInput
        name="password"
        placeholder={t('Password')}
        value={formData.password}
        onChange={handleChange}
      />
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
        `}
      >
        <Button disabled={isLoading} type="submit">
          {t('Login')}
        </Button>
      </div>
    </Container>
  );
};

export default LoginForm;
