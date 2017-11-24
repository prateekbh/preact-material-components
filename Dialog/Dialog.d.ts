import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';
import Button from '../Button/Button';

export interface IDialogProps extends JSX.HTMLAttributes {
  onAccept?: () => void;
  onCancel?: () => void;
}
export default class Dialog extends MaterialComponent<IDialogProps, {}> {}

export class Header extends MaterialComponent<JSX.HTMLAttributes, {}> {}

export interface IBodyProps extends JSX.HTMLAttributes {
  scrollable?: boolean;
}
export class Body extends MaterialComponent<IBodyProps, {}> {}

export class Footer extends MaterialComponent<JSX.HTMLAttributes, {}> {}

export interface IFooterButtonProps extends JSX.HTMLAttributes {
  accept?: boolean;
  cancel?: boolean;
}
export class FooterButton extends Button<IFooterButtonProps, {}> {}