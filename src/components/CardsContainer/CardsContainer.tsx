import type {CardsContainerProps} from "./CardsContainer.types";
import type {FC} from 'react';

import React from 'react';
import {Typography, TYPOGRAPHY_TYPES} from "../Typography";
import classnames from 'classnames';
import {Animation, ANIMATION_TYPES, Card, Loader} from "components";
import './cards-container.scss';

export const CardsContainer: FC<CardsContainerProps> = ({
  title,
  titleActions,
  isLoading,
  children,
  isAnimated,
  animationDelay,
  shouldShowNoDataMessage,
  shouldDisableWrap,
  noDataMessage,
  isFullHeight,
  classNames
}) => {
  const content = (
    <div className={classnames("BB-cards-container__outer-container", classNames?.outerContainer, {
      "BB-cards-container__outer-container--is-full-height": isFullHeight
    })}>
      <Card classNames={{
        container: classnames("BB-cards-container__container", classNames?.container, {
          "BB-cards-container__container--is-full-height": isFullHeight
        })
      }}>
        <Loader isVisible={isLoading} shouldFitContainer />
        {title && (
          <span className={classnames("BB-cards-container__title-container")}>
            <span className={classnames("BB-cards-container__title")}>
              <Typography type={TYPOGRAPHY_TYPES.OVERLINE}>
                {title}
              </Typography>
            </span>
            {titleActions}
          </span>
        )}
        {!isLoading && shouldShowNoDataMessage && (
          <div className={classnames("BB-cards-container__no-data-message", classNames?.noDataMessage, {
            "BB-cards-container__no-data-message--without-padding": !title
          })}>
            <Typography type={TYPOGRAPHY_TYPES.BODY2}>
              {noDataMessage}
            </Typography>
          </div>
        )}
        {!shouldShowNoDataMessage && children && (
          <div className={classnames("BB-cards-container__cards-container", classNames?.cardsContainer, {
            "BB-cards-container__cards-container--is-wrap-disabled": shouldDisableWrap
          })}>
            {children}
          </div>
        )}
      </Card>
    </div>
  )

  if (isAnimated) {
    return (
      <Animation type={ANIMATION_TYPES.GROW} shouldAppear animationDelay={animationDelay}>
        {content}
      </Animation>
    )
  }

  return content
}

CardsContainer.defaultProps = {
  title: null,
  isLoading: false,
  isAnimated: true,
  shouldShowNoDataMessage: false,
  noDataMessage: 'No data'
} as CardsContainerProps