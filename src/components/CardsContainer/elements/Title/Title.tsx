import type {TitleProps} from "./Title.types";
import type {FC} from "react";

import React from "react";
import classnames from "classnames";
import {Typography, TYPOGRAPHY_TYPES} from "../../../Typography";
import './title.scss';

export const Title: FC<TitleProps> = ({ title, titleActions }) => {
  if (!title) {
    return null
  }

  return (
    <span className={classnames("BB-cards-container-title__container")}>
      <span className={classnames("BB-cards-container-title")}>
        <Typography type={TYPOGRAPHY_TYPES.OVERLINE}>
          {title}
        </Typography>
      </span>
      {titleActions}
    </span>
  )
}