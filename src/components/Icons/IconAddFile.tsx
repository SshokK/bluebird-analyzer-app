import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

export const IconAddFile = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <NoteAddIcon {...props} ref={ref} />;
  }
);
