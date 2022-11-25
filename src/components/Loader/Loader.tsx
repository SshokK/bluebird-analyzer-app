import type {LoaderProps} from "./Loader.types";
import type {FC} from 'react';

import React from 'react';
import classnames from 'classnames';
import {LOADER_SIZES} from "./Loader.constants";
import { Grow } from '@mui/material';
import './loader.scss';

export const Loader: FC<LoaderProps> = ({ shouldFitContainer, size, isVisible }) => {
  const loader = (
    <span
      className={classnames('BB-loader', `BB-loader--is-${size}`, {
        'BB-loader--is-visible': isVisible
      })}
    />
  )

  return shouldFitContainer ? (
    <Grow in={isVisible}>
      <div className={classnames("BB-loader__container", {
        'BB-loader__container--is-visible': isVisible
      })}>
        <div className={classnames('BB-loader__backdrop', {
          'BB-loader__backdrop--is-visible': isVisible
        })} />
        {loader}
      </div>
    </Grow>
  ): loader
}

Loader.defaultProps = {
  size: LOADER_SIZES.MEDIUM
}