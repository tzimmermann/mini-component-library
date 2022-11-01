import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <NativeSelectWrapper value={value} onChange={onChange}>
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
