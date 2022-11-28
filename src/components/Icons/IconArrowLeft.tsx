import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export const IconArrowLeft = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <NavigateBeforeIcon {...props} ref={ref} />;
  }
);
