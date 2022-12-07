import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import SortIcon from '@mui/icons-material/Sort';

export const IconSort = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <SortIcon {...props} ref={ref} />;
  }
);
