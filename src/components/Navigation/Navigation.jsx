import * as React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import {
  OuterWrapper,
  StyledBurger,
  StyledNavigation,
  Wrapper,
  StyledSocialIcon,
} from "./Navigation.styles";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToogleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OuterWrapper id="nav">
      <p>
        <Link to="/">Home</Link>
      </p>
      <StyledBurger onClick={ToogleNavigation}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <Wrapper isOpen={isOpen}>
        <StyledNavigation>
          <ul>
            <li>
              <Link onClick={ToogleNavigation} to="/Wspolpraca">
                Współpraca
              </Link>
            </li>
            <li>
              <Link onClick={ToogleNavigation} to="/Oferta">
                Oferta
              </Link>
            </li>
            <li>
              <Link onClick={ToogleNavigation} to="/Portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link onClick={ToogleNavigation} to="/Realizacje">
                Realizacje
              </Link>
            </li>
            <li>
              <Link onClick={ToogleNavigation} to="/Kontakt">
                Kontakt
              </Link>
            </li>
          </ul>
        </StyledNavigation>
        <div style={{}}>
          <StyledSocialIcon
            as="a"
            href="https://www.facebook.com/profile.php?id=100087245306747"
          >
            <img src={facebook} alt="facebook" />
          </StyledSocialIcon>
          <StyledSocialIcon>
            <img src={instagram} alt="instagram" />
          </StyledSocialIcon>
        </div>
      </Wrapper>
    </OuterWrapper>
  );
};
