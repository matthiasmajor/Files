import React from "react";
import { Caption } from "../styles/pages/portfolio.styles";
import { ContactForm } from "../components/ContactForm/ContactForm";
import image from "../images/HousesPhotos/apartment1.jpg";
import mobile from "../assets/icons/mobile.svg";
import { HighlightedHeading } from "../components/HighlightedHeading/HighlightedHeading";
import {
  ContentWrapper,
  Container,
  Left,
  Right,
  Image,
  ContactFormWrapper,
} from "../styles/pages/kontakt.styles";

const Kontakt = () => {
  return (
    <ContentWrapper>
      <Container>
        <Left>
          <HighlightedHeading width="50" isRight>
            Kontakt
          </HighlightedHeading>
          <Caption style={{ color: "black" }}>
            Szukasz nieruchomości dla siebie? A może potrzebujesz fachowej
            pomocy przy sprzedaży własnej nieruchomości? Chętnie odpowiemy na
            Twoje pytania. Napisz lub zadzwoń.
          </Caption>
          <Caption
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              marginLeft: "-8px",
            }}
          >
            <img src={mobile} alt="mobile" /> 504 762 873
          </Caption>
          <ContactFormWrapper>
            <ContactForm style={{ transform: "translateX(400px)" }} />
          </ContactFormWrapper>
        </Left>
        <Right>
          <Image src={image} alt="image" />
        </Right>
      </Container>
    </ContentWrapper>
  );
};
export default Kontakt;
