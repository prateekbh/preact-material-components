import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IListGroupProps {}

export interface IListGroupState {}

export class ListGroup extends MaterialComponent<
  IListGroupProps,
  IListGroupState
> {
  protected componentName = 'list-group';
  protected mdcProps = [];

  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}
