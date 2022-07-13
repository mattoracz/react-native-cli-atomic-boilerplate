import React from 'react';

import { Header } from '../../molecules';
import { LoginForm } from '../../organisms';

interface LoginTemplateProps {
  onSubmitForm: () => void;
  title: string;
}

export const LoginTemplate: React.FC<LoginTemplateProps> = props => {
  return (
    <>
      <Header>{props.title}</Header>
      <LoginForm title={props.title} onSubmit={props.onSubmitForm} />
    </>
  );
};
