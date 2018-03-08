export declare class MDCFoundation<A = {}> {
  static cssClasses: {[key: string]: string};
  static strings: {[key: string]: string};
  static numbers: {[key: string]: string};
  static defaultAdapter: Object;

  constructor(adapter?: A);
  init(): void;
  destroy(): void;
}

export declare class MDCComponent<F> {
  static attachTo<F>(root: Element): MDCComponent<F>;
  constructor(root: Element, foundation?: F, ...args: any[]);
  initialize(): void;
  getDefaultFoundation(): F;
  initialSyncWithDOM(): void;
  destroy(): void;
  listen<K extends keyof ElementEventMap>(
    type: K,
    listener: (this: Element, ev: ElementEventMap[K]) => any
  ): void;
  listen(type: string, listener: EventListenerOrEventListenerObject): void;
  unlisten<K extends keyof ElementEventMap>(
    type: K,
    listener: (this: Element, ev: ElementEventMap[K]) => any
  ): void;
  unlisten(type: string, listener: EventListenerOrEventListenerObject): void;
  emit(evtType: string, evtData: Object, shouldBubble?: boolean): void;
}

export declare class MDCRippleFoundation extends MDCFoundation<MDCRipple> {
  activate(event?: Event): void;
  deactivate(event?: Event): void;
  layout(): void;
}
export declare class MDCRipple extends MDCComponent<MDCRippleFoundation> {
  unbounded: boolean;
  activate(): void;
  deactivate(): void;
  layout(): void;
}
