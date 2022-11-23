import type {ReactNode} from "react";

export type CardsContainerProps = {
  title?: ReactNode;
  children?: ReactNode;
  isLoading?: boolean;
  isAnimated?: boolean;
  animationDelay?: number;
  shouldShowNoDataMessage?: boolean;
  noDataMessage?: ReactNode;
  classNames?: {
    outerContainer?: string;
    container?: string;
    cardsContainer?: string;
    noDataMessage?: string;
  }
}