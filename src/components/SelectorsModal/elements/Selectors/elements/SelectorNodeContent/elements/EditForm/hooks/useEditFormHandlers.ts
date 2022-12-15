import type {EditFormHandlers} from "./useEditFormHandlers.types";
import type {EditFormProps} from "../EditForm.types";

import {useCallback} from "react";

export const useEditFormHandlers = ({
  props
}: {
  props: Pick<EditFormProps, 'onSelectorChange' | 'crawlerPageSelector'>
}): EditFormHandlers => {
  const { onSelectorChange } = props;

  const handleChange: EditFormHandlers['handleChange'] = useCallback(({
    field,
    onFormatOutputValue
  }) => (value) => {
    onSelectorChange({
      ...props.crawlerPageSelector,
      [field]: onFormatOutputValue(value)
    })
  }, [onSelectorChange, props.crawlerPageSelector]);

  return {
    handleChange
  }
}