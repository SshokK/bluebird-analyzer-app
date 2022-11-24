import React from 'react';
import {ErrorBoundary, View} from "components";
import {SportFamilies, Sports, Crawlers  } from "./elements";
import {useSportsConfigurationData} from "./hooks";
import './sports-configuration.scss';

export const SportsConfiguration = () => {
  const { formattedData } = useSportsConfigurationData();

  return (
    <ErrorBoundary>
      <View
        title="Sports configuration"
        classNames={{
          content: "BB-sports-configuration__container"
        }}
      >
        <SportFamilies />
        {formattedData.sportFamilyId && (
          <Sports sportFamilyId={formattedData.sportFamilyId} />
        )}
        {formattedData.sportFamilyId && formattedData.sportId && (
          <Crawlers sportFamilyId={formattedData.sportFamilyId} sportId={formattedData.sportId} />
        )}
      </View>
    </ErrorBoundary>
  )
}