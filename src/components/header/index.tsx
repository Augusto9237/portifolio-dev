import React from 'react';
import react, { ReactNode } from 'react';
import { Container, LogoImg, Sections } from './styles';
import LogoSvg from '../../assets/logo.svg';

interface HeaderProps {
  children: ReactNode;
}

export function Header() {
  return (
    <Container>
      <LogoImg src={LogoSvg} />
      <Sections>
        <span>Home</span>
      </Sections>
    </Container>
  );
}
