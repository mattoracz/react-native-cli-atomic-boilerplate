import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { LoginFooter } from './LoginFooter';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

storiesOf('LoginFooter', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => <LoginFooter />);
