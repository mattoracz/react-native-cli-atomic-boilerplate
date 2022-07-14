import React from 'react';

import { Footer, HeaderBox } from '../../organisms';
import { RegisterForm } from '../../organisms/RegisterForm/RegisterForm';

interface RegisterTemplateProps {
  onSubmitForm: () => void;
  onPressLabel: () => void;
  title: string;
}

export const RegisterTemplate: React.FC<RegisterTemplateProps> = props => (
  <>
    <HeaderBox>{props.title}</HeaderBox>
    <RegisterForm
      title={props.title}
      onSubmit={props.onSubmitForm}
      onPressLabel={props.onPressLabel}
    />
    <Footer />
  </>
);
