import type {ListOption} from "../../List.types";

export type ListOptionProps = {
  option: ListOption;
  isSelected: boolean;
  isHorizontal?: boolean;
  onClick: () => void;
}