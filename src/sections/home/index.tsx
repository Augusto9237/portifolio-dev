import React from 'react';
import react, { ReactNode } from 'react';
import { Content } from './styles';

interface ContainerProps {
  children: ReactNode;
}

export function Home() {
  return (
    <Content>
      <h1>Name</h1>
    </Content>
  );
}
