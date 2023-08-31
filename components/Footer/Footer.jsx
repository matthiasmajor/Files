import React from "react";
import { Link } from "gatsby";
import { StyledIcon } from "../StyledIcon/StyledIcon";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 50px 20px;

  h4 {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 600;
    grid-row: 1 / 2;

    margin: 0;
    align-self: center;
  }

  div:first-of-type {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-column: 1 / 3;

    a {
      color: black;
      text-decoration: none;
      margin: 10px 0;
    }
  }
  div:last-of-type {
    grid-row: 1 / 2;
    margin-left: auto;

    a {
      margin-right: 20px;
      width: 35px;
      height: 35px;
    }
  }
  ${({ theme }) => theme.mq.desktop} {
    width: 1160px;
    margin: 0 auto;
    padding: 100px 0 50px 0;

    div:first-of-type {
      width: 60%;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <h4>Daniel Nieruchomości</h4>
      <div>
        <Link to="/Oferta">Oferty</Link>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/Realizacje">Realizacje</Link>
        <Link to="/Kontakt">Kontakt</Link>
      </div>
      <div>
        <StyledIcon
          as="a"
          href="https://www.facebook.com/profile.php?id=100057583803806"
          target="_blank"
          isDark
        >
          <img src={facebook} alt="facebookLogo" />
        </StyledIcon>
        <StyledIcon
          as="a"
          href="https://www.instagram.com"
          target="_blank"
          isDark
        >
          <img src={instagram} alt="instagramLogo" />
        </StyledIcon>
      </div>
    </StyledFooter>
  );
};
