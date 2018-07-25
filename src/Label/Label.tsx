import React from "react";
// import styled from "styled-components";

export interface Props {
  title: string;
  color?: string;
}

// const StyledLabel = styled.label`
//   color: white;
//   padding-left: 0.5rem;
//   padding-right: 0.5rem;
//   background: ${props => (props.color ? props.color : "transparent")};
//   /* border-radius: ${props => (props ? "2rem" : "0rem")}; */
// `;

export const Label = (props: Props) => {
  return <label color={props.color}>{props.title}</label>;
};
