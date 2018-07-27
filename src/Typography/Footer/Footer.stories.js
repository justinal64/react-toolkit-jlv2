import React from "react";

import { storiesOf } from "@storybook/react";
import { Footer } from "./Footer";
import { wInfo } from "../../utils";
import { text, boolean } from "@storybook/addon-knobs/react";

storiesOf("Components/Typography/Footer", module).addWithJSX(
  "Basic Footer",
  wInfo(`

  ### Notes

  This is a Label

  ### Usage
  ~~~js
  <Footer
    title="Test" 
  />
  ~~~`)(() => <Footer title="Test" />)
);
