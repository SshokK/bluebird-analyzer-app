import type {ListProps} from "components";

export type BookmakersCrawlersHandlers = {
  handleBookmakersChange: Required<ListProps>['onSelectedOptionsChange'];
  handleSortChange: () => void;
  handleBookmakerIdChange: () => void;
}