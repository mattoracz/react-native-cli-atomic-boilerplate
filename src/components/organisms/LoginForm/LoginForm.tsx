import React from 'react';
import { View } from 'react-native';

import { Button, PressableLabel } from '../../atoms';
import { Input } from '../../molecules';
import { styles } from './LoginForm.style';

interface LoginFormProps {
  onSubmit: () => void;
  onClickLabel: () => void;
  title: string;
}

export const LoginForm: React.FC<LoginFormProps> = props => {
  return (
    <View style={styles.container}>
      <Input label="Email" keyboardType="email-address" testID="email-input" />
      <Input label="Password" secureTextEntry testID="password-input" />
      <Button onPress={props.onSubmit} text="Sign in" testID="submit-input" />
      <PressableLabel onPress={props.onClickLabel} testID="registration-label">
        Don't have an account? Sign up
      </PressableLabel>
    </View>
  );
};
