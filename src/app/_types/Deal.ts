export type StringMap = Record<string, string>;

export type StringBooleanMap = Record<string, boolean>;

export type DealFormState<T> = Partial<{
  errors: StringMap;
  successMsg: string;
  data: T;
  blurs: StringBooleanMap;
}>;
