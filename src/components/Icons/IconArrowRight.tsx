import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const IconArrowRight = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <NavigateNextIcon {...props} ref={ref} />;
  }
);
