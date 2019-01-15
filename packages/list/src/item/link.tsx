import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IListItemLinkProps {}

export interface IListItemLinkState {}

export class ListItemLink<
  PropTypes = {},
  StateTypes = {}
> extends MaterialComponent<PropTypes, StateTypes> {
  protected componentName = 'list-item';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <a role="option" {...props} ref={this.setControlRef}>
        {props.children}
      </a>
    );
  }
}
