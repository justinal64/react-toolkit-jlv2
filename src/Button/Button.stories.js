import React from "react";

import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { wInfo } from "../utils";
import { text, boolean } from "@storybook/addon-knobs/react";

storiesOf("Components/Button", module).addWithJSX(
  "Button",
  wInfo(`

  ### Notes

  buttonType can be Primary, Secondary, Success, Warning or Danger

  ### Usage
  ~~~js
  <Button 
    title="Title" 
    font={1} 
    inverted={false} 
    disabled={false} 
    block={true}
    buttonType="Primary"
    onClick={() => console.log("test")}
  />
  
  ~~~`)(() => (
    <Button
      title="Title"
      font={1}
      inverted={false}
      disabled={false}
      block={true}
      buttonType="Primary"
      onClick={() => console.log("test")}
    />
  ))
);
