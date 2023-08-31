import React from "react";
import { ContentStyle } from "./Content.styles";
import styled from "styled-components";
import { Link } from "gatsby";
import { getPageSlug } from "../../helpers/getPageSlug";

export const Container = styled(Link)`
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  margin-top: 25px;
  color: white;
  img {
    filter: brightness(0.65);
    transition: filter 0.05s ease-in-out;
  }
  ${({ theme }) => theme.mq.desktop} {
    margin-top: 0px;
    border-bottom: none;
  }
`;
export const Image = styled.img`
  width: 100%;
  ${({ theme }) => theme.mq.desktop} {
    height: 450px;
    max-width: 350px;
    object-fit: cover;

    &:hover {
      opacity: 0.7;
      transition: 1s;
    }
  }
`;
export const CaptionDiv = styled.div`
  display: none;
  ${({ theme }) => theme.mq.desktop} {
    display: flex;

    font-weight: bold;
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-size: ${({ theme }) => theme.font.size.thumbnailSmall};
  }
`;
export const ImageDescription = styled.h2`
  font-weight: bold;
  color: black;
  ${({ theme }) => theme.mq.desktop} {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${({ theme }) => theme.font.size.thumbnail};
    color: white;

    &::after {
      position: absolute;
      content: "";
      width: 50%;
      height: 1px;
      right: 0px;
      bottom: 42px;
      background-color: white;
    }
  }
`;
export const DescriptionWrapper = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    position: absolute;
    content: "";
    bottom: 0px;
    left: 0px;
    padding: 40px 20px;
  }
`;

export const Content = ({
  id,
  name,
  title,
  desc,
  category,
  url,
  addres = "",
}) => {
  return (
    <Container to={getPageSlug(addres)} key={id} category={category}>
      <Image src={url} alt="hej" />
      <DescriptionWrapper>
        <ImageDescription>{name}</ImageDescription>
      </DescriptionWrapper>
    </Container>
  );
};
