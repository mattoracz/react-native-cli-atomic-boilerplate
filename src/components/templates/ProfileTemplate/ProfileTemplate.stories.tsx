import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ProfileTemplate } from './ProfileTemplate';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

storiesOf('ProfileTemplate', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => (
    <ProfileTemplate title={'Profile title'} onClickLogoutLabel={() => {}} />
  ));
