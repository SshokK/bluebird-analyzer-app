import type {FC} from 'react';

import React from 'react';
import {View} from "../../components";
import {RegionalProxies} from "./elements";

export const Proxies: FC = () => {
  return (
    <View title="Proxies">
      <RegionalProxies />
    </View>
  )
}