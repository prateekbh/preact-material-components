import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {Icon, IIconProps, IIconState} from '@preact-material-components/icon';
import {h} from 'preact';

export interface IActionIconsProps {}

export interface IActionIconsState {}

export class ActionIcons extends MaterialComponent<
  IActionIconsProps,
  IActionIconsState
> {
  protected componentName = 'card__action-icons';
  protected mdcProps = [];

  protected materialDom(props) {
    return <div {...props}>{props.children}</div>;
  }
}

export interface IActionIconProps extends IIconProps {}

export interface IActionIconState extends IIconState {}

export class ActionIcon extends Icon {
  protected componentName = 'card__action';
  protected mdcProps = [];

  protected materialDom(props) {
    if (props.className) {
      props.className += ' mdc-card__action--icon';
    } else {
      props.className = 'mdc-card__action--icon';
    }
    return super.materialDom(props);
  }
}
