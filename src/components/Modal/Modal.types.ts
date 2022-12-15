import type {ReactNode} from "react";
import type {MODAL_SIZES} from "./Modal.constants";

export type ModalProps = {
  size?: MODAL_SIZES
  title?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  children?: ReactNode;
  isLoading?: boolean;
  isSubmitDisabled?: boolean;
  shouldRenderFooter?: boolean;
  footerElements?: ReactNode;
  onSubmit?: () => void;
  classNames?: {
    container?: string;
    innerContainer?: string;
    closeButton?: string;
    content?: string;
    form?: string;
    header?: string;
    body?: string;
    footer?: string;
  }
}