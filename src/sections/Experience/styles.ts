import styled from 'styled-components';

export const Content = styled.section`
display: flex;
flex-direction: row;
justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid rgba(123, 74, 226, 0.5);
  border-radius: 16px;
  color: #FFFFFF;
  align-items: center;
  gap: 8px;

  strong{
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
  }
`;
