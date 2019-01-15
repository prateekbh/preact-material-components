import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface ITopAppBarRowProps {}

export interface ITopAppBarRowState {}

export class TopAppBarRow extends MaterialComponent<
  ITopAppBarRowProps,
  ITopAppBarRowState
> {
  protected componentName = 'top-app-bar__row';
  protected mdcProps = [];

  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}
