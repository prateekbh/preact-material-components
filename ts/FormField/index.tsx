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

  protected materialDom() {
    return <div />;
  }
}

export default Formfield;
