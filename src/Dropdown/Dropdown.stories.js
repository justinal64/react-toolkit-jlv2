import React from "react";

import { storiesOf } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { wInfo } from "../utils";
import { text, boolean } from "@storybook/addon-knobs/react";

storiesOf("Components/Dropdown", module).addWithJSX(
  "Dropdown",
  wInfo(`

  ### Usage
  ~~~js
  <Dropdown
    options={["test", "another test"]}
    onChange={() => console.log("test")}
  />
  ~~~`)(() => (
    <Dropdown
      data={["Genesis", "Exodus"]}
      onChange={() => console.log("test")}
    />
  ))
);
