import * as React from "react";
import styled from "styled-components";

export interface Props {
  title: string;
  color?: string;
}

const StyledLabel = styled.label`
  color: white;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background: ${props => (props.color ? props.color : "pink")};
  border-radius: ${props => (props ? "2rem" : "0rem")};
`;

export const Label = (props: Props) => {
  return <StyledLabel color={props.color}>{props.title}</StyledLabel>;
};

// This is just an example of a styled component
export interface Props {
  title: string;
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export const Footer = (props: Props) => {
  const { title } = props;
  return (
    <Wrapper title={title}>
      <Title>{title}</Title>
    </Wrapper>
  );
};
