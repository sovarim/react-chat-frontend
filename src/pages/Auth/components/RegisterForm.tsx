import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { css } from 'styled-components/macro';
import { TextField, Container, Icon, Button } from 'components';
import { faUser, faAt } from '@fortawesome/free-solid-svg-icons';
import PasswordInput from './PasswordInput';
import { useFormik } from 'formik';
import { useValidationSchema } from 'hooks';

interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: FC = () => {
  const { t } = useTranslation();
  const validationSchema = useValidationSchema('register');

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } =
    useFormik<FormValues>({
      initialValues: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      validationSchema,
      onSubmit: () => {
        console.log('');
      },
    });

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
      <TextField
        name="username"
        startIcon={<Icon icon={faUser} size="xs" />}
        placeholder={t('Username')}
        fullWidth
        value={values.username}
        onChange={handleChange}
        error={!!errors.username && !!touched.username}
        errorText={(touched.username && errors.username) || ''}
        onBlur={handleBlur}
      />
      <TextField
        name="email"
        startIcon={<Icon icon={faAt} size="xs" />}
        placeholder={t('E-mail')}
        type="email"
        fullWidth
        value={values.email}
        onChange={handleChange}
        error={!!errors.email && !!touched.email}
        errorText={(touched.email && errors.email) || ''}
        onBlur={handleBlur}
      />
      <PasswordInput
        name="password"
        placeholder={t('Password')}
        value={values.password}
        onChange={handleChange}
        error={!!errors.password && !!touched.password}
        errorText={(touched.password && errors.password) || ''}
        onBlur={handleBlur}
      />
      <PasswordInput
        name="confirmPassword"
        placeholder={t('Confirm password')}
        value={values.confirmPassword}
        onChange={handleChange}
        error={!!errors.confirmPassword && !!touched.confirmPassword}
        errorText={(touched.confirmPassword && errors.confirmPassword) || ''}
        onBlur={handleBlur}
      />
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
        `}
      >
        <Button type="submit">{t('Registration')}</Button>
      </div>
    </Container>
  );
};

export default RegisterForm;
