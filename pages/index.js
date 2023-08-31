import * as React from "react";
import styled from "styled-components";
import HeroDesktopImage from "../images/HeroDesktop.jpg";
import { List } from "../data/lib";
import {
  Wrapper,
  DetailInfo,
  DetailInfoPrev,
  Feature5,
  Title,
  Text1,
  ImageWrapper,
  WOstatnichLatach,
  Desktop2Inner,
  ImagesOfertaSmall,
  ImagesOfertaWrapper,
  ButtonWrapper,
  Caption,
  OfertaWrapper,
  Oferta,
  DetailInfoService,
  Div,
  DetailServiceCaption,
  Parent,
  ParentElement,
  DetailServiceInfoTitle,
  ShowCaseCorner,
  ClientsSection,
  ClientsInfoContainer,
  ClientsInfoChild,
  ChildInsideContainer,
  ChildImage,
} from "../styles/pages/homepage.styles";
import AboutMeSectionImage from "../images/indexpage.jpg";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Link } from "gatsby";
import { StyledButton } from "../components/ContactForm/ContactForm";
import { HighlightedHeading } from "../components/HighlightedHeading/HighlightedHeading";
import gridOne from "../images/HousesPhotos/2_grid.jpg";
import gridTwo from "../images/HousesPhotos/3_grid.jpg";
import gridThird from "../images/HousesPhotos/4_grid.jpg";
import face from "../images/face.jpg";
import { Hero } from "../components/HeroSection/HeroSection";

export const ContentWrapper = styled.div`
  margin-top: 90px;
`;

