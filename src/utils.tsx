import {
  InvertedPrimary,
  InvertedSecondary,
  InvertedSuccess,
  InvertedWarning,
  InvertedDanger,
  Primary,
  Secondary,
  Success,
  Warning,
  Danger
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

export const invertedTheme = (styleType: any) => {
  if (styleType === "Secondary") return InvertedSecondary;
  else if (styleType === "Success") return InvertedSuccess;
  else if (styleType === "Warning") return InvertedWarning;
  else if (styleType === "Danger") return InvertedDanger;
  else return InvertedPrimary;
};

export const theme = (styleType: any) => {
  if (styleType === "Secondary") return Secondary;
  else if (styleType === "Success") return Success;
  else if (styleType === "Warning") return Warning;
  else if (styleType === "Danger") return Danger;
  else return Primary;
};

export const themePicker = (inverted: boolean, styleType: any) => {
  return inverted ? invertedTheme(styleType) : theme(styleType);
};
