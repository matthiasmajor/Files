import styled from "styled-components";
import { motion } from "framer-motion";

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
  gap-x: 1px;
  justify-content: center;
  flex-wrap: wrap;
`;
export const ImageSection = styled(motion.div)`
  min-height: 400px;
  margin-top: 30px;
  ${({ theme }) => theme.mq.desktop} {
    margin-top: 30px;
    max-width: 1160px;
    display: flex;
    overflow-y: hidden;
    overflow-x: hidden;
    gap: 40px;
    flex-wrap: wrap;
  }
`;
