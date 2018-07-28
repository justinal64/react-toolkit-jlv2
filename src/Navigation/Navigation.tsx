import * as React from "react";
import styled from "styled-components";

export interface Props {
  title: string;
  color?: string;
}

const StyledNav = styled.nav`
background-color: pink;
  /* color: white;
  padding-left: 0.5rem;
  padding-right: 0.5rem; */
  /* background: ${props => (props.color ? props.color : "pink")};
  border-radius: ${props => (props ? "2rem" : "0rem")}; */
`;

const Div = styled.div`
  display: inline-block;
  background-color: red;
`;

export const Navigation = (props: Props) => {
  return (
    <StyledNav>
      <Div>
        <ul>
          <span>Logo Here</span>
          <a href="http://www.google.com">Google</a>
          <a href="http://www.google.com">Google</a>
          <a href="http://www.google.com">Google</a>
          <a href="http://www.google.com">Google</a>
          <a href="http://www.google.com">Google</a>
          <a href="http://www.google.com">Google</a>
        </ul>
      </Div>
    </StyledNav>
  );
};
