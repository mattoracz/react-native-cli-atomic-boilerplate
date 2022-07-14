import React from 'react';
import { View } from 'react-native';

import { Button, Label, PressableLabel } from '../../atoms';
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
      <Input label="Full Name" />
      <Input label="Email" keyboardType="email-address" />
      <Input label="Password" secureTextEntry />
      <Button onPress={props.onSubmit} text="Sign up" />
      <PressableLabel onPress={props.onPressLabel}>
        Have an account? Sign in
      </PressableLabel>
    </View>
  );
};
