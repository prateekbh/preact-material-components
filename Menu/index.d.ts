import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';
import { MDCFoundation, MDCComponent } from '../MaterialComponentsWeb';
import List from '../List';

declare interface IMenuProps extends JSX.HTMLAttributes {
  open?: boolean;
  'open-from-top-left'?: boolean;
  'open-from-top-right'?: boolean;
  'open-from-bottom-left'?: boolean;
  'open-from-bottom-right'?: boolean;
  onSelect?: () => void;
  onCancel?: () => void;
  onMenuClosed?: () => void;
}

export default class Menu extends MaterialComponent<IMenuProps, {}> {
  static Anchor: typeof Anchor;
  static Item: typeof List.Item;

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
