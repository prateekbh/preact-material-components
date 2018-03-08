import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';
import {MDCFoundation, MDCComponent} from '../MaterialComponentsWeb';
import List from '../List';

declare interface IMenuProps extends JSX.HTMLAttributes {
  open?: boolean;
  'open-from-top-left'?: boolean;
  'open-from-top-right'?: boolean;
  'open-from-bottom-left'?: boolean;
  'open-from-bottom-right'?: boolean;
  onSelect?: (e: Event) => void;
  onCancel?: (e: Event) => void;
  onMenuClosed?: (e: Event) => void;
}

export default class Menu extends MaterialComponent<IMenuProps, {}> {
  static Anchor: typeof Anchor;
  static Item: typeof List.Item;

  MDComponent: MDCMenu;
}

declare class Anchor extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare class MDCMenuFoundation extends MDCFoundation<MDCMenu> {
  open(options?: {focusIndex?: number}): void;
  close(evt?: Event): void;
}
declare class MDCMenu extends MDCComponent<MDCMenuFoundation> {
  open: boolean;
  show(options?: {focusIndex?: number}): void;
  hide(): void;
  items: Element[];
}
