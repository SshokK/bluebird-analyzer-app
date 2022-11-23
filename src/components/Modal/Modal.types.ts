import type {ReactNode} from "react";

export type ModalProps = {
  title?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  children?: ReactNode;
  isLoading?: boolean;
  isSubmitDisabled?: boolean;
  shouldRenderFooter?: boolean;
  onSubmit?: () => void;
}