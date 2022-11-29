import type {TEXT_FIELD_INPUT_TYPES} from "./TextField.constants";
import type { TextFieldProps as MUITextFieldProps } from '@mui/material';

export type TextFieldProps = {
  value?: string | number;
  inputType?: TEXT_FIELD_INPUT_TYPES;
  onChange?: (value: string) => void;
  onBlur?: MUITextFieldProps['onBlur'];
  label?: string;
  shouldEnableAutoComplete?: boolean;
  inputProps?: MUITextFieldProps['inputProps'];
  classNames?: {
    container?: string;
  }
}