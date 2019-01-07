import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IFormFieldProps {
  'align-end'?: boolean; // TODO: Add to docs / remove here
}

export interface IFormFieldState {}

export class FormField extends MaterialComponent<
  IFormFieldProps,
  IFormFieldState
> {
  protected componentName = 'form-field';
  protected mdcProps = ['align-end'];

  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}
