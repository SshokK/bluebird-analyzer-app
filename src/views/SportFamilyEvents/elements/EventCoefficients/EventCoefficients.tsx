import type {EventCoefficientsProps} from "./EventCoefficients.types";
import type {FC} from 'react';

import React from 'react';
import {useEventCoefficientsQueries} from "./hooks";
import {Loader} from "../../../../components";

export const EventCoefficients: FC<EventCoefficientsProps> = ({ players }) => {
  const queries = useEventCoefficientsQueries({
    props: {
      players
    }
  })

  return (
    <div>
      <Loader isVisible={queries.fetchCoefficients.isLoading} />
      {queries.fetchCoefficients.data?.map?.(coefficient => (
        <span>
          {coefficient.value}
        </span>
      ))}
    </div>
  )
}