import styled from 'styled-components';

export const Content = styled.section`
display: flex;
flex-direction: row;
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

`;
