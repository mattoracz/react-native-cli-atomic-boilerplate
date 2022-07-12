import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './Button.style';

interface ButtonProps {
  onPress: () => void;
  text: string;
}

export const Button: React.FC<ButtonProps> = props => {
  return (
    <Pressable onPress={props.onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </Pressable>
  );
};

Button.defaultProps = {
  onPress: () => {},
  text: 'Button Text',
};
