import React from 'react';

import { LoginFooter, LoginHeader } from '../../organisms';
import { RegisterForm } from '../../organisms/RegisterForm/RegisterForm';

interface RegisterTemplateProps {
  onSubmitForm: () => void;
  onPressLabel: () => void;
  title: string;
}

export const RegisterTemplate: React.FC<RegisterTemplateProps> = props => (
  <>
    <LoginHeader>{props.title}</LoginHeader>
    <RegisterForm
      title={props.title}
      onSubmit={props.onSubmitForm}
      onPressLabel={props.onPressLabel}
    />
    <LoginFooter />
  </>
);
