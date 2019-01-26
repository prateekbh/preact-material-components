import {h} from 'preact';
import {IListTextProps, IListTextState, ListText} from './index';

export interface IListTextPrimaryProps extends IListTextProps {}

export interface IListTextPrimaryState extends IListTextState {}

export class ListTextPrimary extends ListText {
  protected componentName = 'list-item__primary-text';
}
