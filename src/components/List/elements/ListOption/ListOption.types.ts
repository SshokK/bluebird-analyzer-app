import type {ListOption} from "../../List.types";

export type ListOptionProps = {
  option: ListOption;
  isSelected: boolean;
  onClick: () => void;
}