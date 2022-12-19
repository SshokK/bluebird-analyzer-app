import type {FC, ReactNode} from "react";
import type {TableCellContentProps} from "./TableCellContent.types";

import React from 'react';

import { COLUMN_DATA_TYPES, COLUMN_TYPES, EMPTY_CELL_VALUE } from "../../../../../../Table.constants";
import { DATE_FORMATS } from "constants/global.constants";
import {ColorBall, TYPOGRAPHY_TYPES} from "components";

import {Typography, Avatar} from "components";

import * as utils from "utils";

export const TableCellContent: FC<TableCellContentProps> = ({
  column,
  cellContent,
  cellValue
}) => {
  if (!cellValue && column.type === COLUMN_TYPES.DATA_COLUMN) {
    return <>{EMPTY_CELL_VALUE}</>
  }

  const content = {
    [COLUMN_DATA_TYPES.COLOR]: (
      <ColorBall color={cellValue as string} />
    ),
    [COLUMN_DATA_TYPES.TEXT]: (
      <Typography type={TYPOGRAPHY_TYPES.BODY2} shouldTruncate>
        {cellValue as ReactNode}
      </Typography>
    ),
    [COLUMN_DATA_TYPES.DATE_TIME]: (
      <Typography type={TYPOGRAPHY_TYPES.BODY2} shouldTruncate>
        {utils.formatDate({
          date: cellValue,
          format: DATE_FORMATS.DATE_TIME
        })}
      </Typography>
    ),
    [COLUMN_DATA_TYPES.DATE]: (
      <Typography type={TYPOGRAPHY_TYPES.BODY2} shouldTruncate>
        {utils.formatDate({
          date: cellValue,
          format: DATE_FORMATS.DATE
        })}
      </Typography>
    ),
    [COLUMN_DATA_TYPES.URL]: (
      <Typography
        type={TYPOGRAPHY_TYPES.URL}
        shouldTruncate
      >
        {cellValue as string}
      </Typography>
    ),
    [COLUMN_DATA_TYPES.AVATAR]: (
      <Avatar
        src={cellValue as string}
        alt={cellValue as string}
      />
    )
  }[column.dataType as COLUMN_DATA_TYPES];

  return <>{content ?? cellContent ?? EMPTY_CELL_VALUE}</>
}