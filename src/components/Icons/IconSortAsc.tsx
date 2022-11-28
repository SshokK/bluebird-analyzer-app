import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

export const IconSortAsc = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <ExpandLessOutlinedIcon {...props} ref={ref} />;
  }
);
