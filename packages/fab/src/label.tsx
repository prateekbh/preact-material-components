import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IFabLabelProps {}

export interface IFabLabelState {}

export class FabLabel extends MaterialComponent<
  IFabLabelProps,
  IFabLabelState
> {
  protected componentName = 'fab__label';
  protected mdcProps = [];
  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}
