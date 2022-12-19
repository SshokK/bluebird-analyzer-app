import type * as reactChartJs from 'react-chartjs-2';
import type {ComponentProps} from "react";

import STYLE_VARIABLES from "styles";

export const DEFAULT_OPTIONS: Required<ComponentProps<typeof reactChartJs.Doughnut>>['options'] = {
  plugins: {
    tooltip: {
      backgroundColor: `${STYLE_VARIABLES.PRIMARY_COLOR_3}80`,
      boxPadding: 5,
      caretSize: 0,
      usePointStyle: true,
      titleFont: {
        weight: 'normal'
      }
    },
    legend: {
      position: 'top',
      align: 'start'
    }
  }
}