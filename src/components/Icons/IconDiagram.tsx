import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export const IconDiagram = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <AccountTreeIcon {...props} ref={ref} />;
  }
);
