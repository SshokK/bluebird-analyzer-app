import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const IconPlay = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <PlayArrowIcon {...props} ref={ref} />;
  }
);
