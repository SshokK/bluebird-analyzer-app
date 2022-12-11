import type {ReactNode} from "react";
import type {CARDS_CONTAINER_ORIENTATIONS} from "./CardsContainer.constants";
import type {AnimationProps} from "../Animation";

export type CardsContainerProps = {
  title?: ReactNode;
  titleActions?: ReactNode;
  children?: ReactNode;
  isLoading?: boolean;
  isAnimated?: boolean;
  animationDelay?: AnimationProps['animationDelay']
  animationTiming?: AnimationProps['animationTiming']
  shouldShowNoDataMessage?: boolean;
  isWithoutPadding?: boolean;
  isWrapDisabled?: boolean;
  isFullHeight?: boolean;
  elevation?: number;
  noDataMessage?: ReactNode;
  orientation?: CARDS_CONTAINER_ORIENTATIONS;
  classNames?: {
    outerContainer?: string;
    container?: string;
    cardsContainer?: string;
    noDataMessage?: string;
  }
}