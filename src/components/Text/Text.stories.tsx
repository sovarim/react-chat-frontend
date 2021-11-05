import React, { FC } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text, { TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    theme: {
      type: null,
    },
    as: {
      type: null,
    },
    forwardedAs: {
      type: null,
    },
  },
} as ComponentMeta<typeof Text>;

interface TemplateProps extends TextProps {
  children?: React.ReactNode | React.ReactElement;
}

const Template: ComponentStory<FC<TemplateProps>> = ({ ...args }) => (
  <Text {...args}>{args.children}</Text>
);

export const Head1 = Template.bind({});
Head1.args = {
  children: 'Head 1',
  variant: 'h1',
};

export const Head2 = Template.bind({});
Head2.args = {
  children: 'Head 2',
  variant: 'h2',
};

export const Head3 = Template.bind({});
Head3.args = {
  children: 'Head 3',
  variant: 'h3',
};

export const Text1 = Template.bind({});
Text1.args = {
  children: 'Text 1',
};

export const Text2 = Template.bind({});
Text2.args = {
  children: 'Text 2',
  variant: 'text2',
};
