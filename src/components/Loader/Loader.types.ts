import {LOADER_SIZES} from "./Loader.constants";

export type LoaderProps = {
  /**
   *
   * If set to true, loader will stretch to parent dimensions
   *
   */
  shouldFitContainer?: boolean;
  /**
   *
   * Loader size
   *
   */
  size?: LOADER_SIZES;
  /**
   *
   * Shows loader if true
   *
   */
  isVisible?: boolean;
}