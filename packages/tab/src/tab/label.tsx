import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';

export interface ITabLabelProps {}
export interface ITabLabelState {}
export class TabLabel extends MaterialComponent<
  ITabLabelProps,
  ITabLabelState
> {
  protected componentName = 'tab__text-label';
  protected mdcProps = [];

  protected materialDom(props) {
    return <span {...props}>{props.children}</span>;
  }
}
