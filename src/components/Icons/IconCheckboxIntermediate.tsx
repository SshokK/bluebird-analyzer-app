import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

export const IconCheckboxIntermediate = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <IndeterminateCheckBoxIcon {...props} ref={ref} />;
  }
);
