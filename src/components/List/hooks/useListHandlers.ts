import type {ListHandlers} from "./useListHandlers.types";
import type {ListData} from "./useListData.types";
import type {ListProps} from "../List.types";

import {useCallback} from "react";
import isEqual from 'lodash.isequal';

export const useListHandlers = ({
  props,
  localActions,
  prevProps
}: {
  props: ListProps
  localActions: ListData['localActions'];
  prevProps: ListData['prevProps'];
}): ListHandlers => {
  const handleOptionClick: ListHandlers['handleOptionClick'] = ({ option, isSelected }) => () => {
    localActions.setSelectedOptions(selectedOptions => {
      const updatedOptions = isSelected
        ? selectedOptions.filter(({ key }) => key !== option.key)
        : [...selectedOptions, option]

      props.onSelectedOptionsChange?.(updatedOptions)

      return updatedOptions
    })
  }

  const handleSelectedOptionKeysPropChange = useCallback(() => {
    if (
      !isEqual(prevProps.selectedOptionKeys, props.selectedOptionKeys) ||
      !isEqual(prevProps.options, props.options)
    ) {
      localActions.setSelectedOptions(
        props.selectedOptionKeys?.flatMap?.(key => {
          const option = props.options?.find(option => option.key === key);

          if (option) {
            return [option]
          }

          return []
        }) ?? []
      )
    }
  }, [localActions, prevProps.options, prevProps.selectedOptionKeys, props.options, props.selectedOptionKeys])

  return {
    handleOptionClick,
    handleSelectedOptionKeysPropChange
  }
}