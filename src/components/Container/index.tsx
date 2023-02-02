import React from 'react';
import react, { ReactNode } from 'react';
import { Content, Footer } from '../Container/styles';

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <Content>
      {children}
      <Footer>
        
      </Footer>
    </Content>
  );
}
