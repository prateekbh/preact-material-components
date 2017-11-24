import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';
import { MDCFoundation, MDCComponent } from '../MaterialComponentsWeb';

export default class Snackbar extends MaterialComponent<JSX.HTMLAttributes, {}> {
  MDComponent: MDCSnackbar;
}

declare interface ISnackbarData {
  message: string;
  multiline?: boolean;
  actionOnBottom?: boolean;
  timeout?: number;
}
declare interface ISnackbarData {
  message: string;
  multiline?: boolean;
  actionOnBottom?: boolean;
  timeout?: number;
  actionHandler: Function;
  actionText: string;
}

declare class MDCSnackbarFoundation extends MDCFoundation<MDCSnackbar> {
  active: boolean;
  dismissesOnAction(): boolean;
  setDismissOnAction(dismissOnAction: boolean): void;
  show(data: ISnackbarData): void;
}

declare class MDCSnackbar extends MDCComponent<MDCSnackbarFoundation> {
  show(data: ISnackbarData): void;
  dismissesOnAction: boolean;
}