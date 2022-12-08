import type { ReactElement, Ref } from 'react';
import type {SvgIconProps} from "@mui/material";

import React, { forwardRef } from 'react';
import SortIcon from '@mui/icons-material/Sort';
import classnames from 'classnames';
import './icon.scss'

export const IconSortListAsc = forwardRef(
  (props: SvgIconProps, ref: Ref<SVGSVGElement>): ReactElement => {
    return <SortIcon {...props} className={classnames("BB-icon--sort-list-asc", props.className)} ref={ref} />;
  }
);
