import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { RegisterForm } from './RegisterForm';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

storiesOf('RegisterForm', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => (
    <RegisterForm
      onPressLabel={() => {}}
      onSubmit={() => {}}
      title={'Register Form title'}
    />
  ));
