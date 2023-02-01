import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: row;
background: rgba(123, 74, 226, 0.05);
border-radius: 16px;
justify-content: space-between;
align-items: center;
padding: 12px;
`;

export const LogoImg = styled.img`
 display: flex;
`;

export const Sections = styled.div`
  display: flex;
  gap: 16px;

  a{
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
`;
