import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

export interface IFormfieldProps extends JSX.HTMLAttributes {
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

export default Formfield;
