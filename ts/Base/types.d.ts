export type Diff<
  T extends string | number | symbol,
  U extends string | number | symbol
> = ({[P in T]: P} & {[P in U]: never} & {[x: string]: never})[T];

export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

export type OmitAttrs<
  T extends {[attr: string]: any},
  O extends {[attr: string]: any}
> = Pick<T, Diff<keyof T, keyof O>>;
