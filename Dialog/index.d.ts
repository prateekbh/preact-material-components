import MaterialComponent from '../MaterialComponent';
import {VNode, PreactHTMLAttributes} from 'preact';
import Button from '../Button';
import {MDCFoundation, MDCComponent} from '../MaterialComponentsWeb';
import {Omit} from '../libs';

declare interface IDialogProps extends JSX.HTMLAttributes {
  onAccept?: (e: Event) => void;
  onCancel?: (e: Event) => void;
}
export default class Dialog extends MaterialComponent<IDialogProps, {}> {
  static Header: typeof Header;
  static Body: typeof Body;
  static Footer: typeof Footer;
  static FooterButton: typeof FooterButton;

  MDComponent: MDCDialog;
}

declare class Header extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare interface IBodyProps extends JSX.HTMLAttributes {
  scrollable?: boolean;
}
declare class Body extends MaterialComponent<IBodyProps, {}> {}

declare class Footer extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare interface IFooterButtonProps
  extends Omit<JSX.HTMLAttributes, 'accept'> {
  accept?: boolean;
  cancel?: boolean;
}
declare class FooterButton extends Button<IFooterButtonProps, {}> {}

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
