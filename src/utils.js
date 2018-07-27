import { withInfo } from "@storybook/addon-info";
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

export const wInfo = text =>
  withInfo({ inline: true, source: false, styles: wInfoStyle, text: text });

export default { getFontSize, getColor, wInfo, displayBlock, disabledButton };
