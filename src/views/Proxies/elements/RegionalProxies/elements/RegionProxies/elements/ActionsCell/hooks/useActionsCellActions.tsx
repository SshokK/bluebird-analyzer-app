import type {ActionsProps} from "components";
import {ICON_BUTTON_SIZES, IconDelete, IconEdit, MODAL_FORM_FIELD_TYPES, MODAL_SIZES} from "components";
import type {useActionsCellMutations} from "./useActionsCellMutations";
import {ACTION_KEYS, MODAL_FIELD_KEYS} from "../ActionsCell.constants";
import {ProxySchema} from "../../../../../../../../../features/proxies/proxies.api.types";
import {ActionsCellProps} from "../ActionsCell.types";
import {REGION_PROXIES_TABLE_COLUMN_KEYS} from "../../../RegionProxies.constants";

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
          value: props.row.getValue(REGION_PROXIES_TABLE_COLUMN_KEYS.IP)
        },
        [MODAL_FIELD_KEYS.PORT]: {
          type: MODAL_FORM_FIELD_TYPES.NUMBER,
          label: 'port',
          value: props.row.getValue(REGION_PROXIES_TABLE_COLUMN_KEYS.PORT)
        },
        [MODAL_FIELD_KEYS.PROTOCOL]: {
          type: MODAL_FORM_FIELD_TYPES.TEXT,
          label: 'protocol',
          value: props.row.getValue(REGION_PROXIES_TABLE_COLUMN_KEYS.TYPE)
        }
      },
      onSubmit: (fields) => {
        mutations.updateProxy.mutate({
          ip: fields[MODAL_FIELD_KEYS.IP].value as ProxySchema['ip'],
          port: fields[MODAL_FIELD_KEYS.PORT].value as ProxySchema['port'],
          type: fields[MODAL_FIELD_KEYS.PROTOCOL].value as ProxySchema['type'],
        })
      }
    }
  }
}