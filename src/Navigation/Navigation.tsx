import * as React from "react";
import styled from "styled-components";
import "./Navigation.css";

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
  display: inLine-block;
  background-color: red;
`;

const Li = styled.li`
  display: inline-block;
  list-style-type: none;
`;

const A = styled.a`
  display: block;
  margin: 0.2em;
`;

export const Navigation = (props: Props) => {
  return (
    <StyledNav>
      <Div>
        <ul>
          <span>Logo Here</span>
          <Li>
            <a href="http://www.google.com">Google</a>
          </Li>
          <Li>
            <a href="http://www.google.com">Google</a>
          </Li>
          <Li>
            <a href="http://www.google.com">Google</a>
          </Li>
          <div className="dropdown">
            <span>Mouse over me</span>
            <div className="dropdown-content">
              <div className="dropdown-hover">
                <A href="http://www.google.com">Google</A>
              </div>
              <div className="dropdown-hover">
                <A href="http://www.google.com">Google</A>
              </div>
              <div className="dropdown-hover">
                <A href="http://www.google.com">Google</A>
              </div>
            </div>
          </div>
        </ul>
      </Div>
    </StyledNav>
  );
};
