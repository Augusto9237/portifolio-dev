import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 460px;
    padding: 20px;
    width: 360px;
    border-radius: 16px;
    border: 1px solid rgba(123, 74, 226, 0.5);
    gap: 12px;

    strong{
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      display: flex;
      align-items: center;

      color: #FFFFFF;
    }

    span{
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;

      color: rgba(255, 255, 255, 0.5);
    }
  `;

export const SkillsContainer = styled.div`
   display: flex;
   gap: 8px;
  `;
