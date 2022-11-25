import type {useReactTable} from "@tanstack/react-table";

export type TableHeaderProps = {
  table: ReturnType<typeof useReactTable<object>>;
}