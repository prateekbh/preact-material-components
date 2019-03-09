import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IPrimaryActionProps extends JSX.HTMLAttributes {}

export interface IPrimaryActionState {}

export class PrimaryAction extends MaterialComponent<
  IPrimaryActionProps,
  IPrimaryActionState
> {
  protected componentName = 'card__primary-action';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <div {...props} tabIndex="0">
        {props.children}
      </div>
    );
  }
}
