import type {DropzoneOptions} from "react-dropzone";
import type {ChicletProps} from "../../Chiclet";

export type DropzoneHandlers = {
  handleDrop: Required<DropzoneOptions>['onDropAccepted'];
  handleFileRemove: (fileIndex: number) => Required<ChicletProps>['onDelete'];
  handleFilesChange: () => void;
}