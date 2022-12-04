import type {FC, ReactNode} from "react";
import type {TableCellContentProps} from "./TableCellContent.types";

import React from 'react';

import {COLUMN_DATA_TYPES, COLUMN_TYPES} from "../../../../../../Table.constants";
import {DATE_FORMATS} from "constants/global.constants";

import * as utils from "utils";
import {Typography, TYPOGRAPHY_TYPES, Avatar} from "components";

export const TableCellContent: FC<TableCellContentProps> = ({
  column,
  cellContent,
  cellValue
}) => {
  if (!cellValue && column.type === COLUMN_TYPES.DATA_COLUMN) {
    return <>-</>
  }

  if (column.dataType === COLUMN_DATA_TYPES.TEXT) {
    return (
      <Typography type={TYPOGRAPHY_TYPES.BODY2}>
        {cellValue as ReactNode}
      </Typography>
    )
  }

  if (column.dataType === COLUMN_DATA_TYPES.DATE_TIME) {
    return (
      <>
        <Typography type={TYPOGRAPHY_TYPES.BODY2}>
          {utils.formatDate({
            date: cellValue,
            format: DATE_FORMATS.LOCALIZED_DATE_TIME
          })}
        </Typography>
      </>
    )
  }

  if (column.dataType === COLUMN_DATA_TYPES.DATE) {
    return (
      <>
        <Typography type={TYPOGRAPHY_TYPES.BODY2}>
          {utils.formatDate({
            date: cellValue,
            format: DATE_FORMATS.LOCALIZED_DATE
          })}
        </Typography>
      </>
    )
  }

  if (column.dataType === COLUMN_DATA_TYPES.URL) {
    return (
      <a href={cellValue as string} target="_blank" rel="noreferrer">
        {cellValue as string}
      </a>
    )
  }

  if (column.dataType === COLUMN_DATA_TYPES.AVATAR) {
    return (
      <Avatar
        src={cellValue as string}
        alt={cellValue as string}
      />
    )
  }

  return <>{cellContent}</>
}