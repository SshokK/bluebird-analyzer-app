import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const IconLayout = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <DashboardIcon {...props} ref={ref} />;
  }
);
