import {MaterialComponent} from '../../base/lib/MaterialComponent';
import {h} from 'preact';

export interface ISelectOptionProps {
  disabled?: boolean;
  selected?: boolean;
}

export interface ISelectOptionState {}

export class SelectOption extends MaterialComponent<
  ISelectOptionProps,
  ISelectOptionState
> {
  protected componentName = 'select-item';
  protected mdcProps = [];

  protected materialDom(props) {
    return <option {...props}>{props.children}</option>;
  }
}
