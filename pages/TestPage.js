import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Wrapper = styled.div`
  margin-top: 160px;
  width:100%:
  
  display:flex;
  align-items:Center;
  justify-content:center;

  img {
    width:100%;
    height:auto;
  }
  
`;

const Square = styled.div`
  width: 200px;
  height: 200px;
  background-color: yellow;
`;

const TestPage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const Things = [
    {
      id: 1,
      title: "Lizbonska 21",
      url: require("../images/Carousel/house_6.jpg").default,
    },
    {
      id: 2,
      title: "Skowronska 21",
      url: require("../images/Carousel/house_2.jpg").default,
    },
    {
      id: 3,
      title: "Majchrzaka 21",
      url: require("../images/Carousel/house_3.jpg").default,
    },
    {
      id: 4,
      title: "Barcelonska 11",
      url: require("../images/Carousel/house_4.jpg").default,
    },
    {
      id: 5,
      title: "Tuwima 29",
      url: require("../images/Carousel/house_5.jpg").default,
    },
    {
      id: 6,
      title: "Sewinska 21",
      url: require("../images/Carousel/house_6.jpg").default,
    },
  ];

  return (
    <Wrapper>
      <Carousel
        autoPlaySpeed={2000}
        infinite={true}
        autoPlay={true}
        responsive={responsive}
      >
        {Things.map((e) => (
          <img src={e.url} />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default TestPage;
