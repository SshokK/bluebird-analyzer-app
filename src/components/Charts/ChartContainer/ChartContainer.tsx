import type {FC} from "react";
import type {ChartContainerProps} from "./ChartContainer.types";

import React from 'react';
import {Container, CONTAINER_TYPES} from "../../Container";
import './chart-container.scss';

export const ChartContainer: FC<ChartContainerProps> = ({ children, shouldShowNoDataMessage, noDataMessage }) => {
  return (
    <Container
      type={CONTAINER_TYPES.TRANSPARENT}
      isAnimated={false}
      elevation={0}
      isFullHeight
      isWithoutPadding
      shouldShowNoDataMessage={shouldShowNoDataMessage}
      noDataMessage={noDataMessage ?? 'No data'}
      classNames={{
        cardsContainer: 'BB-chart-container'
      }}
    >
      {children}
    </Container>
  )
}