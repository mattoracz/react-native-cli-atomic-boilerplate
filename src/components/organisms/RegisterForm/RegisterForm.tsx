import React from 'react';
import { View } from 'react-native';

import { Button, PressableLabel } from '../../atoms';
import { Input } from '../../molecules';
import { styles } from './RegisterForm.style';

interface RegisterFormProps {
  onSubmit: () => void;
  onPressLabel: () => void;
  title: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = props => {
  return (
    <View style={styles.container}>
      <Input label="Full Name" testID="name-input" />
      <Input label="Email" keyboardType="email-address" testID="email-input" />
      <Input label="Password" secureTextEntry testID="password-input" />
      <Button onPress={props.onSubmit} text="Sign up" testID="submit-button" />
      <PressableLabel onPress={props.onPressLabel} testID="login-label">
        Have an account? Sign in
      </PressableLabel>
    </View>
  );
};
