import React from "react";

import { storiesOf } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { wInfo } from "../storyutils";

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
