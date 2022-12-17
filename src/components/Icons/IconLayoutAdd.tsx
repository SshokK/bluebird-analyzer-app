import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

export const IconLayoutAdd = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <DashboardCustomizeIcon {...props} ref={ref} />;
  }
);
