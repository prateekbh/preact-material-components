import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';
import { MDCFoundation, MDCComponent } from '../MaterialComponentsWeb';
import { Item } from '../List/List';

declare interface IMenuProps {
  open?: boolean;
  'open-from-top-left'?: boolean;
  'open-from-top-right'?: boolean;
  'open-from-bottom-left'?: boolean;
  'open-from-bottom-right'?: boolean;
}

export default class Menu extends MaterialComponent<IMenuProps & JSX.HTMLAttributes, {}> {
  static Anchor: typeof Anchor;
  static Item: typeof Item;

  MDComponent: MDCSimpleMenu;
}

declare class Anchor extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare class MDCSimpleMenuFoundation extends MDCFoundation<MDCSimpleMenu> {
  open(options?: { focusIndex?: number }): void;
  close(evt?: Event): void;
}
declare class MDCSimpleMenu extends MDCComponent<MDCSimpleMenuFoundation> {
  open: boolean;
  show(options?: { focusIndex?: number }): void;
  hide(): void;
  items: Element[];
}