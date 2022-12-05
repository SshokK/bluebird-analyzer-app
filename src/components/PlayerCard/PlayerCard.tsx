import type {FC} from "react";
import type {PlayerCardProps} from "./PlayerCard.types";

import React from 'react';
import {Card} from "../Card";
import {Typography, TYPOGRAPHY_TYPES} from "../Typography";
import './player-card.scss';

export const PlayerCard: FC<PlayerCardProps> = ({
  player,
  elevation,
  isAnimated,
  animationDelay
}) => {
  return (
    <Card
      avatars={[{
        src: player.imageUrl ?? '',
        alt: player.name
      }]}
      elevation={elevation}
      isAnimated={isAnimated}
      animationDelay={animationDelay}
    >
      <div className="BB-player-card__container">
        <Typography type={TYPOGRAPHY_TYPES.SUBTITLE1} shouldTruncate>
          {player.name}
        </Typography>
      </div>
    </Card>
  )
}