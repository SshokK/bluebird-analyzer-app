import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const IconError = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <ErrorOutlineIcon {...props} ref={ref} />;
  }
);
