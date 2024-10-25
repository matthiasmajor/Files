import React from "react";
import Marcel from "../images/portfolio.jpg";
import { HighlightedHeading } from "../components/HighlightedHeading/HighlightedHeading";
import {
  ContentWrapper,
  Container,
  Left,
  LeftWrapper,
  Right,
  Title,
  Caption,
  Image,
  Description,
} from "../styles/pages/portfolio.styles";
import { TitleWrappper } from "./index";
import styled from "styled-components";

export const Ball = styled.span`
  ${({ theme }) => theme.mq.desktop} {
    content: "";
    position: absolute;
    top: 340px;
    left: 200px;
    width: 300px;
    height: 300px;
    border-radius: 400px;
    background: black;
    z-index: -1;
    filter: blur(400px);
  }
`;

const Portfolio = () => {
  return (
    <ContentWrapper>
      <Ball />
      <TitleWrappper>
        <HighlightedHeading width="47" isRight>
          Kilka słów o mnie..
        </HighlightedHeading>
      </TitleWrappper>

      <Container
        position="bottomRight"
        size="100px"
        distance="50px"
        color="dark"
      >
        <Left>
          <LeftWrapper>
            <Title
              position="topLeft"
              size="100px"
              distance="50px"
              color="beige"
            >
              Praca z klientem to moja pasja.
            </Title>
            <Caption>
              Nieruchomościami zajmuję sie od 5 lat. Przez ten czas zdążyłem
              poznać potrzeby klientów, na tyle, aby biegle poruszać się w
              branży. Wybierając współpracę ze mną masz gwaranację, że
              dostaniesz to czego oczekujesz. Dokładam wszelkich starań, aby moi
              klienci byli zawsze zadowoleni, a jeśli nie staram sie zrobić
              wszystko by ich zadowolić.
            </Caption>
          </LeftWrapper>
          <LeftWrapper>
            <Title position="" size="" distance="" color="">
              Doświadczenie.
            </Title>
            <Caption>
              Pracowałem już z wieloma klientami indywidualnymi, ale też byłem
              współtwórcą Adaniel Nieruchomości. Sprzedawałem już działki i
              domy, ale też mieszkania deweloperskie od Murapolu. Posiadam
              niezbędną wiedzę do przeprowadzenia każdej transakcji.
            </Caption>
          </LeftWrapper>
        </Left>
        <Right>
          <Image src={Marcel} alt="sd" />
        </Right>
      </Container>
    </ContentWrapper>
  );
};
export default Portfolio;
