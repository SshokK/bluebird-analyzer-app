import {SORT_ORDERS} from "../constants/global.constants";

export type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property];
};

export type ArrayItem<T> = T extends readonly (infer ElementType)[]
  ? ElementType
  : never;

export type LocalUniqueId = string;

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type ListRequestParams<T extends Record<string, unknown> = {}, IsPaginated extends boolean | undefined = false> = T & {
  limit: IsPaginated extends true ? number : number | undefined;
  offset: IsPaginated extends true ? number : number | undefined;
  sortField?: string;
  sortOrder?: SORT_ORDERS;
}

export type ListResponse<T extends unknown = unknown> = {
  results: T[];
  totalCount: number;
}