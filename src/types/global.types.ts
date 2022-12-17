export type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property];
};

export type ArrayItem<T> = T extends readonly (infer ElementType)[]
  ? ElementType
  : never;

export type LocalUniqueId = string;

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
