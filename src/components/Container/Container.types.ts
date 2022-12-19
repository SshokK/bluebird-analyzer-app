import type {ReactNode} from "react";
import type {CONTAINER_ORIENTATIONS, CONTAINER_TYPES} from "./Container.constants";
import type {AnimationProps} from "../Animation";

export type ContainerProps = {
  type?: CONTAINER_TYPES;
  title?: ReactNode;
  titleActions?: ReactNode;
  children?: ReactNode;
  isLoading?: boolean;
  isAnimated?: boolean;
  animationDelay?: AnimationProps['animationDelay']
  animationTiming?: AnimationProps['animationTiming']
  shouldShowNoDataMessage?: boolean;
  isSquared?: boolean;
  isWithoutPadding?: boolean;
  isWithoutHorizontalPadding?: boolean;
  isWrapDisabled?: boolean;
  isFullHeight?: boolean;
  elevation?: number;
  noDataMessage?: ReactNode;
  orientation?: CONTAINER_ORIENTATIONS;
  classNames?: {
    outerContainer?: string;
    container?: string;
    cardsContainer?: string;
    noDataMessage?: string;
  }
}