import type {CardsContainerProps} from "./CardsContainer.types";
import type {FC} from 'react';

import React from 'react';
import {Typography, TYPOGRAPHY_TYPES} from "../Typography";
import classnames from 'classnames';
import { Card, Loader } from "components";
import { Grow} from "@mui/material";
import './cards-container.scss';

export const CardsContainer: FC<CardsContainerProps> = ({
  title,
  isLoading,
  children,
  isAnimated,
  animationDelay,
  shouldShowNoDataMessage,
  noDataMessage,
  classNames
}) => {
  const content = (
    <div className={classnames("BB-cards-container__outer-container", classNames?.outerContainer)}>
      <Card classNames={{
        container: classnames("BB-cards-container__container", classNames?.container)
      }}>
        <Loader isVisible={isLoading} shouldFitContainer />
        {title && (
          <span className={classnames("BB-cards-container__title-container")}>
            <Typography type={TYPOGRAPHY_TYPES.OVERLINE}>
              {title}
            </Typography>
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
          <div className={classnames("BB-cards-container__cards-container", classNames?.cardsContainer)}>
            {children}
          </div>
        )}
      </Card>
    </div>
  )

  if (isAnimated) {
    return (
      <Grow in timeout={animationDelay}>
        {content}
      </Grow>
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