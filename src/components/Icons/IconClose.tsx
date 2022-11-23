import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export const IconClose = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <CloseIcon {...props} ref={ref} />;
  }
);
