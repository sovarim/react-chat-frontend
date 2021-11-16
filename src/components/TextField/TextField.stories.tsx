import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextField from './TextField';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Icon } from 'components';
import { useState } from 'react';

export default {
  title: 'Components/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  return <TextField {...args} />;
};

export const Input = Template.bind({});
Input.args = {
  placeholder: 'Поиск',
  icon: <Icon icon={faSearch} size="xs" />,
};

export const Multiline = Template.bind({});
Multiline.args = {
  multiline: true,
};
