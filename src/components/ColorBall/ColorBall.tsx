import type {FC} from "react";
import type {ColorBallProps} from "./ColorBall.types";

import React from 'react';
import classnames from 'classnames';
import {COLOR_BALL_SIZES} from "./ColorBall.constants";
import './color-ball.scss';

export const ColorBall: FC<ColorBallProps> = ({ size, color }) => {
  return (
    <div
      style={{
        backgroundColor: color
      }}
      className={classnames("BB-color-ball", {
      [`BB-color-ball--is-${size ?? COLOR_BALL_SIZES.S}`]: true
    })} />
  )
}