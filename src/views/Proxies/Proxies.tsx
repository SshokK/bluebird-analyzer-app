import type {FC} from 'react';

import React from 'react';
import {ErrorBoundary, View} from "../../components";
import {RegionalProxies} from "./elements";

export const Proxies: FC = () => {
  return (
    <ErrorBoundary>
      <View>
        <RegionalProxies />
      </View>
    </ErrorBoundary>
  )
}