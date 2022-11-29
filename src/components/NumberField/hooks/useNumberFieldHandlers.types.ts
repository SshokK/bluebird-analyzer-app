import type { TextFieldProps } from '../../TextField';

export type NumberFieldHandlers = {
  handleChange: TextFieldProps['onChange'];
  handleBlur: TextFieldProps['onBlur'];
};
