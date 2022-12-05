import type {DropzoneProps} from "../Dropzone.types";
import type {DropzoneData} from "./useDropzoneData.types";

import {useMemo, useState} from "react";

export const useDropzoneData = (props: Pick<DropzoneProps, 'value'>): DropzoneData => {
  const [files, setFiles] = useState<DropzoneData['localState']['files']>(
    props.value ?? []
  );

  const localState: DropzoneData['localState'] = {
    files
  }

  const localActions: DropzoneData['localActions'] = useMemo(() => ({
    setFiles
  }), []);

  return {
    localState,
    localActions
  }
}