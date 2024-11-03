import React from "react";
import { useState, useEffect, useContext } from "react";

import { useStaticQuery } from "gatsby";

const QueryContext = React.createContext({});

export const QueryProvider = ({
  children,
  data: {
    oferty: { nodes: oferty = [] },
  },
}) => {
  console.log(oferty);
  const [house, setHouse] = useState(oferty);
  useEffect(() => {
    const List = oferty.filter((e) => e.category === "katowice");
    setHouse(List);
  }, [oferty]);
  return (
    <QueryContext.Provider value={{ house }}>{children}</QueryContext.Provider>
  );
};
export const useQuery = () => {
  const query = useContext(QueryContext);

  if (!QueryContext) {
    throw Error("useAuth needs to be used inside AuthContext");
  }

  return query;
};
export const query = useStaticQuery`
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
`;
