import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

type schemaTypes = {
  register: any;
};

type Type = (type: keyof schemaTypes) => any;

const useValidationSchema: Type = (type) => {
  const { t } = useTranslation();

  const RegisterValidatoinSchema = Yup.object().shape({
    username: Yup.string().required(t('Required field')).min(3, t('Minimum of 3 characters')),
    email: Yup.string().required(t('Required field')).email(t('Enter the correct email address')),
    password: Yup.string()
      .required(t('Required field'))
      .min(8, t('The password must contain at least 8 characters')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], t('Passwords must match'))
      .required(t('Confirm your password')),
  });

  const schemas: schemaTypes = {
    register: RegisterValidatoinSchema,
  };

  return schemas[type];
};

export default useValidationSchema;
