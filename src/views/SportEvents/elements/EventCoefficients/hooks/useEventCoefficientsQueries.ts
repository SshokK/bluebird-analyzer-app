import type {EventCoefficientsProps} from "../EventCoefficients.types";

import {QUERY_KEYS} from "constants/queries.constants";
import {DEFAULT_PARAMS} from "../EventCoefficients.constants";

import * as coefficientsApi from "features/coefficients/coefficients.api";

import {useQuery} from "@tanstack/react-query";

export const useEventCoefficientsQueries = ({
  props
}: {
  props: Pick<EventCoefficientsProps, 'players'>
}) => {
  const fetchCoefficients = useQuery({
    queryKey: [QUERY_KEYS.COEFFICIENTS, { playerIds: props.players.map(player => player.id )}],
    queryFn: () => coefficientsApi.fetchCoefficients({
      ...DEFAULT_PARAMS,
      playerId: props.players.map(player => player.id )
    })
  })

  return {
    fetchCoefficients
  }
}