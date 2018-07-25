import React from "react";

import { storiesOf } from "@storybook/react";
import { Label } from "./Label";
import { Button } from "../Button/Button.tsx";
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
    title="test" 
    color="pink" optional
  />
  ~~~`)(() => (
    <Button
      label={text("label", "Enroll")}
      disabled={boolean("disabled", false)}
      onClick={() => alert("hello there")}
    />
    // <Label title="test" />
  ))
);
