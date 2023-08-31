import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import ReactElasticCarousel from "react-elastic-carousel";
import { HighlightedHeading } from "./HighlightedHeading/HighlightedHeading";
import area from "../assets/icons/area.svg";
import availability from "../assets/icons/availability.svg";
import blocks from "../assets/icons/blocks.svg";
import building from "../assets/icons/building-type.svg";
import key from "../assets/icons/key.svg";

export const Wrapper = styled.div`
  margin-top: 160px;
`;

export const Gallery = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 70px;
  grid-gap: 20px;
`;

export const Left = styled.div`
  h5 {
    position: relative;

    &::after {
      position: absolute;
      content: "";
      width: 100px;
      height: 1px;
      left: 0px;
      bottom: 0px;
      background-color: black;
    }
  }
`;
export const Right = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 20px;

    p {
      font-weight: Bold;
    }

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

const OfertaTemplate = ({ data: { oferta } }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];
  return (
    <Wrapper>
      <Gallery>
        <ReactElasticCarousel breakPoints={breakPoints}>
          {oferta.galeria.map((e) => (
            <img src={e.url} />
          ))}
        </ReactElasticCarousel>
      </Gallery>
      <WrapperContent>
        <Left>
          <h5>Dąbrowa</h5>
          <HighlightedHeading width="50">{oferta.tytul}</HighlightedHeading>
          <p
            dangerouslySetInnerHTML={{
              __html: oferta.opis.childMarkdownRemark.html,
            }}
          />
        </Left>
        <Right>
          <div>
            <img src={building} />
            <p>Typ Budynku</p>
          </div>
          <div>
            <img src={blocks} />
            <p>Pomieszczenia</p>
          </div>
          <div>
            <img src={key} />
            <p>Dostepność</p>
          </div>
          <div>
            <img src={area} />
            <p>Powierzchnia</p>
          </div>
          <div>
            <img src={availability} />
            <p>Rodzaj oferty</p>
          </div>
        </Right>
      </WrapperContent>
    </Wrapper>
  );
};

export const query = graphql`
  query ($id: String) {
    oferta: contentfulDanielNieruchomosci(id: { eq: $id }) {
      tytul
      adres
      category
      opis {
        childMarkdownRemark {
          html
        }
      }
      galeria {
        url
      }
    }
  }
`;

export default OfertaTemplate;
