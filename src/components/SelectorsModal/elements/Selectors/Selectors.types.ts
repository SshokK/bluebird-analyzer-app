import type {CrawlerSchema} from "features/crawlers/crawlers.api.types";

export type SelectorsProps = {
  crawlerId: CrawlerSchema['id'];
  isEditable: boolean;
  onIsLoadingChange: (isLoading: boolean) => void;
  onCrawlerNameChange: (name: string) => void;
}