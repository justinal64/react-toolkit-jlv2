import * as React from "react";
import styled from "styled-components";
import { A } from "../Elements/Elements";
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
            <A href="http://www.google.com">Google</A>
            <div className="dropdown-content">
              <div className="dropdown-hover">
                <A href="http://www.google.com">Link 1</A>
              </div>
              <div className="dropdown-hover">
                <A href="http://www.google.com">Link 2</A>
              </div>
              <div className="dropdown-hover">
                <A href="http://www.google.com">Link 3</A>
              </div>
            </div>
          </div>
        </ul>
      </Div>
    </StyledNav>
  );
};
