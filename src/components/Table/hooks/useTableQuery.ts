import type {TableProps, TableQueryFn, TableQuerySelectorReturn} from "../Table.types";
import type {TableData} from "./useTableData.types";

import {SORT_ORDERS} from "../../../constants/global.constants";
import {TABLE_LIMIT} from "../Table.constants";

import {useQuery} from "@tanstack/react-query";
import {useMemo} from "react";

export const useTableQuery = ({
  props,
  localState
}: {
  props: Pick<TableProps, 'queryOptions' | 'queryParams'>;
  localState: TableData['localState'];
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
    keepPreviousData: true,
    queryFn: () => props.queryOptions?.queryFn(queryParams),
    queryKey: [...(props.queryOptions?.queryKey ?? []), queryParams]
  })
}