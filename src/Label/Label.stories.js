import React from "react";

import { storiesOf } from "@storybook/react";
import { Label } from "./Label";
import { wInfo } from "../storyutils";

storiesOf("Components/Label", module).addWithJSX(
  "Label",
  wInfo(`

  ### Notes

  buttonType can be Primary, Secondary, Success, Warning or Danger

  ### Usage
  ~~~js
  <Label
    title="Test" 
    buttonType={"Primary"} 
    inverted={false}
  />
  ~~~`)(() => <Label title="Test" buttonType={"Primary"} inverted={false} />)
);
