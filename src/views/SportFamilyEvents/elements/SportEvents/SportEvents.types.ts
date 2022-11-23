import type {SportSchema} from "features/sports/sports.api.types";
import type {CardsContainerProps} from "../../../../components";

export type SportEventsProps = {
  sportId: SportSchema['id'];
  sportFamilyId: SportSchema['SportFamilyId'];
  animationDelay: CardsContainerProps['animationDelay'];
}