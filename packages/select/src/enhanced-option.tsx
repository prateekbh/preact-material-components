import {MaterialComponent} from '../../base/lib/MaterialComponent';
import {h} from 'preact';

export interface IEnhancedOptionProps {
  value?: string;
  selected?: boolean;
}

export interface IEnhancedOptionState {}

export class EnhancedOption extends MaterialComponent<
  IEnhancedOptionProps,
  IEnhancedOptionState
> {
  protected componentName = 'list-item';
  protected mdcProps = [];

  protected materialDom(allprops) {
    const {value, ...props} = allprops;
    return (
      <li data-value={value || ''} {...props}>
        {props.children}
      </li>
    );
  }
}
