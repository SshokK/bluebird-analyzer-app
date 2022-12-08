import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';

export const IconSortListInitial = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <FilterListIcon {...props} ref={ref} />;
  }
);
