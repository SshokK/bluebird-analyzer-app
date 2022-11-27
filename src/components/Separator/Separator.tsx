import type {SeparatorProps} from "./Separator.types";
import type {FC} from 'react';

import React from 'react';
import classnames from 'classnames';
import './separator.scss';

export const Separator: FC<SeparatorProps> = ({ isVertical }) => {
  return (
    <hr
      className={classnames("BB-separator", {
        "BB-separator--is-vertical": isVertical
      })}
    />
  )
}