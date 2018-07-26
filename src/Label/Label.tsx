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
