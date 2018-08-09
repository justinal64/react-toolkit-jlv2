import * as React from "react";
import styled from "styled-components";

export interface Props {
  title?: string;
  color?: string;
}

const StyledProgressBar = styled.div`
  color: white;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background: ${props => (props.color ? props.color : "pink")};
  border-radius: ${props => (props ? "2rem" : "0rem")};
`;

const InnerDiv = styled.div`
  width: 70%;
`;

export const ProgressBar = (props: Props) => {
  return (
    <StyledProgressBar className="progress" color={props.color}>
      <InnerDiv className="progress-bar" role="progressbar">
        <span className="sr-only">70% Complete</span>
      </InnerDiv>
    </StyledProgressBar>
  );
};
