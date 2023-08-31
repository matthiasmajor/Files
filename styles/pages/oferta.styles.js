import styled from "styled-components";

export const ContentWrapper = styled.section`
  margin-top: 100px;
  padding: 20px;
  ${({ theme }) => theme.mq.desktop} {
    width: 1160px;
    display: Flex;
    flex-direction: column;
    align-items: center;
    margin: 100px auto 20px auto;
  }
`;
export const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ImageSection = styled.div`
  margin-top: 30px;
  ${({ theme }) => theme.mq.desktop} {
    margin-top: 30px;
    max-width: 1160px;
    display: flex;
    overflow-y: hidden;
    overflow-x: hidden;
    gap: 40px;
  }
`;
