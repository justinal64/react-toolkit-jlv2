import * as React from "react";
import styled from "styled-components";
import { A } from "../Elements/Elements";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";

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
  width: 100%;
`;

const Li = styled.li`
  display: inline-block;
  list-style-type: none;
`;

export const Navigation = (props: Props) => {
  return (
    <StyledNav>
      <Div>
        <ul className="nav">
          <div className="navigation">
            <span>Logo Here</span>
            <Li>
              <A href="http://www.google.com">Google</A>
            </Li>
            <Li>
              <A href="http://www.google.com">Google</A>
            </Li>
            <Li>
              <A href="http://www.google.com">Google</A>
            </Li>
            <Li>
              <div className="dropdown">
                <A href="http://www.google.com">
                  Google
                  <span className="icon-spacing">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </A>
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
            </Li>
          </div>
          <Li>
            <div className="dropdown hamburger">
              <span className="icon-spacing hamburger-icon">
                <FontAwesomeIcon icon={faBars} />
              </span>
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
          </Li>
        </ul>
      </Div>
    </StyledNav>
  );
};
