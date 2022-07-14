import React from 'react';

import { LoginForm, Footer, HeaderBox } from '../../organisms';

interface LoginTemplateProps {
  onSubmitForm: () => void;
  onClickLabel: () => void;
  title: string;
}

export const LoginTemplate: React.FC<LoginTemplateProps> = props => {
  return (
    <>
      <HeaderBox>{props.title}</HeaderBox>
      <LoginForm
        title={props.title}
        onSubmit={props.onSubmitForm}
        onClickLabel={props.onClickLabel}
      />
      <Footer />
    </>
  );
};
