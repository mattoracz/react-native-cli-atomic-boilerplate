import React, { ReactNode } from 'react';
import { Pressable } from 'react-native';
import { Label } from '../Label/Label';

interface PressableLabelProps {
  children: ReactNode;
  onPress: () => void;
  testID: string;
}

export const PressableLabel: React.FC<PressableLabelProps> = props => {
  return (
    <Pressable onPress={props.onPress} testID={props.testID}>
      <Label>{props.children}</Label>
    </Pressable>
  );
};
