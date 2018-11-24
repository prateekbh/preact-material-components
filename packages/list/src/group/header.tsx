import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IListGroupHeaderProps {}

export interface IListGroupHeaderState {}

export class ListGroupHeader extends MaterialComponent<
  IListGroupHeaderProps,
  IListGroupHeaderState
> {
  protected componentName = 'list-group__subheader';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <h3 {...props} ref={this.setControlRef}>
        {props.children}
      </h3>
    );
  }
}
