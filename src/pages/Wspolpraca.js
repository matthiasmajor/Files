import React from "react";
import styled from "styled-components";
import image from "../images/background_wspolpraca.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  position: relative;
  background-image: linear-gradient(black, black),
    url("${({ image }) => image}");
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: saturation;
  color: black;
  padding-top: 60px;
  background-color: rgb(255 255 255 / 0.3);

  ${({ theme }) => theme.mq.desktop} {
    margin: 0 auto;
    margin-top: 120px;
  }
`;
export const Content = styled.div`
  padding: 30px 30px;
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
      color: #ab4f4f;
      font-size: 32px;
      margin-bottom:30px;
      border-bottom:1px solid gray;;
      padding-bottom:20px;
      margin:0 auto;
      width:fit-content;
      font-weight:Bold;
    }
    p:nth-of-type(1) {
      font-size: 24px;
      font-weight: 600;
      margin-bottom:30px;
    }
    p:nth-of-type(2) {
      color: rgba(87, 22, 22, 0.7);
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
      color: #571e4c;
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
      color: rgba(113, 28, 28, 0.7);
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

const Wspolpraca = () => {
  return (
    <Wrapper image={image}>
      <Ball />
      <Content>
        <h3>OFERTA WSPÓŁPRACY SPRZEDAŻY</h3>
        <p>
          Zamierzasz sprzedać swoje mieszkanie, dom lub działkę, ale nie wiesz
          co, gdzie i jak? Świetnie trafiłeś! Chętnie zajmę się tym możliwie
          najszybciej
        </p>
        <p>
          W celu nawiązania oferty współpracy sprzedaży proszę o kontakt pod
          numer telefonu: 791 401 001
        </p>
        <p>
          Zapewniam wysoką jakość, terminowość i niską prowizję. Dołącz do grona
          naszych zadowolonych klientów!
        </p>
        <div>
          <BsFillTelephoneFill />
          <p>791 401 001</p>
          <BsFillTelephoneFill />
        </div>
      </Content>
      <ContentSecond>
        <h3>OFERTA WSPÓŁPRACY KUPNA</h3>
        <p>
          Zamierzasz kupić, dom lub działkę, ale nie wiesz co, gdzie i jak?
          Świetnie trafiłeś! Chętnie zajmę się tym najszybciej jak to możliwe na
          ŚWIETNYCH warunkach.
        </p>
        <p>
          W celu nawiązania oferty współpracy sprzedaży proszę o kontakt pod
          numer telefonu: 791 401 001
        </p>
        <p>
          Zapewniam wysoką jakość, terminowość i niską prowizję. Dołącz do grona
          naszych zadowolonych klientów!
        </p>
        <div>
          <BsFillTelephoneFill />
          <p>791 401 001</p>
          <BsFillTelephoneFill />
        </div>
      </ContentSecond>
    </Wrapper>
  );
};

export default Wspolpraca;
