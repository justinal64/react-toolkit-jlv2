// change back to .js to fix bigger prob
import { withInfo } from "@storybook/addon-info";
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

const wInfoStyle = {
  header: {
    h1: {
      marginRight: "20px",
      fontSize: "25px",
      display: "inline"
    },
    body: {
      paddingTop: 0,
      paddingBottom: 0
    },
    h2: {
      display: "inline",
      color: "#999"
    }
  },
  infoBody: {
    backgroundColor: "#eee",
    padding: "0px 5px",
    lineHeight: "2"
  }
};

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

export const wInfo = (text: any) =>
  withInfo({ inline: true, source: false, styles: wInfoStyle, text: text });

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
  wInfo,
  displayBlock,
  disabledButton,
  invertedButton,
  buttonPicker,
  themePicker
};
