import React from 'react';
import {EventCard, Loader, View} from "components";
import {EVENT_CARD_ANIMATION_DELAY} from "./SportEvents.constants";
import {EventCoefficients} from "./elements";
import {useSportEventsData, useSportEventsQueries} from "./hooks";
import './sport-events.scss';

export const SportEvents = () => {
  const { formattedData } = useSportEventsData();

  const queries = useSportEventsQueries({
    formattedData
  });

  return (
    <View>
      <Loader
        isVisible={
          queries.fetchSport.isLoading ||
          queries.fetchSportEvents.isLoading
        }
        shouldFitContainer
      />
      {queries.fetchSportEvents.data?.map?.((event, i) => (
        <EventCard
          key={event.id}
          event={event}
          players={event.Players}
          isAnimated
          animationDelay={(i + 1) * EVENT_CARD_ANIMATION_DELAY}
          classNames={{
            container: 'BB-sport-events__event-card'
          }}
        >
          {/*<EventCoefficients players={event.Players} />*/}
        </EventCard>
      ))}
    </View>
  )
}