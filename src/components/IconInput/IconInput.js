import React, { useState } from "react";
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
  const [id] = useState(() => Date.now());
  return (
    <InputWrapper
      style={{
        "--width": `${width}px`,
        "--paddingBottom": `${size === "small" ? 2 : 4}px`,
      }}
    >
      <VisuallyHidden>
        <label htmlFor={id}>{label}</label>
      </VisuallyHidden>
      <IconWrapper
        id={icon}
        size={size === "small" ? 14 : 20}
        strokeWidth={size === "small" ? 1 : 2}
      />
      <StyledInput
        id={id}
        type="text"
        placeholder={placeholder}
        style={{
          "--fontSize": `${size === "small" ? 14 : 18}px`,
        }}
      />
    </InputWrapper>
  );
};

const IconWrapper = styled(Icon)`
  position: absolute;
`;

const InputWrapper = styled.span`
  display: flex;
  align-items: center;
  width: var(--width);
  border-bottom: 1px solid ${COLORS.black};
  padding-bottom: var(--paddingBottom);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledInput = styled.input`
  border: none;
  flex: 1 auto;
  padding-left: 28px;
  color: ${COLORS.gray700};
  font-size: var(--fontSize);
  font-weight: 700;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    outline-offset: 8px;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
