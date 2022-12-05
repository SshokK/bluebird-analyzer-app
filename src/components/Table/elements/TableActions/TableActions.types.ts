import type {useReactTable} from "@tanstack/react-table";
import type {TableProps} from "../../Table.types";

export type TableActionsProps = {
  table: ReturnType<typeof useReactTable<object>>;
  actions?: TableProps['actions'];
  limit?: TableProps['limit'];
  totalCount?: number;
}