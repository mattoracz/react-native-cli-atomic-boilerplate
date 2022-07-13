import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { LoginHeader } from './LoginHeader';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

storiesOf('LoginHeader', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => <LoginHeader>Login Header Title</LoginHeader>);
