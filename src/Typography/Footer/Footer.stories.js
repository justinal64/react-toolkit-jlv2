import React from "react";

import { storiesOf } from "@storybook/react";
import { Footer } from "./Footer";
import { wInfo } from "../../storyutils";

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
