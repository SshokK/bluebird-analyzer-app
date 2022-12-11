import type {CardProps} from "./Card.types";

import React, {forwardRef} from 'react';
import { Card as MUICard } from '@mui/material'
import classnames from 'classnames';
import {Animation, ANIMATION_TYPES} from "../Animation";
import {Avatar, AVATAR_SIZES} from "../Avatar";
import {AvatarGroup} from "../AvatarGroup";
import './card.scss';

export const Card = forwardRef<HTMLDivElement, CardProps>(({
  avatars,
  elevation,
  classNames,
  isSquared,
  isAnimated,
  isFullHeight,
  animationDelay,
  children,
  ...props
}, ref) => {
  const content = (
    <div className={classnames("BB-card__container", {
      "BB-card__container--with-avatars": Boolean(avatars?.length),
      "BB-card__container--is-full-height": isFullHeight
    })}>
      {Boolean(avatars?.length) && (
        <AvatarGroup classNames={{
          container: classnames('BB-card__avatar-container', classNames?.avatarContainer)
        }}>
          {avatars?.map(({ src, alt }) => (
            <Avatar
              key={src}
              src={src}
              size={AVATAR_SIZES.MEDIUM}
              alt={alt}
            />
          ))}
        </AvatarGroup>
      )}
      <MUICard
        ref={ref}
        square={isSquared}
        elevation={elevation}
        classes={{
          root: classnames("BB-card", classNames?.container, {
            "BB-card--with-avatars": Boolean(avatars?.length),
            "BB-card--is-full-height": isFullHeight
          })
        }}
        {...props}
      >
        {children}
      </MUICard>
    </div>
  )

  if (isAnimated) {
    return (
      <Animation
        type={ANIMATION_TYPES.GROW}
        shouldAppear
        animationDelay={animationDelay}
      >
        {content}
      </Animation>
    )
  }

  return content
})