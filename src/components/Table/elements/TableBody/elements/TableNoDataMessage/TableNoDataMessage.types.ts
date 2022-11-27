import type {useReactTable} from "@tanstack/react-table";

export type TableNoDataMessageProps = {
  table: ReturnType<typeof useReactTable<object>>;
  children?: string;
}