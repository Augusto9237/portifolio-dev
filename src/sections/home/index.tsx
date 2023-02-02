import React from 'react';
import react, { ReactNode } from 'react';
import { Content, Greetings, Presentation } from './styles';

interface ContainerProps {
  children: ReactNode;
}

export function Home() {
  return (
    <Content>
      <Presentation>
        <Greetings>
          <strong>👋 Saudações!</strong>
        </Greetings>

        <h1>your name,dev</h1>

        <span>Front-end developer · UI designer</span>
      </Presentation>
    </Content>
  );
}
