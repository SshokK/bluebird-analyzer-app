import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import WarningIcon from '@mui/icons-material/Warning';

export const IconWarning = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <WarningIcon {...props} ref={ref} />;
  }
);
