import type {useReactTable} from "@tanstack/react-table";

export type TableBodyProps = {
  table: ReturnType<typeof useReactTable<object>>;
  noDataMessage?: string;
  isLoading?: boolean;
}