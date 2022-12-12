import type {CrawlerSchema} from "features/crawlers/crawlers.api.types";

export type SelectorsModalProps = {
  isOpen: boolean;
  crawlerId: CrawlerSchema['id'];
  onClose: () => void;
}