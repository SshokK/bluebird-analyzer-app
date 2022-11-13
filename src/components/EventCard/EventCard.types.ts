import type {PlayerSchema} from "features/players/players.api.types";
import type {ReactNode} from "react";
import type {EventSchema} from "../../features/events/events.api.types";

export type EventCardProps = {
  /**
   * Event
   */
  event: EventSchema;
  /**
   * Event players
   */
  players: PlayerSchema[];
  /**
   * If true, enables fade in animation
   */
  isAnimated?: boolean;
  /**
   * Animation delay
   */
  animationDelay?: number;
  /**
   * Elements to render inside card
   */
  children?: ReactNode;
  /**
   * Custom class names
   */
  classNames?: {
    container?: string;
    paper?: string;
    avatarContainer?: string;
    date?: string;
  }
}