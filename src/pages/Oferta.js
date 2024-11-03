import React from "react";
import { Caption } from "../styles/pages/homepage.styles";
import { Button } from "../components/Buttons/Button";
import { Content } from "../components/Content/Content";
import { useState, useEffect } from "react";
import { HighlightedHeading } from "../components/HighlightedHeading/HighlightedHeading";
import { graphql } from "gatsby";
import {
  ContentWrapper,
  ButtonSection,
  ImageSection,
} from "../styles/pages/oferta.styles";
import { TitleWrappper } from "./index";
import { useCity } from "../hooks/useCity";
import { LocalizationButtons } from "../components/LocalizationButtons/LocalizationButtons";

const Oferta = ({
  data: {
    miasto: { nodes: miasto = [] },
  },
}) => {
  const { oferta, setOferta } = useCity();
  const [house, setHouse] = useState(oferta);
  const [active, setActive] = useState("katowice");

  const activeButton = (city) => {
    setActive(city);
  };

  useEffect(() => {
    const List = oferta.filter((e) => e.category === "katowice");
    setHouse(List);
  }, []);

  const handleDirection = (direction) => {
    setHouse(oferta);
    const LastHouses = oferta.filter((e) => e.category === direction);
    setHouse(LastHouses);
  };

  return (
    <ContentWrapper>
      <TitleWrappper>
        <HighlightedHeading width="60">Oferta</HighlightedHeading>
      </TitleWrappper>
      <Caption>
        Nieustannie poszukujemy nowych ofert nieruchomości. Wybierz miasto które
        Cię interesuje.
      </Caption>

      <ButtonSection>
        {miasto.map((item) => (
          <Button
            isActive={active}
            buttonName={item.miasto}
            onClick={() => {
              handleDirection(`${item.miasto}`);
              activeButton(`${item.miasto}`);
            }}
          >
            {item.miasto}
          </Button>
        ))}
      </ButtonSection>
      <ImageSection Layout>
        {house.length > 0 ? (
          house.map((oferta) => (
            <Content
              key={oferta.id}
              id={oferta.id}
              url={oferta.galeria[0].url}
              name={oferta.adres}
              desc={oferta.opis.opis}
              category={oferta.category}
              addres={oferta.adres}
              title={oferta.tytul}
            />
          ))
        ) : (
          <p style={{ fontWeight: "bold", textAlign: "center" }}>
            Obecnie brak ofert w tej lokalizacji.
          </p>
        )}
      </ImageSection>
    </ContentWrapper>
  );
};

export const query = graphql`
  query {
    miasto: allContentfulMiasta {
      nodes {
        miasto
      }
    }
  }
`;

export default Oferta;
