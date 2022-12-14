import type {SelectProps} from "../Select";
import type {DATA_SELECT_DATA_TYPES} from "./DataSelect.constants";

export type DataSelectProps = Omit<SelectProps, 'options' | 'label' | 'isLoading' | 'queryOptions'> & {
  dataType?: DATA_SELECT_DATA_TYPES;
  shouldHideLabel?: boolean;
}