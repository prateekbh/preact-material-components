import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IListTextProps {}

export interface IListTextState {}

export class ListText extends MaterialComponent<
  IListTextProps,
  IListTextState
> {
  protected componentName = 'list-item__text';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <span {...props} ref={this.setControlRef}>
        {props.children}
      </span>
    );
  }
}
