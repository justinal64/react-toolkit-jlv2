import * as React from "react";
import styled from "styled-components";
import { themePicker } from "../utils";

export interface Props {
  /**  Button Title  */
  title: string;
  /**  See Note above
   * @default Primary
   */
  buttonType: string;
  /**  Measured in rem
   * @default 1
   */
  font?: number;
  /**  Think Bootstrap
   * @default false
   */
  inverted?: boolean;
  /**  Disables button
   * @default false
   */
  disabled?: boolean;
  /**  Button True = Inline
   * @default false
   */
  block?: boolean;
  /**  this.chapter  */
  onClick?: () => any;
}

export const displayBlock = `
  display: block;
  width: 100%;
`;

export const disabledButton = `
  opacity: .65;
  pointer-events: none;
`;

const StyledButton = styled.button`
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 0.75rem;
  line-height: 1.25;
  transition: all 0.3s ease-in-out;
  margin: 0.15em;
  background-color: transparent;
  font-size: ${(props: any) => (props.font ? props.font : "1")}rem;
  ${props => themePicker(props.inverted, props.buttonType)};
  ${(props: any) => (props.disabled ? disabledButton : "")};
`;

export const Button = (props: Props) => {
  let { title, buttonType, font, inverted, disabled, block, onClick } = props;
  onClick =
    typeof onClick === "function" ? onClick : () => console.log("Working!");
  return (
    <StyledButton
      buttonType={buttonType}
      title={title}
      font={font}
      inverted={inverted}
      disabled={disabled}
      display={block ? true : false}
      onClick={onClick}
    >
      {title}
    </StyledButton>
  );
};
