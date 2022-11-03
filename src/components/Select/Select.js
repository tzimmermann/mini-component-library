import React, { useState } from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const [id] = useState(() => Date.now());

  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <VisuallyHidden>
        <label htmlFor={id}>{label}</label>
      </VisuallyHidden>
      <NativeSelectWrapper id={id} value={value} onChange={onChange}>
        {children}
      </NativeSelectWrapper>
      <SelectedValue>{displayedValue}</SelectedValue>
      <Icon id="chevron-down" size={24} strokeWidth={2} />
    </SelectWrapper>
  );
};

const SelectedValue = styled.span`
  padding-right: 24px;
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  position: relative;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

// The native <select> element is not visible, it is only here to capture click
// events to trigger the native options overlay. The actual selected value is rendered
// by `SelectedValue`.
const NativeSelectWrapper = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: transparent;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  appearance: none;
`;

export default Select;
