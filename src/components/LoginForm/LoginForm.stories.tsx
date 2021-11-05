import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginForm from './LoginForm';

export default {
  title: 'Forms/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

export const Template: ComponentStory<typeof LoginForm> = () => (
  <div style={{ maxWidth: 400, margin: 'auto' }}>
    <LoginForm />
  </div>
);
Template.storyName = 'Login Form';
