import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { LoginForm } from './LoginForm';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

storiesOf('LoginForm', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => (
    <LoginForm onSubmit={() => {}} title={'Login Form title'} />
  ));
