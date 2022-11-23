export type TextFieldProps = {
  value?: string | number;
  onChange?: (value: string) => void;
  label?: string;
  shouldEnableAutoComplete?: boolean;
  classNames?: {
    container?: string;
  }
}