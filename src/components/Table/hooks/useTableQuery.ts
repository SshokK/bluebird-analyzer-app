import type {TableProps, TableQueryFn, TableQuerySelectorReturn} from "../Table.types";
import type {TableData} from "./useTableData.types";

import {SORT_ORDERS} from "../../../constants/global.constants";
import {TABLE_LIMIT} from "../Table.constants";

import {useQuery} from "@tanstack/react-query";
import {useMemo} from "react";
import {useReactTable} from "@tanstack/react-table";

export const useTableQuery = ({
  props,
  localState,
  localActions,
  table
}: {
  props: Pick<TableProps, 'queryOptions' | 'queryParams'>;
  localState: TableData['localState'];
  localActions: TableData['localActions'];
  table: ReturnType<typeof useReactTable<object>>;
}) => {
  const queryParams = useMemo(() => ({
    limit: TABLE_LIMIT,
    offset: localState.pagination.pageIndex * TABLE_LIMIT,
    ...Boolean(localState.sorting[0]) && {
      sortField: localState.sorting[0].id,
      sortOrder: localState.sorting[0].desc ? SORT_ORDERS.DESC : SORT_ORDERS.ASC
    },
    ...props.queryParams
  }), [localState.pagination.pageIndex, localState.sorting, props.queryParams])

  return useQuery<
    Awaited<ReturnType<TableQueryFn>>,
    Error,
    TableQuerySelectorReturn
  >({
    enabled: Boolean(props.queryOptions),
    ...props.queryOptions,
    onSuccess: (...args) => {
      localActions.setRows(args[0].rows ?? []);
      localActions.setTotalCount(args[0].totalCount ?? 0);

      props.queryOptions?.onSuccess?.(...args);
    },
    keepPreviousData: true,
    queryFn: () => props.queryOptions?.queryFn(queryParams),
    queryKey: [...(props.queryOptions?.queryKey ?? []), queryParams]
  })
}