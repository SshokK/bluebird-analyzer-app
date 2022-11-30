import type {ActionsProps} from "components";
import type {ProxySchema} from "features/proxies/proxies.api.types";
import type {ActionsCellProps} from "../ActionsCell.types";
import type {SelectOption} from "components/Select";
import type {useActionsCellMutations} from "./useActionsCellMutations";

import {ICON_BUTTON_SIZES, MODAL_FORM_FIELD_TYPES, MODAL_SIZES} from "components";
import {ACTION_KEYS, MODAL_FIELD_KEYS} from "../ActionsCell.constants";
import {REGION_PROXIES_TABLE_COLUMN_KEYS} from "../../../RegionProxies.constants";
import {QUERY_KEYS} from "constants/queries.constants";

import { IconDelete, IconEdit } from 'components';

import * as regionsApi from "features/regions/regions.api";
import * as regionsApiSelectors from "features/regions/regions.api.selectors";
import * as proxiesConstants from "features/proxies/proxies.constants";

export const useActionsCellActions = ({
  props,
  mutations
}: {
  props: Pick<ActionsCellProps, 'row'>
  mutations: ReturnType<typeof useActionsCellMutations>
}): ActionsProps['actions'] => {
  return {
    [ACTION_KEYS.DELETE]: {
      icon: <IconDelete />,
      iconSize: ICON_BUTTON_SIZES.SMALL,
      shouldShowModal: true,
      modalTitle: "Are you sure",
      modalSize: MODAL_SIZES.SMALL,
      onSubmit: mutations.deleteProxy.mutate
    },
    [ACTION_KEYS.EDIT]: {
      icon: <IconEdit />,
      iconSize: ICON_BUTTON_SIZES.SMALL,
      shouldShowModal: true,
      modalTitle: "Edit proxy",
      modalSize: MODAL_SIZES.SMALL,
      modalFields: {
        [MODAL_FIELD_KEYS.IP]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          label: 'ip',
          value: props.row.getValue(REGION_PROXIES_TABLE_COLUMN_KEYS.IP),
          isRequired: true
        },
        [MODAL_FIELD_KEYS.PORT]: {
          type: MODAL_FORM_FIELD_TYPES.NUMBER,
          label: 'port',
          value: props.row.getValue(REGION_PROXIES_TABLE_COLUMN_KEYS.PORT),
          isRequired: true
        },
        [MODAL_FIELD_KEYS.PROTOCOL]: {
          type: MODAL_FORM_FIELD_TYPES.SELECT,
          label: 'protocol',
          value: [props.row.getValue(REGION_PROXIES_TABLE_COLUMN_KEYS.TYPE)],
          isRequired: true,
          props: {
            options: proxiesConstants.PROXY_PROTOCOL_OPTIONS
          }
        },
        [MODAL_FIELD_KEYS.REGION]: {
          type: MODAL_FORM_FIELD_TYPES.SELECT,
          label: 'region',
          value: [props.row.getValue(REGION_PROXIES_TABLE_COLUMN_KEYS.REGION_ID)],
          isRequired: true,
          props: {
            isClearable: true,
            queryOptions: {
              queryKey: [QUERY_KEYS.REGIONS],
              queryFn: ({ inputValue }) => regionsApi.fetchRegions({
                name: inputValue ? [inputValue] : [],
                limit: 10
              }),
              select: regionsApiSelectors.formatRegionsForSelect
            }
          }
        }
      },
      onSubmit: (fields) => {
        mutations.updateProxy.mutate({
          ip: fields[MODAL_FIELD_KEYS.IP].value as ProxySchema['ip'],
          port: fields[MODAL_FIELD_KEYS.PORT].value as ProxySchema['port'],
          type: (fields[MODAL_FIELD_KEYS.PROTOCOL].value as SelectOption[]).length
            ? (fields[MODAL_FIELD_KEYS.PROTOCOL].value as ProxySchema['type'][])[0]
            : undefined,
          regionId: (fields[MODAL_FIELD_KEYS.REGION].value as SelectOption[]).length
            ? (fields[MODAL_FIELD_KEYS.REGION].value as ProxySchema['RegionId'][])[0]
            : undefined
        })
      }
    }
  }
}