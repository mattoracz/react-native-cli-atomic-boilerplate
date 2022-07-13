import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Input } from './Input';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};
storiesOf('Input', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => <Input title="Primary Input" />);
