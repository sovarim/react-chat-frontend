import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Text, Icon, Input, Button } from '.';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface IFormValues {
  username: string;
  password: string;
}

const Form = styled.form`
  width: 100%;
  text-align: center;
  & > * {
    margin: 0 auto;
  }
`;

const StyledInput = styled(Input)`
  margin: 1rem 0 1rem 0;
`;

const initialValues: IFormValues = {
  username: '',
  password: '',
};

const LoginForm: FC = () => {
  const { t } = useTranslation();
  const validationSchema = Yup.object().shape({
    username: Yup.string().required(t('required field')),
    password: Yup.string().required(t('required field')),
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => console.log(values),
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Icon icon={faSignInAlt} size="3x" display="block" />
      <Text as="h1" variant="h2">
        {t('Sign in')}
      </Text>
      <StyledInput
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        id="username"
        name="username"
        label={t('Username')}
        error={!!errors.username && !!touched.username}
        errorText={touched.username && errors.username}
        fullWidth
      />
      <StyledInput
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        name="password"
        label={t('Password')}
        error={!!errors.password && !!touched.password}
        errorText={touched.password && errors.password}
        fullWidth
      />
      <Button type="submit" fullWidth>
        {t('Login')}
      </Button>
    </Form>
  );
};

export default LoginForm;
