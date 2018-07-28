import React from "react";

import { storiesOf } from "@storybook/react";
import { Navigation } from "./Navigation";
import { wInfo } from "../utils";
import { text, boolean } from "@storybook/addon-knobs/react";

storiesOf("Components/Navigation", module).addWithJSX(
  "Navigation",
  wInfo(`

  ### Notes

  buttonType can be Primary, Secondary, Success, Warning or Danger

  ### Usage
  ~~~js
  <Navigation 

  />
  
  ~~~`)(() => <Navigation />)
);
