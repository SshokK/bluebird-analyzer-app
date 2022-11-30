import type { AutocompleteProps } from "@mui/material";

export type SelectHandlers = {
  handleChange: Required<AutocompleteProps<unknown, boolean, boolean, boolean>>['onChange'];
  handleInputChange: Required<AutocompleteProps<unknown, boolean, boolean, boolean>>['onInputChange'];
  handleOptionsPropChange: () => void;
  handleFocusToggle: (isFocused: boolean) => () => void;
}