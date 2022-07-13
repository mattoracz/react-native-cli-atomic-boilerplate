import React from 'react';
import { KeyboardTypeOptions, TextInput } from 'react-native';
import { styles } from './Input.style';

interface InputProps {
  title: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

export const Input: React.FC<InputProps> = props => {
  return (
    <TextInput
      style={styles.inputContainer}
      placeholder={props.title}
      keyboardType={props.keyboardType}
      secureTextEntry={props.secureTextEntry}
      testID="input"
    />
  );
};

Input.defaultProps = {
  title: 'Input Title',
};
