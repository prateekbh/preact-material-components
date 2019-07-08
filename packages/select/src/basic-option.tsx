import {MaterialComponent} from '../../base/lib/MaterialComponent';
import {h} from 'preact';

export interface IBasicOptionProps {
  disabled?: boolean;
  selected?: boolean;
}

export interface IBasicOptionState {}

export class BasicOption extends MaterialComponent<
  IBasicOptionProps,
  IBasicOptionState
> {
  protected componentName = 'select-item';
  protected mdcProps = [];

  protected materialDom(props) {
    return <option {...props}>{props.children}</option>;
  }
}
