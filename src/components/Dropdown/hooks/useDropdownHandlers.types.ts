import type {MouseEvent} from "react";

export type DropdownHandlers = {
  handleClick: (e: MouseEvent<HTMLDivElement>) => void;
  handleClose: () => void;
}