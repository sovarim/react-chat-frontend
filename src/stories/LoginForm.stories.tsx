import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginForm } from '../components';

export default {
  title: 'Forms/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

export const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;
Template.storyName = 'Login Form';