const IndexPage = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1500, itemsToShow: 1 },
  ];

  return (
    <ContentWrapper>
      <Hero url={HeroDesktopImage} />
      <Wrapper>
        <HighlightedHeading width="50">
          Czym wyróżniam sie na tle konkurencji?
        </HighlightedHeading>
        <DetailInfo>
          <DetailInfoPrev
            position="bottomLeft"
            color="beige"
            size="100px"
            distance="30px"
          >
            <Feature5>
              <Title>Indywidualne podejście do klienta</Title>
              <Text1>{`Short text describing one of your product/service advantages. Try being creative. Short text describing one of your product/service advantages. Try being creative. Short text describing one of your product/service advantages. Try being creative. Short text `}</Text1>
            </Feature5>

            <Feature5>
              <Title>Lata doświadczenia</Title>
              <Text1>{`Short text describing one of your product/service advantages. Try being creative. Short text describing one of your product/service advantages. Try being creative. Short text describing one of your product/service advantages. Try being creative. Short text `}</Text1>
            </Feature5>
          </DetailInfoPrev>

          <ImageWrapper>
            <img src={AboutMeSectionImage} alt="photo with pen" />
          </ImageWrapper>
        </DetailInfo>
        <WOstatnichLatach style={{ textAlign: "center" }}>
          W ostatnich latach udało się nawiąząć{" "}
          <Desktop2Inner>współpracę z wieloma</Desktop2Inner> klientami, bądz
          jednym z nich!
        </WOstatnichLatach>
      </Wrapper>

      <Oferta>
        <OfertaWrapper>
          <HighlightedHeading>Moja oferta</HighlightedHeading>
          <Caption>
            Provide some assertive title and description that would persuade the
            customers to take some action, e.g., making a purchase, scheduling a
            demo, etc.
          </Caption>
          <ButtonWrapper>
            <StyledButton as={Link} to="/Oferta">
              Bieżąca oferta
            </StyledButton>
            <StyledButton as={Link} to="/Realizacje">
              Ostatnie realizacje
            </StyledButton>
          </ButtonWrapper>
          <ImagesOfertaWrapper>
            <ImagesOfertaSmall src={gridOne} />
            <ImagesOfertaSmall isBig src={gridTwo} />
            <ImagesOfertaSmall isBig src={gridThird} />
            <ImagesOfertaSmall src={gridOne} />
            <ImagesOfertaSmall src={gridTwo} />
            <ImagesOfertaSmall isBig src={gridThird} />
            <ShowCaseCorner
              position="topLeft"
              size="100px"
              distance="30px"
              color="beige"
            />
            <ShowCaseCorner
              isHidden
              position="bottomRight"
              size="100px"
              distance="30px"
              color="dark"
            />
          </ImagesOfertaWrapper>
        </OfertaWrapper>
      </Oferta>
      <DetailInfoService>
        <Div>
          <HighlightedHeading width="68" maxWidth="380">
            Kompleksowa usługa, od początku do końca!
          </HighlightedHeading>
          <DetailServiceCaption>
            Provide your customers a story they would enjoy keeping in mind the
            objectives of your website. Pay special attention to the tone of
            voice. Try to win the customers trust by being positive.
          </DetailServiceCaption>
        </Div>
        <Parent>
          <ParentElement>
            <DetailServiceInfoTitle>Doradztwo</DetailServiceInfoTitle>
            <DetailServiceCaption>
              Description of the number. People always pay attention to numbers.
              They are a powerful visual anchor.
            </DetailServiceCaption>
          </ParentElement>
          <ParentElement>
            <DetailServiceInfoTitle>Doradztwo</DetailServiceInfoTitle>
            <DetailServiceCaption>
              Współpracujemy z najlepszymi kancelariami prawnymi i notarialnymi,
              zapewniamy fachowe doradztwo w zakresie kredytowania i
              ubezpieczeń.
            </DetailServiceCaption>
          </ParentElement>
          <ParentElement>
            <DetailServiceInfoTitle>Doradztwo</DetailServiceInfoTitle>
            <DetailServiceCaption>
              Modna i funkcjonalna metamorfoza wnętrza mieszkania, domu czy
              biura podnosi atrakcyjność oferty na rynku.
            </DetailServiceCaption>
          </ParentElement>
          <ParentElement>
            <DetailServiceInfoTitle>Doradztwo</DetailServiceInfoTitle>
            <DetailServiceCaption>
              Description of the number. People always pay attention to numbers.
              They are a powerful visual anchor.
            </DetailServiceCaption>
          </ParentElement>
        </Parent>
      </DetailInfoService>
      <ClientsSection>
        <HighlightedHeading width="37" isRight>
          Co mówią moi klienci?
        </HighlightedHeading>
        <ClientsInfoContainer>
          <ClientsInfoChild>
            <ChildInsideContainer>
              <ChildImage src={face} />
              <DetailServiceInfoTitle>Tomek</DetailServiceInfoTitle>
              <DetailServiceCaption>Fryzjer</DetailServiceCaption>
              <DetailServiceCaption style={{ color: "black" }}>
                "What a great experience! This service is a great time saver.
                Our team managed to reduce the time needed for paperwork by a
                third. Highly recommend this service."
              </DetailServiceCaption>
            </ChildInsideContainer>
          </ClientsInfoChild>

          <ClientsInfoChild>
            <ChildInsideContainer>
              <ChildImage src={face} />
              <DetailServiceInfoTitle>Tomek</DetailServiceInfoTitle>
              <DetailServiceCaption>Fryzjer</DetailServiceCaption>
              <DetailServiceCaption style={{ color: "black" }}>
                "What a great experience! This service is a great time saver.
                Our team managed to reduce the time needed for paperwork by a
                third. Highly recommend this service."
              </DetailServiceCaption>
            </ChildInsideContainer>
          </ClientsInfoChild>

          <ClientsInfoChild>
            <ChildInsideContainer>
              <ChildImage src={face} />
              <DetailServiceInfoTitle>Tomek</DetailServiceInfoTitle>
              <DetailServiceCaption>Fryzjer</DetailServiceCaption>
              <DetailServiceCaption style={{ color: "black" }}>
                "What a great experience! This service is a great time saver.
                Our team managed to reduce the time needed for paperwork by a
                third. Highly recommend this service."
              </DetailServiceCaption>
            </ChildInsideContainer>
          </ClientsInfoChild>
        </ClientsInfoContainer>
      </ClientsSection>
      <ContactForm />
    </ContentWrapper>
  );
};
export default IndexPage;
