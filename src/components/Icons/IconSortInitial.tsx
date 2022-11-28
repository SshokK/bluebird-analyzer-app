import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';

export const IconSortInitial = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <UnfoldMoreOutlinedIcon {...props} ref={ref} />;
  }
);
