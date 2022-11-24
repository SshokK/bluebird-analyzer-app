
import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import AddIcon from '@mui/icons-material/Add';

export const IconAdd = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <AddIcon {...props} ref={ref} />;
  }
);
