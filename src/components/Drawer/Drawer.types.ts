import type {ComponentProps, ReactNode} from "react";
import type {Drawer} from "@mui/material";
import type {DRAWER_PLACEMENT, DRAWER_TYPES} from "./Drawer.constants";

export type DrawerProps = {
  /**
   * Drawer type
   */
  type?: DRAWER_TYPES;
  /**
   * Drawer anchor
   */
  placement?: DRAWER_PLACEMENT;
  /**
   * Drawer content
   */
  children?: ReactNode;
  /**
   * If true, the backdrop is not rendered.
   */
  shouldHideBackdrop?: boolean;
  /**
   * If true, backdrop becomes invisible
   */
  isBackdropInvisible?: boolean;
  /**
   * If true, will render drawer as a card
   */
  isCard?: boolean;
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: ComponentProps<typeof Drawer>['onClose'];
  /**
   * If true, the component is shown.
   */
  isOpen?: boolean;
  /**
   * Transition timeout
   */
  animationDelay?: number;
  /**
   * Drawer class name
   */
  classNames?: {
    container?: string;
    paper?: string;
    content?: string;
    backdrop?: string;
  };
}