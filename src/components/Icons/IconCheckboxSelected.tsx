import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export const IconCheckboxSelected = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <CheckBoxIcon {...props} ref={ref} />;
  }
);
