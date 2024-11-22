import React from "react";
import styled from "styled-components";
import image from "../images/background_wspolpraca.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import Lottie from "lottie-react";
import document from "../assets/animations/document.json";
import { HighlightedHeading } from "../components/HighlightedHeading/HighlightedHeading";
import AnimatedBackground from "../components/AnimatedBackground";

export const MainContainer = styled.div`
  margin-top: 120px;
  text-align: center;
  position: relative;
  ${({ theme }) => theme.mq.desktop} {
    margin-top: 150px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 0px;
  position: relative;
  color: black;
  align-items: center;

  /* background-color: rgb(255 255 255 / 1.5); */

  ${({ theme }) => theme.mq.desktop} {
    margin: 0 auto;
    margin-top: 20px;
    flex-direction: row;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
  }
`;

export const Content = styled.div`
  padding: 60px 30px 30px 30px;
  text-align: center;
  /* background-color:rgb(255 255 255 / 0.5); */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  background-color:#F8FAFC;
  text-color:#475569;

  margin-bottom:50px;
  div {
    display:flex;
    align-items:center;
    gap:10px;
    justify-content:center;
  }
  
  ${({ theme }) => theme.mq.desktop} {
    h3 {
      /* color: #ab4f4f; */
      font-size: 32px;
      margin-bottom:30px;
      border-bottom:1px solid gray;;
      padding-bottom:20px;
      margin:0 auto;
      width:fit-content;
      
      color:#1e293b;
    }
    p:nth-of-type(1) {
      font-size: 22px;
     /*  font-weight: 600; */
      margin-bottom:30px;
      color:#1e293b;
    }
    p:nth-of-type(2) {
      color:#334155;
      font-size: 20px;
      font-weight: 500;
      margin-bottom:30px;
    }
    p:nth-of-type(3) {
      font-size: 20px;
      /* font-weight:500; */
      margin-bottom:30px;
      color:#1e293b;
  }
`;
export const ContentSecond = styled.div`
  padding: 20px 30px;
  text-align: center;
  background-color:rgb(255 255 255 / 0.5);
  margin-bottom:50px;
  div {
    display:flex;
    align-items:center;
    gap:10px;
    justify-content:center;
  }
  

  ${({ theme }) => theme.mq.desktop} {
    h3 {
      color:#334155;
      font-size: 32px;
      border-bottom:1px solid gray;
      width:max-content;
      padding-bottom:20px;
      text-align:center;
      margin:0 auto;
      margin-top:100px;
      font-weight:Bold;
    }
    p:nth-of-type(1) {
      font-size: 24px;
      font-weight: 600;
      margin-bottom:30px;
    }
    p:nth-of-type(2) {
      color:#334155;
      font-size: 20px;
      font-weight: 500;
      margin-bottom:30px;
    }
    p:nth-of-type(3) {
      font-size: 24px;
      font-weight:700;
      margin-bottom:30px;
  }
`;

export const JsonContainer = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    position: absolute;
    bottom: 20px;
    right: 0;
    height: auto;
    width: 150px;
    z-index: -1;
  }
`;

/* export const StylingDiv = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 40%;
  background-color: #1e293b;
  z-index: -1;
`; */

const Wspolpraca = () => {
  return (
    <MainContainer>
      {/*   <AnimatedBackground /> */}
      {/* <StylingDiv /> */}
      <HighlightedHeading width="30" isLeft>
        Współpraca
      </HighlightedHeading>
      <Wrapper>
        {/* <Ball /> */}
        <ContentContainer>
          {/* <JsonContainer>
            <Lottie animationData={document} loop={true} />
          </JsonContainer> */}
          <Content>
            <h3>OFERTA WSPÓŁPRACY SPRZEDAŻY</h3>
            <p>
              Zamierzasz sprzedać swoje mieszkanie, dom lub działkę, ale nie
              wiesz co, gdzie i jak? Świetnie trafiłeś! Chętnie zajmę się tym
              możliwie najszybciej.
            </p>
            <p>
              W celu nawiązania oferty współpracy sprzedaży proszę o kontakt pod
              numer telefonu: 791 401 001
            </p>
            <p>
              Zapewniam wysoką jakość, terminowość i niską prowizję. Dołącz do
              grona naszych zadowolonych klientów!
            </p>
            <div>
              <BsFillTelephoneFill />
              <p>791 401 001</p>
              <BsFillTelephoneFill />
            </div>
          </Content>
          {/* <ContentSecond>
          <h3>OFERTA WSPÓŁPRACY KUPNA</h3>
          <p>
            Zamierzasz kupić, dom lub działkę, ale nie wiesz co, gdzie i jak?
            Świetnie trafiłeś! Chętnie zajmę się tym najszybciej jak to możliwe
            na ŚWIETNYCH warunkach.
          </p>
          <p>
            W celu nawiązania oferty współpracy sprzedaży proszę o kontakt pod
            numer telefonu: 791 401 001
          </p>
          <p>
            Zapewniam wysoką jakość, terminowość i niską prowizję. Dołącz do
            grona naszych zadowolonych klientów!
          </p>
          <div>
            <BsFillTelephoneFill />
            <p>791 401 001</p>
            <BsFillTelephoneFill />
          </div>
        </ContentSecond> */}
        </ContentContainer>
      </Wrapper>
    </MainContainer>
  );
};

export default Wspolpraca;
