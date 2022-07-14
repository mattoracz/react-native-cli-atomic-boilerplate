import React from 'react';

import { StackNativeScreenProps } from '../../App';
import { LoginTemplate } from '../../components/templates';

type LoginScreenProps = StackNativeScreenProps<'LoginScreen'>;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const onSubmitLoginForm = () => {
    navigation.navigate('ProfileScreen', {
      id: 0,
      firstName: 'Jon',
      lastName: 'Doe',
    });
  };

  const onClickLabel = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <LoginTemplate
      title="Sign in to your account"
      onSubmitForm={onSubmitLoginForm}
      onClickLabel={onClickLabel}
    />
  );
};

export default LoginScreen;
