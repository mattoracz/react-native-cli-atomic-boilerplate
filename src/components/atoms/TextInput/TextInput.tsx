import React from 'react';
import {
  KeyboardTypeOptions,
  TextInput as ReactNativeTextInput,
} from 'react-native';
import { styles } from './TextInput.style';

interface TextInputProps {
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

export const TextInput: React.FC<TextInputProps> = props => {
  return (
    <ReactNativeTextInput
      style={styles.input}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
      secureTextEntry={props.secureTextEntry}
      testID="input"
    />
  );
};
