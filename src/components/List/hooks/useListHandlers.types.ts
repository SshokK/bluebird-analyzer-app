import type {ListOption} from "../List.types";

export type ListHandlers = {
  handleOptionClick: (args: {
    option: ListOption,
    isSelected: boolean
  }) => () => void;
  handleSelectedOptionKeysPropChange: () => void;
}