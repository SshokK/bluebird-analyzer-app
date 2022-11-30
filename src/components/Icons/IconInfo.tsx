import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import InfoIcon from '@mui/icons-material/Info';

export const IconInfo = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <InfoIcon {...props} ref={ref} />;
  }
);
