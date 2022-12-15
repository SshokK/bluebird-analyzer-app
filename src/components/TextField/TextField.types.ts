import type {TEXT_FIELD_INPUT_TYPES} from "./TextField.constants";
import type { TextFieldProps as MUITextFieldProps } from '@mui/material';
import type {TEXT_FIELD_SIZES} from "./TextField.constants";

export type TextFieldProps = {
  value?: string | number;
  inputType?: TEXT_FIELD_INPUT_TYPES;
  size?: TEXT_FIELD_SIZES;
  onChange?: (value: string) => void;
  onBlur?: MUITextFieldProps['onBlur'];
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isMultiline?: boolean;
  maxLinesCount?: number;
  minLinesCount?: number;
  shouldEnableAutoFocus?: boolean;
  shouldEnableAutoComplete?: boolean;
  inputProps?: MUITextFieldProps['inputProps'];
  classNames?: {
    container?: string;
  }
}