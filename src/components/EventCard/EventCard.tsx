import type {EventCardProps} from "./EventCard.types";

import React from 'react';
import { Paper} from "@mui/material";
import {Avatar, AVATAR_SIZES} from "../Avatar";
import {AvatarGroup} from "../AvatarGroup";
import classnames from 'classnames';
import * as dateUtils from "utils";
import {DATE_FORMATS} from "../../constants/global.constants";
import {Typography, TYPOGRAPHY_TYPES} from "../Typography";
import {IconEvent} from "../Icons";
import { Animation, ANIMATION_TYPES} from "../Animation";
import './event-card.scss';

export const EventCard = ({ event, players, isAnimated, animationDelay, classNames, children }: EventCardProps) => {
  return (
    <Animation type={ANIMATION_TYPES.GROW} shouldAppear={isAnimated} animationDelay={animationDelay} >
      <div className={classnames('BB-event-card', classNames?.container)}>
        <AvatarGroup classNames={{
          container: classnames('BB-event-card__avatar-container', classNames?.avatarContainer)
        }}>
          {players.map(player => (
            <Avatar
              key={player.id}
              size={AVATAR_SIZES.LARGE}
              alt={player.name}
            />
          ))}
        </AvatarGroup>
        <Paper
          elevation={2}
          classes={{ root: classnames(classNames?.paper, {
            'BB-event-card__paper': true,
            'BB-event-card__paper--is-finished-event': dateUtils.isAfter({
              dateA: new Date(),
              dateB: event.date
            }),
            'BB-event-card__paper--is-ongoing-event': false, // TODO Add when DB will support this
          })
        }}>
          <IconEvent className="BB-event-card__date-icon" />
          <Typography type={TYPOGRAPHY_TYPES.SUBTITLE2}>
            Starts at
          </Typography>
          <Typography
            type={TYPOGRAPHY_TYPES.SUBTITLE1}
            className={classnames('BB-event-card__date', classNames?.date)}
          >
            {dateUtils.formatDate({
              date: event.date,
              format: DATE_FORMATS.LOCALIZED_TIME
            })}
          </Typography>
          {children}
        </Paper>
      </div>
    </Animation>
  )
}

EventCard.defaultProps = {
  isAnimated: false,
  animationDelay: 0
}