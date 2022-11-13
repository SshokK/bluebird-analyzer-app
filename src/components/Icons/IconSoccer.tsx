import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

export const IconSoccer = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <SportsSoccerIcon {...props} ref={ref} />;
  }
);
