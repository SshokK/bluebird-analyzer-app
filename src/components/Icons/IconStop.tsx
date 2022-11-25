import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import StopIcon from '@mui/icons-material/Stop';

export const IconStop = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <StopIcon {...props} ref={ref} />;
  }
);
