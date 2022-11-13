import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

export const IconBasketball = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <SportsBasketballIcon {...props} ref={ref} />;
  }
);
