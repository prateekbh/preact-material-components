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
  static attachTo(root: Element): MDCComponent<MDCFoundation>;
  constructor(root: Element, foundation?: F, ...args: any[]);
  initialize(): void;
  getDefaultFoundation(): F;
  initialSyncWithDOM(): void;
  destroy(): void;
  listen(evtType: string, handler: Function): void;
  unlisten(evtType: string, handler: Function): void;
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