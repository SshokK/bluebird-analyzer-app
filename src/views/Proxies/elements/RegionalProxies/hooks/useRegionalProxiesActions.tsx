import type {ActionsProps} from "components";
import type {RegionalProxiesData} from "./useRegionalProxiesData.types";
import type {RegionSchema} from "features/regions/regions.api.types";

import type {useRegionalProxiesMutations} from "./useRegionalProxiesMutations";
import type {useRegionalProxiesQueries} from "./useRegionalProxiesQueries";

import {IconAdd, IconDelete, IconEdit, MODAL_FORM_FIELD_TYPES, MODAL_SIZES} from "components";
import {MODAL_FORM_FIELDS, REGION_ACTIONS} from "../RegionalProxies.constants";

export const useRegionalProxiesActions = ({
  formattedData,
  queries,
  mutations
}: {
  formattedData: RegionalProxiesData['formattedData'];
  queries: ReturnType<typeof useRegionalProxiesQueries>
  mutations: ReturnType<typeof useRegionalProxiesMutations>
}): ActionsProps['actions'] => {
  return {
    [REGION_ACTIONS.ADD]: {
      icon: <IconAdd />,
      shouldShowModal: true,
      modalSize: MODAL_SIZES.SMALL,
      modalTitle: 'Add new region',
      onSubmit: (fields) => mutations.createRegion.mutate([{
        name: fields[MODAL_FORM_FIELDS.NAME].value as RegionSchema['name']
      }]),
      modalFields: {
        [MODAL_FORM_FIELDS.NAME]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          value: '',
          label: 'name'
        }
      }
    },
    [REGION_ACTIONS.EDIT]: {
      icon: <IconEdit />,
      isDisabled: !formattedData.regionId,
      shouldShowModal: true,
      modalSize: MODAL_SIZES.SMALL,
      modalTitle: 'Update region',
      onSubmit: (fields) => mutations.updateRegion.mutate([
        formattedData.regionId as RegionSchema['id'],
        {
          name: fields[MODAL_FORM_FIELDS.NAME].value as RegionSchema['name']
        }
      ]),
      modalFields: {
        [MODAL_FORM_FIELDS.NAME]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          value: queries.fetchRegions.data
            ?.find
            ?.(region => region.key === formattedData.regionId)
            ?.name,
          label: 'name'
        }
      }
    },
    [REGION_ACTIONS.DELETE]: {
      icon: <IconDelete />,
      isDisabled: !formattedData.regionId,
      shouldShowModal: true,
      modalSize: MODAL_SIZES.SMALL,
      modalTitle: 'Are you sure?',
      onSubmit: () => mutations.deleteRegion.mutate([
        formattedData.regionId as RegionSchema['id']
      ])
    }
  }
}