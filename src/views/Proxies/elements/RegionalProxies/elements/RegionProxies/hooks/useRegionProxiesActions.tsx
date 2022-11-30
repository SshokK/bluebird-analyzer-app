import type {TableProps} from "components";
import type {RegionProxiesData} from "./useRegionProxiesData.types";
import type {ProxySchema} from "features/proxies/proxies.api.types";
import type {RegionProxiesProps} from "../RegionProxies.types";

import { IconAdd, IconDelete, MODAL_FORM_FIELD_TYPES, MODAL_SIZES} from "components";

import {REGION_PROXIES_ACTIONS} from "../RegionProxies.constants";
import {MODAL_FIELD_KEYS} from "../elements";

import {useRegionProxiesMutations} from "./useRegionProxiesMutations";

import * as proxiesConstants from "features/proxies/proxies.constants";

export const useRegionProxiesActions = ({
  props,
  localState,
  mutations
}: {
  props: Pick<RegionProxiesProps, 'regionId'>
  localState: RegionProxiesData['localState'];
  mutations: ReturnType<typeof useRegionProxiesMutations>
}): Required<TableProps>['actions'] => {
  return {
    [REGION_PROXIES_ACTIONS.ADD]: {
      icon: <IconAdd />,
      shouldShowModal: true,
      modalTitle: "Add proxy",
      modalSize: MODAL_SIZES.SMALL,
      modalFields: {
        [MODAL_FIELD_KEYS.IP]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          label: 'ip',
          isRequired: true
        },
        [MODAL_FIELD_KEYS.PORT]: {
          type: MODAL_FORM_FIELD_TYPES.NUMBER,
          label: 'port',
          isRequired: true
        },
        [MODAL_FIELD_KEYS.PROTOCOL]: {
          type: MODAL_FORM_FIELD_TYPES.SELECT,
          label: 'protocol',
          value: [],
          isRequired: true,
          props: {
            options: proxiesConstants.PROXY_PROTOCOL_OPTIONS
          }
        }
      },
      onSubmit: (fields) => mutations.createProxy.mutate([{
        ip: fields[MODAL_FIELD_KEYS.IP].value as ProxySchema['ip'],
        port: fields[MODAL_FIELD_KEYS.PORT].value as ProxySchema['port'],
        type: (fields[MODAL_FIELD_KEYS.PROTOCOL].value as ProxySchema['type'][])[0],
        regionId: props.regionId as ProxySchema['RegionId']
      }])
    },
    [REGION_PROXIES_ACTIONS.DELETE]: {
      icon: <IconDelete />,
      isDisabled: !localState.selectedRowKeys.length,
      shouldShowModal: true,
      modalTitle: "Are you sure?",
      modalSize: MODAL_SIZES.SMALL,
      onSubmit: mutations.deleteProxies.mutate
    }
  }
}