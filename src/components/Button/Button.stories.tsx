import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: {
        type: 'radio',
      },
    },
    as: {
      control: null,
    },
    theme: {
      control: null,
    },
    forwardedAs: {
      control: null,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Primary.args,
  fullWidth: true,
};
