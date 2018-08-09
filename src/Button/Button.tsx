import * as React from "react";
import styled from "styled-components";
import themePicker = require("../utils");
// import {
//   InvertedPrimaryButton,
//   InvertedSecondaryButton,
//   InvertedSuccessButton,
//   InvertedWarningButton,
//   InvertedDangerButton,
//   PrimaryButton,
//   SecondaryButton,
//   SuccessButton,
//   WarningButton,
//   DangerButton
// } from "../Styles/Styles";

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

// const invertedButtonPicker = (button: string) => {
//   if (button === "Primary") {
//     return InvertedPrimaryButton;
//   } else if (button === "Secondary") {
//     return InvertedSecondaryButton;
//   } else if (button === "Success") {
//     return InvertedSuccessButton;
//   } else if (button === "Warning") {
//     return InvertedWarningButton;
//   } else if (button === "Danger") {
//     return InvertedDangerButton;
//   } else {
//     return InvertedPrimaryButton;
//   }
// };

// const buttonPicker = (button: string) => {
//   if (button === "Primary") {
//     return PrimaryButton;
//   } else if (button === "Secondary") {
//     return SecondaryButton;
//   } else if (button === "Success") {
//     return SuccessButton;
//   } else if (button === "Warning") {
//     return WarningButton;
//   } else if (button === "Danger") {
//     return DangerButton;
//   } else {
//     return PrimaryButton;
//   }
// };

// const themePicker = (inverted: boolean, button: string) => {
//   return inverted ? invertedButtonPicker(button) : buttonPicker(button);
// };

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
      display={block ? 1 : 0} // better solution???
      onClick={onClick}
    >
      {title}
    </StyledButton>
  );
};
