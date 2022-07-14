import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { LogoutBox } from './LogoutBox';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

storiesOf('LogoutBox', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => (
    <LogoutBox onPressLogout={() => {}}>Logout Box Title</LogoutBox>
  ));
