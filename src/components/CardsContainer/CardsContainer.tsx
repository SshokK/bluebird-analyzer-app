import type {CardsContainerProps} from "./CardsContainer.types";
import type {FC} from 'react';

import React from 'react';
import {CARDS_CONTAINER_ORIENTATIONS} from "./CardsContainer.constants";
import {Typography, TYPOGRAPHY_ALIGNMENT, TYPOGRAPHY_TYPES} from "../Typography";
import classnames from 'classnames';
import {Animation, ANIMATION_TYPES, Card, Loader} from "components";
import {Title} from "./elements";
import './cards-container.scss';

export const CardsContainer: FC<CardsContainerProps> = ({
  title,
  titleActions,
  isLoading,
  children,
  isAnimated,
  animationDelay,
  animationTiming,
  shouldShowNoDataMessage,
  isWithoutPadding,
  isWrapDisabled,
  noDataMessage,
  isFullHeight,
  orientation,
  elevation,
  classNames
}) => {
  const content = (
    <div className={classnames("BB-cards-container__outer-container", classNames?.outerContainer, {
      "BB-cards-container__outer-container--is-full-height": isFullHeight,
      "BB-cards-container__outer-container--is-without-left-padding": !title,
      "BB-cards-container__outer-container--is-without-padding": isWithoutPadding
    })}>
      <Card
        elevation={elevation}
        isFullHeight={isFullHeight}
        classNames={{
          container: classnames("BB-cards-container__container", classNames?.container, {
            "BB-cards-container__container--is-without-padding": isWithoutPadding
          })
        }}
      >
        <Loader isVisible={isLoading} shouldFitContainer />
        <Title title={title} titleActions={titleActions} />
        {!isLoading && shouldShowNoDataMessage && (
          <Animation type={ANIMATION_TYPES.GROW} shouldAppear>
            <div className={classnames("BB-cards-container__no-data-message", classNames?.noDataMessage, {
              "BB-cards-container__no-data-message--without-padding": !title
            })}>
              <Typography type={TYPOGRAPHY_TYPES.BODY2} alignment={TYPOGRAPHY_ALIGNMENT.CENTER}>
                {noDataMessage}
              </Typography>
            </div>
          </Animation>
        )}
        {!shouldShowNoDataMessage && children && (
          <Animation type={ANIMATION_TYPES.GROW} shouldAppear>
            <div className={classnames("BB-cards-container__cards-container", classNames?.cardsContainer, {
              "BB-cards-container__cards-container--is-wrap-disabled": isWrapDisabled,
              "BB-cards-container__cards-container--id-column": orientation === CARDS_CONTAINER_ORIENTATIONS.COLUMN,
              "BB-cards-container__cards-container--is-full-height": isFullHeight,
              "BB-cards-container__cards-container--is-without-top-padding": !title,
            })}>
              {children}
            </div>
          </Animation>
        )}
      </Card>
    </div>
  )

  if (isAnimated) {
    return (
      <Animation
        type={ANIMATION_TYPES.GROW}
        shouldAppear
        animationDelay={animationDelay}
        animationTiming={animationTiming}
      >
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