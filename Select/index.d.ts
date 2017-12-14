import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';
import { MDCFoundation, MDCComponent } from '../MaterialComponentsWeb';
import List from '../List';

declare interface ISelectProps {
  disabled?: boolean;
  basic?: boolean;
  selectedIndex?: number;
  onChange?: (e: { selectedIndex: number, selectedOptions: NodeListOf<Element> }) => void;
}

export default class Select extends MaterialComponent<ISelectProps & JSX.HTMLAttributes, {}> {
  static Item: typeof Item;

  MDComponent: MDCSelect;
  updateSelection(): void;
}
declare class Item extends List.Item {}

declare class MDCSelectFoundation extends MDCFoundation<MDCSelect> {
  getValue(): string;
  getSelectedIndex(): number;
  setSelectedIndex(index: number): void;
  isDisabled(): boolean;
  setDisabled(disabled: boolean): void;
  resize(): void;
}
declare class MDCSelect extends MDCComponent<MDCSelectFoundation> {
  value: string;
  options: Element[];
  selectedOptions: NodeListOf<Element>;
  selectedIndex: number;
  disabled: boolean;
  item(index: number): Element|null;
  nameditem(key: string): Element|null;
}
