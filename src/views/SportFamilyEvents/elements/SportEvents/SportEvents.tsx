import type {SportEventsProps} from "./SportEvents.types";
import type {FC} from "react";

import React from "react";
import {CardsContainer, EventCard} from "../../../../components";
import {SPORT_EVENTS_ANIMATION_DELAY} from "../../SportFamilyEvents.constants";
import {useSportEventsQueries} from "./hooks";

export const SportEvents: FC<SportEventsProps> = ({ sportId, sportFamilyId, animationDelay }) => {
  const queries = useSportEventsQueries({
    props: {
      sportId,
      sportFamilyId
    }
  })

  return (
    <CardsContainer
      title={queries.fetchSport.data?.name}
      isAnimated
      shouldShowNoDataMessage={
        queries.fetchSportEvents.isFetched &&
        !queries.fetchSportEvents.data?.length
      }
      noDataMessage="There are no upcoming events."
      animationDelay={animationDelay}
      isLoading={
        queries.fetchSport.isFetching ||
        queries.fetchSportEvents.isFetching
      }
    >
      {queries.fetchSportEvents.data?.map?.((event, i) => (
        <EventCard
          key={event.id}
          event={event}
          players={event.Players}
          isAnimated
          animationDelay={(i + 1) * SPORT_EVENTS_ANIMATION_DELAY}
          classNames={{
            container: 'BB-sport-events__event-card'
          }}
        />
      ))}
    </CardsContainer>
  )
}