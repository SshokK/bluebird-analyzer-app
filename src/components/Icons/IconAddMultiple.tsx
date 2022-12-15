import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

export const IconAddMultiple = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <LibraryAddIcon {...props} ref={ref} />;
  }
);
