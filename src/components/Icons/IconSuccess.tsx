import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const IconSuccess = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <CheckCircleIcon {...props} ref={ref} />;
  }
);
