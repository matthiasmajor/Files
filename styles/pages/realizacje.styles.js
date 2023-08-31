import styled from "styled-components";

export const ContentWrapper = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  ${({ theme }) => theme.mq.desktop} {
    margin: 150px auto 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0px;
  }

  p {
    font-size: ${({ theme }) => theme.font.size.paragraph};
    text-align: center;
    ${({ theme }) => theme.mq.desktop} {
      text-align: center;
      max-width: 700px;
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 4.2rem;
  ${({ theme }) => theme.mq.desktop} {
    text-align: justify;
  }
`;
export const Container = styled.div`
  width: 100%;
  margin-top: 60px;
`;
