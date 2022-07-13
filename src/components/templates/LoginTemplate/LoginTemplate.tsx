import React from 'react';

import { LoginForm, LoginFooter, LoginHeader } from '../../organisms';

interface LoginTemplateProps {
  onSubmitForm: () => void;
  title: string;
}

export const LoginTemplate: React.FC<LoginTemplateProps> = props => {
  return (
    <>
      <LoginHeader>{props.title}</LoginHeader>
      <LoginForm title={props.title} onSubmit={props.onSubmitForm} />
      <LoginFooter />
    </>
  );
};
