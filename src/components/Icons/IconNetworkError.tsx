import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import SignalWifiStatusbarConnectedNoInternet4Icon from '@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4';

export const IconNetworkError = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <SignalWifiStatusbarConnectedNoInternet4Icon {...props} ref={ref} />;
  }
);
