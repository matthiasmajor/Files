import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useEffect } from "react";

export const useCity = () => {
  const data = useStaticQuery(graphql`
    query {
      oferty: allContentfulOfertyNieruchmosci {
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
  `);

  const [oferta, setOferta] = useState(data.oferty.nodes);

  return { oferta, setOferta };
};
