import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

export const IconCloseSquared = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <DisabledByDefaultIcon {...props} ref={ref} />;
  }
);
