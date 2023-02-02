import styled from 'styled-components';

export const Content = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 20px 0px;
`;

export const Greetings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(123, 74, 226, 0.1);
  border-radius: 16px;
  max-width: 180px;
  padding: 12px;
  font-weight: 700;
  font-size: 20px;
  color: #7B4AE2;
`;

export const Presentation = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  h1{
    font-weight: 800;
    font-size: 52px;
    line-height: 61px;

    color: #FFFFFF;
  }

  span{
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const SocialMediaContainer = styled.div`
 display: flex;
 justify-content: space-between;
 max-width: 130px;
 gap: 16px;
`;

export const AvatarContainer = styled.main`
 display: flex;
 flex: 1;
 width: 100%;
 justify-content:center;
`;

export const Contacts = styled.div`
 display: flex;
 width: 30%;
 flex-direction: column;
 justify-content: center;
 align-items: flex-end;
 color: rgba(123, 74, 226, 0.5);
 a{
   padding: 14px;
 }
`;

export const WhatsAppButton = styled.button`
display: flex;
max-width: 180px;
background: transparent;
border: 1px solid rgba(123, 74, 226, 0.5);
border-radius: 16px;
color: rgba(123, 74, 226, 0.5);
padding: 14px;
gap: 12px
`;
