import type {TableCheckboxCellProps} from "./TableCheckboxCell.types";
import type {FC} from 'react';

import React from 'react';
import {Checkbox} from "../../../Checkbox";

export const TableCheckboxCell: FC<TableCheckboxCellProps> = ({
  row,
}) => {
  return (
    <Checkbox
      isChecked={row.getIsSelected()}
      isIndeterminate={row.getIsSomeSelected()}
      onChange={row.getToggleSelectedHandler()}
    />
  )
}