import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import EventIcon from '@mui/icons-material/Event';

export const IconEvent = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <EventIcon {...props} ref={ref} />;
  }
);
