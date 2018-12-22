import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IFormfieldProps {
  'align-end'?: boolean; // TODO: Add to docs / remove here
}

export interface IFormfieldState {}

export class Formfield extends MaterialComponent<
  IFormfieldProps,
  IFormfieldState
> {
  protected componentName = 'form-field';
  protected mdcProps = ['align-end'];

  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}
