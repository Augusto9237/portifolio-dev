import { BsDiscord, BsGithub, BsLinkedin } from 'react-icons/bs';
import { Container } from '../Footer/styles';

export function Footer() {
  return (
    <Container>
      <div>
        <span>Copyright © Augusto Sousa · 2023</span>
      </div>
      <div>
        <BsGithub color="#FFFFFF" />
        <BsLinkedin color="#FFFFFF" />
        <BsDiscord color="#FFFFFF" />
      </div>
      <div />
    </Container>
  );
}
