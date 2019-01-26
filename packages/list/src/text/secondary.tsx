import {h} from 'preact';
import {IListTextProps, IListTextState, ListText} from './index';

export interface IListTextSecondaryProps extends IListTextProps {}

export interface IListTextSecondaryState extends IListTextState {}

export class ListTextSecondary extends ListText {
  protected componentName = 'list-item__secondary-text';
}
