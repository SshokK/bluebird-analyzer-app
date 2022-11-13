import type {ViewProps} from "./View.types";
import type {FC} from 'react';
import React from 'react';
import classnames from 'classnames';
import {Typography, TYPOGRAPHY_TYPES} from "../Typography";
import './view.scss';

export const View: FC<ViewProps> = ({ title, children, className }) => {
  return (
    <section className={classnames("BB-view", className)}>
      {title && (
        <Typography type={TYPOGRAPHY_TYPES.H4} className="BB-view__title">
          {title}
        </Typography>
      )}
      <div className="BB-view__content">
        {children}
      </div>
    </section>
  )
}