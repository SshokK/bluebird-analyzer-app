import type {TableColumn} from "../Table.types";
import type {ColumnDef as ReactTableColumnDef} from "@tanstack/react-table";

import {createColumnHelper} from "@tanstack/react-table";
import {CHECKBOX_COLUMN_ID, COLUMN_TYPES} from "../Table.constants";
import {TableCheckboxCell} from "../elements";

export const formatColumns = ({
  columns,
  areRowsSelectable
}: {
  columns: TableColumn[];
  areRowsSelectable: boolean;
}): ReactTableColumnDef<object, any>[] => {
  const columnHelper = createColumnHelper<object>()

  const tableColumns =  columns.map(column => {
    if (column.type === COLUMN_TYPES.DISPLAY_COLUMN) {
      return columnHelper.display({
        id: column.key,
        header: () => column.title,
        cell: column.CellComponent,
        meta: column,
      })
    }

    return columnHelper.accessor((row) => row[column.key as keyof typeof row], {
      id: column.key,
      header: () => column.title,
      cell: column.CellComponent ?? ((data) => data.getValue()),
      meta: column,
      enableSorting: Boolean(column.sortKey),
    })
  }) as ReactTableColumnDef<object, any>[];

  if (areRowsSelectable) {
    tableColumns.unshift(columnHelper.display({
      id: CHECKBOX_COLUMN_ID,
      cell: TableCheckboxCell,
      meta: {}
    }))
  }

  return tableColumns
}

export const getPage = ({ offset, limit }: {
  offset: number;
  limit: number;
}): number => {
  return Math.floor((offset + limit) / limit);
};

export const getPageIndex = ({ offset, limit }: {
  offset: number;
  limit: number;
}): number => {
  const page = getPage({
    offset,
    limit
  })

  return page > 0 ? page - 1 : 0
};