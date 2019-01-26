import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {Icon, IIconProps, IIconState} from '@preact-material-components/icon';
import {h} from 'preact';

export interface ICardActionsIconsProps {}

export interface ICardActionsIconsState {}

export class CardActionsIcons extends MaterialComponent<
  ICardActionsIconsProps,
  ICardActionsIconsState
> {
  protected componentName = 'card__action-icons';
  protected mdcProps = [];

  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}

export interface ICardActionsIconProps extends IIconProps {}

export interface ICardActionsIconState extends IIconState {}

export class CardActionsIcon extends Icon {
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
