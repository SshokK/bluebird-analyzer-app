import type {FC, ReactNode} from "react";
import type {DelayCellProps} from "./DelayCell.types";

import React from 'react';
import {Typography, TYPOGRAPHY_STATUS, TYPOGRAPHY_TYPES} from "components";
import './delay-cell.scss';

export const DelayCell: FC<DelayCellProps> = ({ cell }) => {
  const delay = Number(cell.getValue() ?? 0);

  let status;

  if (delay < 500) {
    status = TYPOGRAPHY_STATUS.SUCCESS
  } else if (delay < 1500) {
    status = TYPOGRAPHY_STATUS.WARNING
  } else {
    status = TYPOGRAPHY_STATUS.ERROR;
  }

  return (
    <div className="BB-regional-proxies-delay-cell">
      <Typography
        type={TYPOGRAPHY_TYPES.OVERLINE}
        status={status}
      >
        {cell.renderValue() as ReactNode}
      </Typography>
      <Typography type={TYPOGRAPHY_TYPES.CAPTION}>
        {' '}ms
      </Typography>
    </div>
  )
}