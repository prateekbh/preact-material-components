import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IListItemProps {}

export interface IListItemState {}

export class ListItem<
  PropTypes = {},
  StateTypes = {}
> extends MaterialComponent<
  IListItemProps & PropTypes,
  IListItemState & StateTypes
> {
  protected componentName = 'list-item';
  protected mdcProps: string[] = [];

  protected materialDom(props) {
    return (
      <li role="option" {...props} ref={this.setControlRef}>
        {props.children}
      </li>
    );
  }
}
