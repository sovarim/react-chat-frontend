import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextField from './TextField';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Icon } from 'components';

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
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: 'Поиск',
  startIcon: <Icon icon={faSearch} size="xs" />,
};

export const Multiline = Template.bind({});
Multiline.args = {
  multiline: true,
  rows: 1,
  minRows: 1,
  maxRows: 3,
  placeholder: 'Введите сообщение',
};
