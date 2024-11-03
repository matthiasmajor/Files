import React from "react";
import { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Button } from "../Buttons/Button";
import { useCity } from "../../hooks/useCity";

export const Wrapper = styled.div`
  display: flex;
  gap-x: 1px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const LocalizationButtons = () => {
  const { handleDirection } = useCity();

  const data = useStaticQuery(graphql`
    query {
      miasto: allContentfulMiasta {
        nodes {
          miasto
        }
      }
    }
  `);

  return (
    <Wrapper>
      {data.miasto.nodes.map((item) => (
        <Button
          onClick={() => {
            handleDirection(`${item.miasto}`);
          }}
          buttonName={`${item.miasto}`}
        >
          {item.miasto}
        </Button>
      ))}
    </Wrapper>
  );
};

export default LocalizationButtons;
