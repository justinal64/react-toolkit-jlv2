import React from "react";

import { storiesOf } from "@storybook/react";
import { Label } from "./Label";
import { wInfo } from "../storyutils";

storiesOf("Components/Label", module).addWithJSX(
  "Label",
  wInfo(`

  ### Notes

  This is a Label

  ### Usage
  ~~~js
  <Label
    title="Test" 
    color="pink"
  />
  ~~~`)(() => <Label title="Test" color="black" />)
);
