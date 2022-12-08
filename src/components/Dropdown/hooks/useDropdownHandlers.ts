import type { DropdownProps } from '../Dropdown.types';
import type { DropdownData } from './useDropdownData.types';
import type {DropdownHandlers} from "./useDropdownHandlers.types";

export const useDropdownHandlers = ({
  props,
  localActions
}: {
  props: Pick<DropdownProps, 'onClose'>;
  localActions: DropdownData['localActions'];
}) => {
  const handleClick: DropdownHandlers['handleClick'] = (e) => {
    e.preventDefault();
    e.stopPropagation();

    localActions.setOpenState(true);
  };

  const handleClose: DropdownHandlers['handleClose'] = () => {
    localActions.setOpenState(false);
    props.onClose?.();
  };

  return {
    handleClick,
    handleClose
  };
};
