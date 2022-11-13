import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import LockIcon from '@mui/icons-material/Lock';

export const IconLock = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <LockIcon {...props} ref={ref} />;
  }
);
