import type {SportFamiliesHandlers} from "./useSportFamiliesHandlers.types";
import type {SportFamiliesData} from "./useSportFamiliesData.types";

import * as utils from "utils";

import {QUERY_PARAMS} from "../../../SportsConfiguration.constants";
import {MODAL_FIELD_KEYS} from "../SportFamilies.constants";

import {useNavigate} from "react-router";
import {useSportFamiliesMutations} from "./useSportFamiliesMutations";

export const useSportFamiliesHandlers = ({
  formattedData,
  mutations,
}: {
  formattedData: SportFamiliesData['formattedData'];
  mutations: ReturnType<typeof useSportFamiliesMutations>
}): SportFamiliesHandlers => {
  const navigate = useNavigate();

  const handleModalAddModalSubmit: SportFamiliesHandlers['handleModalAddModalSubmit'] = async (fields) => {
    try {
      await mutations.createSportFamily.mutateAsync([
        {
          name: fields[MODAL_FIELD_KEYS.NAME].value as string
        }
      ]);
    } catch (e) {
      console.error(e)
    }
  }

  const handleModalEditModalSubmit: SportFamiliesHandlers['handleModalEditModalSubmit'] = async (fields) => {
    try {
      if (formattedData.sportFamilyId) {
        await mutations.updateSportFamily.mutateAsync([
          formattedData.sportFamilyId,
          {
            name: fields[MODAL_FIELD_KEYS.NAME].value as string
          }
        ]);
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleSportFamilyDelete: SportFamiliesHandlers['handleSportFamilyDelete'] = (sportFamilyId) => async () => {
    try {
      navigate(utils.formatRedirectUrl({
        path: '',
        params: {}
      }), {
        relative: 'route',
        replace: true
      });

      await mutations.deleteSportFamily.mutateAsync([sportFamilyId]);
    } catch (e) {
      console.error(e)
    }
  }

  const handleSportFamilyClick: SportFamiliesHandlers['handleSportFamilyClick'] = (sportFamilyId) => () => {
    navigate(utils.formatRedirectUrl({
      path: '',
      params: {
        [QUERY_PARAMS.SPORT_FAMILY_ID]: sportFamilyId
      }
    }), {
      relative: "route",
      replace: true
    })
  }

  return {
    handleModalAddModalSubmit,
    handleModalEditModalSubmit,
    handleSportFamilyDelete,
    handleSportFamilyClick
  }
}