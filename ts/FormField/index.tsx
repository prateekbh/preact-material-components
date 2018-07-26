import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

export interface IFormfieldProps extends JSX.HTMLAttributes {
  'align-end'?: boolean;
}

export interface IFormfieldState {}

/**
 * @prop mini = false
 * @prop plain = false
 */
export class Formfield extends MaterialComponent<
  IFormfieldProps,
  IFormfieldState
> {
  protected componentName = 'form-field';
  protected mdcProps = ['align-end'];

  @autobind
  protected materialDom() {
    return <div>{this.props.children}</div>;
  }
}

export default Formfield;
