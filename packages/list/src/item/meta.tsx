import {h} from 'preact';
import {
  IListItemGraphicProps,
  IListItemGraphicState,
  ListItemGraphic
} from './graphic';

export interface IListItemMetaProps extends IListItemGraphicProps {}

export interface IListItemMetaState extends IListItemGraphicState {}

export class ListItemMeta extends ListItemGraphic {
  protected componentName = 'list-item__meta';
}
