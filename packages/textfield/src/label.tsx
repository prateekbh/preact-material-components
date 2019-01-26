import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface ILabelProps {}

export interface ILabelState {}

export class Label extends MaterialComponent<ILabelProps, ILabelState> {
  protected componentName = 'floating-label';
  protected mdcProps = [];

  protected materialDom(props) {
    return <label {...props}>{props.children}</label>;
  }
}
