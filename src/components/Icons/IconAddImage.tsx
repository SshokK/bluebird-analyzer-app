import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export const IconAddImage = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <AddPhotoAlternateIcon {...props} ref={ref} />;
  }
);
