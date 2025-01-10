import React, { FunctionComponent } from 'react';

export const metadata = {
  title: 'Login | StudentTechHub',
  description: 'Login to your account',
}

interface LoginLayoutProps {
  children: React.ReactNode;
}
 
const LoginLayout: FunctionComponent<LoginLayoutProps> = ({ children }) => {
  return ( 
  <>
    {children}
  </> 
  );
}
 
export default LoginLayout;