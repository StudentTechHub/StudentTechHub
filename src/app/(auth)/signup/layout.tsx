import React, { FunctionComponent } from 'react';

export const metadata = {
  title: 'Signup | StudentTechHub',
  description: 'Signup for an account',
}

interface SignupLayoutProps {
  children: React.ReactNode;
}
 
const SignupLayout: FunctionComponent<SignupLayoutProps> = ({ children }) => {
  return ( 
  <>
    {children}
  </> 
  );
}
 
export default SignupLayout;