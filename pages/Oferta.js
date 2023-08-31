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

const Oferta = ({
  data: {
    oferty: { nodes: oferty = [] },
  },
}) => {
  const [house, setHouse] = useState(oferty);

  useEffect(() => {
    const List = oferty.filter((e) => e.category === "katowice");
    setHouse(List);
  }, [oferty]);

  const handleKatowice = () => {
    const LastHouses = oferty.filter((e) => e.category === "katowice");
    setHouse(LastHouses);
  };
  const handleSosnowiec = () => {
    const CurrentHouses = oferty.filter((e) => e.category === "sosnowiec");
    setHouse(CurrentHouses);
  };

  return (
    <ContentWrapper>
      <HighlightedHeading width="60">Oferta</HighlightedHeading>
      <Caption>
        Nieustannie poszukujemy nowych ofert nieruchomości. Wybierz typ
        nieruchomości, który Cię interesuje.
      </Caption>
      <ButtonSection>
        <Button onClick={handleKatowice}>Katowice</Button>
        <Button onClick={handleSosnowiec}>Sosnowiec</Button>
      </ButtonSection>
      <ImageSection>
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
          <p>Nie uda</p>
        )}
      </ImageSection>
    </ContentWrapper>
  );
};

export const query = graphql`
  query {
    oferty: allContentfulDanielNieruchomosci {
      nodes {
        id
        opis {
          opis
        }
        adres
        category
        galeria {
          url
        }
        tytul
      }
    }
  }
`;

export default Oferta;
