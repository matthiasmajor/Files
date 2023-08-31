import React from "react";
import Marcel from "../images/portfolio.jpg";
import { HighlightedHeading } from "../components/HighlightedHeading/HighlightedHeading";
import {
  ContentWrapper,
  Container,
  Left,
  LeftWrapper,
  Right,
  Title,
  Caption,
  Image,
  Description,
} from "../styles/pages/portfolio.styles";

const Portfolio = () => {
  return (
    <ContentWrapper>
      <HighlightedHeading width="47" isRight>
        Portfolio
      </HighlightedHeading>
      <Description>
        Provide some assertive title and description that would persuade the
        customers to take some action
      </Description>
      <Container
        position="bottomRight"
        size="100px"
        distance="50px"
        color="dark"
      >
        <Left>
          <LeftWrapper>
            <Title
              position="topLeft"
              size="100px"
              distance="50px"
              color="beige"
            >
              Think of a catchy title for your blog post.concise and creative
            </Title>
            <Caption>
              A short paragraph describing the main idea or key takeaways of the
              blog post. A short paragraph describing the main idea or key
              takeaways of the blog post. A short paragraph describing the main
              idea or key takeaways of the blog post A short paragraph
              describing the main idea or key takeaways of the blog post. A
              short paragraph describing the main idea or key takeaways of the
              blog post. A short paragraph describing the main idea or key
              takeaways of the blog post
            </Caption>
          </LeftWrapper>
          <LeftWrapper>
            <Title position="" size="" distance="" color="">
              Think of a catchy title for your blog post.concise and creative
            </Title>
            <Caption>
              A short paragraph describing the main idea or key takeaways of the
              blog post. A short paragraph describing the main idea or key
              takeaways of the blog post. A short paragraph describing the main
              idea or key takeaways of the blog post A short paragraph
              describing the main idea or key takeaways of the blog post. A
              short paragraph describing the main idea or key takeaways of the
              blog post. A short paragraph describing the main idea or key
              takeaways of the blog post A short paragraph describing the main
              idea or key takeaways of the blog post. A short paragraph
              describing the main idea or key takeaways of the blog post. A
              short paragraph describing the main idea or key takeaways of the
              blog post
            </Caption>
          </LeftWrapper>
        </Left>
        <Right>
          <Image src={Marcel} alt="sd" />
        </Right>
      </Container>
    </ContentWrapper>
  );
};
export default Portfolio;
