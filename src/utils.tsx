// change back to .js to fix bigger prob
import {
  InvertedPrimaryButton,
  InvertedSecondaryButton,
  InvertedSuccessButton,
  InvertedWarningButton,
  InvertedDangerButton,
  PrimaryButton,
  SecondaryButton,
  SuccessButton,
  WarningButton,
  DangerButton
} from "./Styles/Styles";

export const displayBlock = `
  display: block;
  width: 100%;
`;

export const disabledButton = `
opacity: .65;
pointer-events: none;
`;

export const getFontSize = (props: any) =>
  props.font ? `font-size: ${props.font}rem;` : "";

export const getColor = (props: any) =>
  props.color ? `color: ${props.color};` : "";

export const invertedButton = (button: any) => {
  if (button === "Primary") {
    return InvertedPrimaryButton;
  } else if (button === "Secondary") {
    return InvertedSecondaryButton;
  } else if (button === "Success") {
    return InvertedSuccessButton;
  } else if (button === "Warning") {
    return InvertedWarningButton;
  } else if (button === "Danger") {
    return InvertedDangerButton;
  } else {
    return InvertedPrimaryButton;
  }
};

export const buttonPicker = (button: any) => {
  if (button === "Primary") {
    return PrimaryButton;
  } else if (button === "Secondary") {
    return SecondaryButton;
  } else if (button === "Success") {
    return SuccessButton;
  } else if (button === "Warning") {
    return WarningButton;
  } else if (button === "Danger") {
    return DangerButton;
  } else {
    return PrimaryButton;
  }
};

export const invertedButtonPicker = (button: string) => {
  if (button === "Primary") {
    return InvertedPrimaryButton;
  } else if (button === "Secondary") {
    return InvertedSecondaryButton;
  } else if (button === "Success") {
    return InvertedSuccessButton;
  } else if (button === "Warning") {
    return InvertedWarningButton;
  } else if (button === "Danger") {
    return InvertedDangerButton;
  } else {
    return InvertedPrimaryButton;
  }
};

export const themePicker = (inverted: boolean, button: any) => {
  return inverted ? invertedButtonPicker(button) : buttonPicker(button);
};

export default {
  getFontSize,
  getColor,
  displayBlock,
  disabledButton,
  invertedButton,
  buttonPicker,
  themePicker
};
