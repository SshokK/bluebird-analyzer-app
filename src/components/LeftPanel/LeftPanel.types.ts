import type {ReactNode} from "react";
import type {ClickablePaperProps} from "components";

export type LeftPanelOption = {
  value?: unknown;
  label?: ReactNode;
  icon?: ReactNode;
  link?: string;
  isDisabled?: boolean;
  isRestricted?: boolean;
}

export type LeftPanelProps = {
  options?: LeftPanelOption[];
  onOptionClick?: (option: LeftPanelOption) => ClickablePaperProps['onClick'];
  onOptionRestrictedClick?: (option: LeftPanelOption) => ClickablePaperProps['onRestrictedClick'];
  isLoading?: boolean;
}