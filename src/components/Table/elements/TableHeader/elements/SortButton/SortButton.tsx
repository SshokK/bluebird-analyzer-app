import type {FC} from "react";
import type {SortButtonProps} from "./SortButton.types";
import type {TableColumn} from "../../../../Table.types";

import React from 'react';
import {ICON_BUTTON_SIZES, IconButton} from "../../../../../IconButton";
import {IconSortAsc, IconSortDesc, IconSortInitial} from "../../../../../Icons";

export const SortButton: FC<SortButtonProps> = ({ column, onClick }) => {
  if (!(column.columnDef.meta as TableColumn)?.isSortable) {
    return null
  }

  const icon = {
    asc: <IconSortDesc />,
    desc: <IconSortAsc />,
    false: <IconSortInitial />
  }[`${column.getIsSorted()}`]

  return (
    <IconButton
      size={ICON_BUTTON_SIZES.SMALL}
      icon={icon}
      onClick={onClick}
    />
  )
}