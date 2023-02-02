import { BsDiscord, BsGithub, BsLinkedin } from 'react-icons/bs';
import { SocialMediaContainer } from '../../sections/Home/styles';
import { Container } from '../Footer/styles';

export function Footer() {
  return (
    <Container>
      <div>
        <span>Copyright © Augusto Sousa · 2023</span>
      </div>

      <SocialMediaContainer>
        <BsGithub color="#FFFFFF" />
        <BsLinkedin color="#FFFFFF" />
        <BsDiscord color="#FFFFFF" />
      </SocialMediaContainer>

      <div />
    </Container>
  );
}
