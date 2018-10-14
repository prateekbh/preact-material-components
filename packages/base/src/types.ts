/**
 * Excludes all keys of the first type, that are also on the second type
 *
 * Example:
 * type X = OmitAttrs<{b: () => void, c: any}, {a: number, b: string}>;  // {c: any}
 */
export type OmitAttrs<
  T extends {[attr: string]: any},
  O extends {[attr: string]: any}
> = Pick<T, Exclude<keyof T, keyof O>>;

/**
 * Merge two types and any keys that are also in the first get deleted in the second
 *
 * Example:
 * type Y = SoftMerge<{a: number, b: string}, {b: () => void, c: any}>;  // {a: number, b: string, c: any}
 */
export type SoftMerge<A, B> = A & OmitAttrs<B, A>;
