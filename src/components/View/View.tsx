import type {ViewProps} from "./View.types";
import type {FC} from 'react';

import React from 'react';
import classnames from 'classnames';
import {Typography, TYPOGRAPHY_TYPES} from "../Typography";
import {Loader} from "../Loader";
import './view.scss';

export const View: FC<ViewProps> = ({ title, children, isLoading, isFullHeight, classNames }) => {
  return (
    <section className={classnames("BB-view", classNames?.container)}>
      {title && (
        <Typography type={TYPOGRAPHY_TYPES.H4} className="BB-view__title">
          {title}
        </Typography>
      )}
      <Loader
        isVisible={isLoading}
        shouldFitContainer
      />
      <div className={classnames("BB-view__content", classNames?.content, {
        "BB-view__content--is-full-height": isFullHeight
      })}>
        {children}
      </div>
    </section>
  )
}