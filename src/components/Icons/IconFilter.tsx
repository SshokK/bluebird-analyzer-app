import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export const IconFilter = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <FilterAltIcon {...props} ref={ref} />;
  }
);
