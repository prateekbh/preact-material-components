import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IListDividerProps {
  inset?: boolean;
}

export interface IListDividerState {}

export class ListDivider extends MaterialComponent<
  IListDividerProps,
  IListDividerState
> {
  protected componentName = 'list-divider';
  protected mdcProps = ['inset'];

  protected materialDom(props) {
    return <li role="separator" {...props} ref={this.setControlRef} />;
  }
}
