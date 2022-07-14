import React, { ReactNode } from 'react';
import { Pressable } from 'react-native';
import { Label } from '../Label/Label';

interface PressableLabelProps {
  children: ReactNode;
  onPress: () => void;
}

export const PressableLabel: React.FC<PressableLabelProps> = props => {
  return (
    <Pressable onPress={props.onPress} testID="pressable-label">
      <Label>{props.children}</Label>
    </Pressable>
  );
};
