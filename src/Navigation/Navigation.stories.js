import React from "react";

import { storiesOf } from "@storybook/react";
import { Navigation } from "./Navigation";
import { wInfo } from "../storyutils";

storiesOf("Components/Navigation", module).addWithJSX(
  "Navigation",
  wInfo(`

  ### Notes

  ### Usage
  ~~~js
  <Navigation 

  />
  
  ~~~`)(() => <Navigation />)
);
