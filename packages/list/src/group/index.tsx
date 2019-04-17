import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export * from './header';

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
