import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IChipTextProps {}

export interface IChipTextState {}

export class ChipText extends MaterialComponent<
  IChipTextProps,
  IChipTextState
> {
  protected componentName = 'chip__text';
  protected mdcProps = [];

  protected materialDom(allprops) {
    const {children, ...props} = allprops;

    return <div {...props}>{children}</div>;
  }
}
