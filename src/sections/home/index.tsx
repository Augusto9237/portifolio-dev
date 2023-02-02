import React from 'react';
import react, { ReactNode } from 'react';
import { BsGithub, BsLinkedin, BsDiscord, BsWhatsapp } from 'react-icons/bs';
import AvatarAndIconsSvg from '../../assets/AvatarAndIcons.svg';
import {
  Content,
  Greetings,
  Presentation,
  SocialMediaContainer,
  AvatarContainer,
  Contacts,
  WhatsAppButton,
} from './styles';

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

        <SocialMediaContainer>
          <BsGithub color="#FFFFFF" />
          <BsLinkedin color="#FFFFFF" />
          <BsDiscord color="#FFFFFF" />
        </SocialMediaContainer>
      </Presentation>

      <AvatarContainer>
        <img src={AvatarAndIconsSvg} />
      </AvatarContainer>

      <Contacts>
        <span>Baixar CV </span>
        <WhatsAppButton>
          <BsWhatsapp /> Vamos conversar
        </WhatsAppButton>
      </Contacts>
    </Content>
  );
}
