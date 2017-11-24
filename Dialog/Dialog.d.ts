import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';
import Button from '../Button/Button';
import { MDCFoundation, MDCComponent } from '../MaterialComponentsWeb';

export interface IDialogProps extends JSX.HTMLAttributes {
  onAccept?: () => void;
  onCancel?: () => void;
}
export default class Dialog extends MaterialComponent<IDialogProps, {}> {
  MDComponent: MDCDialog;
}

export class Header extends MaterialComponent<JSX.HTMLAttributes, {}> {}

export interface IBodyProps extends JSX.HTMLAttributes {
  scrollable?: boolean;
}
export class Body extends MaterialComponent<IBodyProps, {}> {}

export class Footer extends MaterialComponent<JSX.HTMLAttributes, {}> {}

export interface IFooterButtonProps {
  accept?: boolean;
  cancel?: boolean;
}
export class FooterButton extends Button<IFooterButtonProps & JSX.HTMLAttributes, {}> {}

declare class MDCDialogFoundation extends MDCFoundation<MDCDialog> {
  open(): void;
  close(): void;
  isOpen(): boolean;
  accept(shouldNotify: boolean): void;
  cancel(shouldNotify: boolean): void;
}

declare class MDCDialog extends MDCComponent<MDCDialogFoundation> {
  open(): boolean;
  show(): void;
  close(): void;
}