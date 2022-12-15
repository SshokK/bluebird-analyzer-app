import type {FC} from "react";

import React from 'react';
import {Typography, TYPOGRAPHY_TYPES} from "../../../Typography";
import './legend.scss';

export const Legend: FC = () => {
  return (
    <ul className="BB-selectors-modal-legend">
      <li className="BB-selectors-modal-legend__item--is-valid">
        <Typography type={TYPOGRAPHY_TYPES.OVERLINE}>
          Valid
        </Typography>
      </li>
      <li className="BB-selectors-modal-legend__item--is-invalid">
       <Typography type={TYPOGRAPHY_TYPES.OVERLINE}>
          Empty fields
        </Typography>
      </li>
    </ul>
  )
}