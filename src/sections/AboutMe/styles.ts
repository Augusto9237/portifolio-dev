import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 60px;
`;

export const CircleImg = styled.div`
  background-color: #ffff;
  height: 460px;
  width: 460px;
  border-radius: 50%;
`;

export const AboutMeDescription = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 920px;
  gap: 24px;

  h1{
    font-weight: 800;
    font-size: 52px;
    line-height: 61px;

    color: #FFFFFF;
  }

  p {
    display: flex;
    flex-direction: column;
    text-align: justify;
    color: rgba(255, 255, 255, 0.5);
    word-break: break-all;
  }
`;
