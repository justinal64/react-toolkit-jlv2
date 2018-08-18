import * as React from "react";
import styled from "styled-components";
import { themePicker } from "../utils";

export interface Props {
  /**  Label Title  */

  title: string;

  /**  Think Bootstrap
   * @default false
   */

  inverted?: boolean;
  /**  See Note above
   * @default Primary
   */

  buttonType: string;
}

const StyledLabel = styled.label`
  color: white;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: ${props => (props ? "2rem" : "0rem")};
  ${(props: any) => themePicker(props.inverted, props.buttonType)};
`;

export const Label = (props: Props) => {
  let { inverted, buttonType, title } = props;
  return (
    <StyledLabel inverted={inverted} buttonType={buttonType}>
      {title}
    </StyledLabel>
  );
};
