import type {SportsHandlers} from "../../SportFamilies/hooks/useSportsHandlers.types";
import type {useSportsMutations} from "./useSportsMutations";
import type {SportsData} from "./useSportsData.types";

import {QUERY_PARAMS} from "../../../SportsConfiguration.constants";
import {MODAL_FIELD_KEYS} from "../Sports.constants";

import * as utils from "utils";

import {useLocation, useNavigate} from "react-router";

export const useSportsHandlers = ({
  formattedData,
  mutations
}: {
  formattedData: SportsData['formattedData'],
  mutations: ReturnType<typeof useSportsMutations>
}): SportsHandlers => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleModalAddModalSubmit: SportsHandlers['handleModalAddModalSubmit'] = async (fields) => {
    try {
      if (formattedData.sportFamilyId) {
        await mutations.createSport.mutateAsync([{
          name: fields[MODAL_FIELD_KEYS.NAME].value as string,
          sportFamilyId: formattedData.sportFamilyId
        }]);
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleModalEditModalSubmit: SportsHandlers['handleModalEditModalSubmit'] = async (fields) => {
    try {
      if (formattedData.sportId && formattedData.sportFamilyId) {
        await mutations.updateSport.mutateAsync([
          formattedData.sportId,
          {
            name: fields[MODAL_FIELD_KEYS.NAME].value as string,
            sportFamilyId: formattedData.sportFamilyId
          }
        ]);
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleSportDelete: SportsHandlers['handleSportDelete'] = (sportId) => async () => {
    try {
      if (formattedData.sportFamilyId) {
        navigate(utils.formatRedirectUrl({
          path: '',
          params: {
            [QUERY_PARAMS.SPORT_FAMILY_ID]: formattedData.sportFamilyId
          }
        }), {
          relative: 'route',
          replace: true
        });

        await mutations.deleteSport.mutateAsync([sportId]);
      }
    } catch (e) {
      console.error(e)
    }
  }
  
  const handleSportClick: SportsHandlers['handleSportClick'] = (sportId) => () => {
    navigate(utils.formatRedirectUrl({
      path: '',
      shouldKeepExistingParams: true,
      searchString: location.search,
      params: {
        [QUERY_PARAMS.SPORT_ID]: sportId
      }
    }), {
      relative: "route",
      replace: true
    })
  };
  
  return {
    handleModalAddModalSubmit,
    handleModalEditModalSubmit,
    handleSportDelete,
    handleSportClick
  }
}