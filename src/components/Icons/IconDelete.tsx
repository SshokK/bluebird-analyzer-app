import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const IconDelete = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <DeleteForeverIcon {...props} ref={ref} />;
  }
);
