import type {DROPZONE_FILE_TYPES} from "./Dropzone.constants";

export type DropzoneProps = {
  value?: File[];
  onChange?: (files: File[]) => void;
  fileType?: DROPZONE_FILE_TYPES;
  maxFilesCount?: number;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isDragDisabled?: boolean;
  isClickDisabled?: boolean;
}