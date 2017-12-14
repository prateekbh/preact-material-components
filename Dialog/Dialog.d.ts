import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';
import Button from '../Button/Button';
import { MDCFoundation, MDCComponent } from '../MaterialComponentsWeb';

declare interface IDialogProps {
  onAccept?: () => void;
  onCancel?: () => void;
}
export default class Dialog extends MaterialComponent<IDialogProps & JSX.HTMLAttributes, {}> {
  static Header: typeof Header;
  static Body: typeof Body;
  static Footer: typeof Footer;
  static FooterButton: typeof FooterButton;

  MDComponent: MDCDialog;
}

declare class Header extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare interface IBodyProps {
  scrollable?: boolean;
}
declare class Body extends MaterialComponent<IBodyProps & JSX.HTMLAttributes, {}> {}

declare class Footer extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare interface IFooterButtonProps {
  accept?: boolean;
  cancel?: boolean;
}
declare class FooterButton extends Button<IFooterButtonProps & JSX.HTMLAttributes, {}> {}

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