import type {TextFieldProps} from "../TextField";

export type NumberFieldProps = Omit<TextFieldProps, 'inputType' | 'onChange'> & {
  onChange?: (value: number) => void;
  minValue?: number;
  maxValue?: number;
}