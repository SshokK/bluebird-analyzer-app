import type {ReactNode} from "react";

export type CardsContainerProps = {
  title?: ReactNode;
  titleActions?: ReactNode;
  children?: ReactNode;
  isLoading?: boolean;
  isAnimated?: boolean;
  animationDelay?: number;
  shouldShowNoDataMessage?: boolean;
  shouldDisableWrap?: boolean;
  isFullHeight?: boolean;
  noDataMessage?: ReactNode;
  classNames?: {
    outerContainer?: string;
    container?: string;
    cardsContainer?: string;
    noDataMessage?: string;
  }
}