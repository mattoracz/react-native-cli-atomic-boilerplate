import React from 'react';

import { Button } from '../../atoms';
import { Input } from '../../molecules';

interface LoginFormProps {
  onSubmit: () => void;
  title: string;
}

export const LoginForm: React.FC<LoginFormProps> = props => {
  return (
    <>
      <Input label="Email" keyboardType="email-address" />
      <Input label="Password" secureTextEntry />
      <Button onPress={props.onSubmit} text="Go To Profile" />
    </>
  );
};
