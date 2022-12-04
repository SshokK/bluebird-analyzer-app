import type {FC, ReactNode} from "react";
import type {StatusCellProps} from "./StatusCell.types";

import {PROXY_STATUSES} from "features/proxies/proxies.constants";
import { TYPOGRAPHY_TYPES, TYPOGRAPHY_STATUS } from "components";

import {Typography } from "components";

export const StatusCell: FC<StatusCellProps> = ({ getValue, renderValue }) => {
  console.log(getValue())
  return (
    <Typography
      type={TYPOGRAPHY_TYPES.OVERLINE}
      status={{
        [PROXY_STATUSES.WORKING]: TYPOGRAPHY_STATUS.SUCCESS,
        [PROXY_STATUSES.DEAD]: TYPOGRAPHY_STATUS.ERROR
      }[getValue() as PROXY_STATUSES]}
    >
      {renderValue() as ReactNode}
    </Typography>
  )
}