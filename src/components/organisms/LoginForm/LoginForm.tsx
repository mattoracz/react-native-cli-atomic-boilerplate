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
      <Input label="Email" keyboardType="email-address" />
      <Input label="Password" secureTextEntry />
      <Button onPress={props.onSubmit} text="Sign in" />
      <PressableLabel onPress={props.onClickLabel}>
        Don't have an account? Sign up
      </PressableLabel>
    </View>
  );
};
