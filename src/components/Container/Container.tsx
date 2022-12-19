import type {ContainerProps} from "./Container.types";
import type {FC} from 'react';

import React from 'react';
import {CONTAINER_ORIENTATIONS, CONTAINER_TYPES} from "./Container.constants";
import {Typography, TYPOGRAPHY_ALIGNMENT, TYPOGRAPHY_TYPES} from "../Typography";
import classnames from 'classnames';
import {Animation, ANIMATION_TYPES, Card, Loader} from "components";
import {Title} from "./elements";
import './container.scss';

export const Container: FC<ContainerProps> = ({
  type,
  title,
  titleActions,
  isLoading,
  children,
  isAnimated,
  animationDelay,
  animationTiming,
  shouldShowNoDataMessage,
  isWithoutPadding,
  isWithoutHorizontalPadding,
  isWrapDisabled,
  isSquared,
  noDataMessage,
  isFullHeight,
  orientation,
  elevation,
  classNames
}) => {
  const content = (
    <div className={classnames("BB-container__outer-container", classNames?.outerContainer, {
      "BB-container__outer-container--is-full-height": isFullHeight,
      "BB-container__outer-container--is-without-left-padding": !title,
      "BB-container__outer-container--is-without-padding": !title || isWithoutPadding,
      "BB-container__outer-container--is-without-horizontal-padding": isWithoutHorizontalPadding
    })}>
      <Card
        elevation={elevation}
        isFullHeight={isFullHeight}
        isSquared={isSquared}
        classNames={{
          container: classnames("BB-container__container", classNames?.container, {
            "BB-container__container--is-without-padding": isWithoutPadding,
            [`BB-container__container--is-${type ?? CONTAINER_TYPES.PRIMARY}`]: true
          })
        }}
      >
        <Loader isVisible={isLoading} shouldFitContainer />
        <Title title={title} titleActions={titleActions} />
        {!isLoading && shouldShowNoDataMessage && (
          <Animation type={ANIMATION_TYPES.GROW} shouldAppear>
            <div className={classnames("BB-container__no-data-message", classNames?.noDataMessage, {
              "BB-container__no-data-message--without-padding": !title
            })}>
              <Typography type={TYPOGRAPHY_TYPES.BODY2} alignment={TYPOGRAPHY_ALIGNMENT.CENTER}>
                {noDataMessage}
              </Typography>
            </div>
          </Animation>
        )}
        {!shouldShowNoDataMessage && children && (
          <Animation type={ANIMATION_TYPES.GROW} shouldAppear>
            <div className={classnames("BB-container__cards-container", classNames?.cardsContainer, {
              "BB-container__cards-container--is-wrap-disabled": isWrapDisabled,
              "BB-container__cards-container--id-column": orientation === CONTAINER_ORIENTATIONS.COLUMN,
              "BB-container__cards-container--is-full-height": isFullHeight,
              "BB-container__cards-container--is-without-top-padding": !title,
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

Container.defaultProps = {
  title: null,
  isLoading: false,
  isAnimated: true,
  shouldShowNoDataMessage: false,
  noDataMessage: 'No data'
} as ContainerProps