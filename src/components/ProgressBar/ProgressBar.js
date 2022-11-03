import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const ProgressBar = ({ value, size }) => {
  const padding = size === "large" ? 4 : 0;
  // Value must be between 0 and 100.
  const clampedValue = Math.min(Math.max(value, 0), 100);
  return (
    <ProgressBarWrapper
      role="progressbar"
      aria-valuenow={clampedValue}
      style={{
        "--padding": `${padding}px`,
      }}
    >
      <Progress
        style={{
          "--barHeight": `${
            size === "small" ? 8 : size === "medium" ? 12 : 16
          }px`,
          "--width": `${(clampedValue / 100) * (370 - 2 * padding)}px`,
          "--borderRadiusRight":
            // From > 99.0 - 100, we scale the radius from 0 to 4px gradually.
            // <= 99 should not get any radius.
            `${Math.max(0, (clampedValue - 99) * 4)}px`,
        }}
      />
    </ProgressBarWrapper>
  );
};

const ProgressBarWrapper = styled.div`
  width: 370px;
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
`;

const Progress = styled.div`
  width: var(--width);
  height: var(--barHeight);
  background-color: ${COLORS.primary};
  border-radius: 4px var(--borderRadiusRight) var(--borderRadiusRight) 4px;
`;

export default ProgressBar;
