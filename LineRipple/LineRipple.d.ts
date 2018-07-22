import MaterialComponent from '../MaterialComponent';
import {MDCFoundation, MDCComponent} from '../MaterialComponentsWeb';
import {VNode} from 'preact';

export default class LineRipple extends MaterialComponent<
  JSX.HTMLAttributes,
  {}
> {
  MDComponent: MDCLineRipple;
}

declare class MDCLineRippleFoundation extends MDCFoundation<MDCLineRipple> {
  activate(): void;
  deactivate(): void;
  setRippleCenter(xCoordinate: number): void;
  handleTransitionEnd(e: Event): void;
}

declare class MDCLineRipple extends MDCComponent<MDCLineRippleFoundation> {
  activate(): void;
  deactivate(): void;
  setRippleCenter(xCoordinate: number): void;
}
