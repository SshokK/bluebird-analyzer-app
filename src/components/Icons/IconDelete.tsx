import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export const IconDelete = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <DeleteIcon {...props} ref={ref} />;
  }
);
