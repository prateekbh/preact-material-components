import {h} from 'preact';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
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

export interface IListItemMetaTextProps {}
export interface IListItemMetaTextState {}

export class ListItemMetaText extends MaterialComponent<
  IListItemMetaTextProps,
  IListItemMetaTextState
> {
  protected componentName = 'list-item__meta';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <span {...props} ref={this.setControlRef} role="presentation">
        {props.children}
      </span>
    );
  }
}
