import React from 'react';
import { View} from "components";
import {SPORT_EVENTS_ANIMATION_DELAY} from "./SportFamilyEvents.constants";
import {SportEvents} from "./elements";
import {useSportFamilyEventsData, useSportFamilyEventsQueries} from "./hooks";
import './sport-family-events.scss';

export const SportFamilyEvents = () => {
  const { formattedData } = useSportFamilyEventsData();

  const queries = useSportFamilyEventsQueries({
    formattedData
  });

  return (
    <View
      isLoading={queries.fetchSports.isLoading}
      classNames={{
        content: 'BB-sport-family-events'
      }}
    >
      {queries.fetchSports.data?.results?.map?.((sport, i) => (
        <SportEvents
          key={sport.id}
          sportId={sport.id}
          sportFamilyId={sport.SportFamilyId}
          animationDelay={(i + 1) * SPORT_EVENTS_ANIMATION_DELAY}
        />)
      )}
    </View>
  )
}