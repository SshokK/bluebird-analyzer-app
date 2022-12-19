import type {useReactTable} from "@tanstack/react-table";

export type TableLoaderProps = {
  table: ReturnType<typeof useReactTable<object>>;
  isLoading?: boolean;
}