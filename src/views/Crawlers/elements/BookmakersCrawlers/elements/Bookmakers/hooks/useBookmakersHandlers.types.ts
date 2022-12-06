import type {ListProps} from "components";

export type BookmakersHandlers = {
  handleBookmakerIdChange: () => void;
  handleBookmakersChange: Required<ListProps>['onSelectedOptionsChange'];
}