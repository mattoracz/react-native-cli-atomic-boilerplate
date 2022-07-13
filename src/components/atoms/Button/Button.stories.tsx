import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};
storiesOf('Button', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => <Button text="Primary Button" />);
