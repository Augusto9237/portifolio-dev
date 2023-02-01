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
        <a>Home</a>
        <a>Sobre mim</a>
        <a>Portfólio</a>
        <a>Skills</a>
        <a>Contato</a>
      </Sections>
    </Container>
  );
}
