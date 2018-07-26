import React from "react";

import { storiesOf } from "@storybook/react";
import { Label } from "./Label";
import { Button } from "../Button/Button";
import { wInfo } from "../../utils";
import { text, boolean } from "@storybook/addon-knobs/react";

storiesOf("Components/Label", module).addWithJSX(
  "Basic Label",
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
