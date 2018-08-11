import React from "react";

import { storiesOf } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";
import { wInfo } from "../storyutils";

storiesOf("Components/ProgressBar", module).addWithJSX(
  "ProgressBar",
  wInfo(`

  ### Notes

  This is a Label

  ### Usage
  ~~~js
  <Label
    title="Test" 
    color="pink"
  />
  ~~~`)(() => <ProgressBar title="Test" color="black" />)
);
