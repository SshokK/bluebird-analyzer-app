import type {FC, ReactNode} from "react";
import type {StatusCellProps} from "./StatusCell.types";

import {CRAWLER_STATUSES} from "features/crawlers/crawlers.api.constants";
import { TYPOGRAPHY_TYPES, TYPOGRAPHY_STATUS } from "components";

import {Typography } from "components";

export const StatusCell: FC<StatusCellProps> = ({ getValue, renderValue }) => {
  return (
    <Typography
      type={TYPOGRAPHY_TYPES.OVERLINE}
      status={{
        [CRAWLER_STATUSES.ACTIVE]: TYPOGRAPHY_STATUS.SUCCESS,
        [CRAWLER_STATUSES.INACTIVE]: TYPOGRAPHY_STATUS.INITIAL,
        [CRAWLER_STATUSES.WAITING]: TYPOGRAPHY_STATUS.WARNING,
        [CRAWLER_STATUSES.FAILED]: TYPOGRAPHY_STATUS.ERROR,
        [CRAWLER_STATUSES.STOPPING]: TYPOGRAPHY_STATUS.WARNING
      }[getValue() as CRAWLER_STATUSES]}
    >
      {renderValue() as ReactNode}
    </Typography>
  )
}