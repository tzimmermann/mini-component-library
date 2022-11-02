import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({
  label,
  icon,
  width = 250,
  size = "small",
  placeholder,
}) => {
  return (
    <InputWrapper
      style={{
        "--width": `${width}px`,
        "--paddingBottom": `${size === "small" ? 2 : 4}px`,
      }}
    >
      <Icon
        id={icon}
        size={size === "small" ? 14 : 20}
        strokeWidth={size === "small" ? 1 : 2}
      />
      <StyledInput
        type="text"
        placeholder={placeholder}
        style={{
          "--fontSize": `${size === "small" ? 14 : 18}px`,
        }}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.span`
  display: flex;
  align-items: center;
  width: var(--width);
  border-bottom: 1px solid ${COLORS.black};
  padding-bottom: var(--paddingBottom);
  color: ${COLORS.gray700};

  & ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const StyledInput = styled.input`
  border: none;
  flex: 1 auto;
  padding-left: 10px;
  color: ${COLORS.gray700};
  font-size: var(--fontSize);
  font-weight: 700;
`;

export default IconInput;
