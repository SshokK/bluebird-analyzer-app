import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import QuestionMarkTwoToneIcon from '@mui/icons-material/QuestionMarkTwoTone';

export const IconQuestion = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <QuestionMarkTwoToneIcon {...props} ref={ref} />;
  }
);
