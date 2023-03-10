import React from 'react';
import react, { ReactNode } from 'react';
import { Greetings } from '../../sections/Home/styles';
import { Container, ImageCard, SkillsContainer } from '../WorkCard/styles';

interface ContainerProps {
  children: ReactNode;
}

export function WorkCard() {
  return (
    <Container>
      <strong>MOVE.IT</strong>
      <span>
        Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de
        Pomodoro com exercícios.
      </span>
      <SkillsContainer>
        <Greetings>React JS</Greetings>
        <Greetings>Typescript</Greetings>
      </SkillsContainer>

      <ImageCard>
        <img src="https://topfreewares.b-cdn.net/wp-content/uploads/2019/04/pomotroid.jpg" />
      </ImageCard>
    </Container>
  );
}
