import type {ComponentProps, ReactNode} from "react";
import type {Drawer} from "@mui/material";
import type {DRAWER_ANCHOR_POSITION, DRAWER_TYPES} from "./Drawer.constants";

export type DrawerProps = {
  /**
   * Drawer type
   */
  type?: DRAWER_TYPES;
  /**
   * Drawer anchor
   */
  anchorPosition?: DRAWER_ANCHOR_POSITION;
  /**
   * Drawer content
   */
  children?: ReactNode;
  /**
   * If true, the backdrop is not rendered.
   */
  shouldHideBackdrop?: boolean;
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
   * Drawer class name
   */
  classNames?: {
    container?: string;
    paper?: string;
    content?: string;
  };
}