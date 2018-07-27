import * as React from "react";
import styled from "styled-components";

interface Props {
  /** Data should be passed as a string[]  */
  data: string[];
  /**  this.chapters  */
  onChange?: () => any;
}

// This is an example of a styled component
const StyledDropdown = styled.select`
  font-size: 1.5em;
`;

export const Dropdown = (props: Props) => {
  let { data, onChange } = props;
  onChange =
    typeof onChange === "function" ? onChange : () => console.log("Working!");
  return (
    <StyledDropdown key={1} onChange={onChange}>
      <option> Choose an option</option>
      {data.map((option: string, i) => <option key={i}>{option}</option>)}
    </StyledDropdown>
  );
};
