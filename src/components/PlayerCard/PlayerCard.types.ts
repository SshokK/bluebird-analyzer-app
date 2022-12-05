import type {PlayerSchema} from "features/players/players.api.types";
import {CardProps} from "../Card";

export type PlayerCardProps = {
  player: PlayerSchema;
  elevation?: CardProps['elevation'];
  isAnimated?: CardProps['isAnimated'];
  animationDelay?: CardProps['animationDelay'];
}