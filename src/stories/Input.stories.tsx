import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../components';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Some label',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Some label',
  color: 'secondary',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Some label',
  error: true,
  errorText: 'Error',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Primary.args,
  fullWidth: true,
};
