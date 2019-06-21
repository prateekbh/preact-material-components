import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {Icon, IIconProps, IIconState} from '@preact-material-components/icon';
import {h} from 'preact';

export interface ICardActionIconsProps {}

export interface ICardActionIconsState {}

export class CardActionIcons extends MaterialComponent<
  ICardActionIconsProps,
  ICardActionIconsState
> {
  protected componentName = 'card__action-icons';
  protected mdcProps = [];

  protected materialDom(props) {
    return <div {...props}>{props.children}</div>;
  }
}

export interface ICardActionIconProps extends IIconProps {}

export interface ICardActionIconState extends IIconState {}

export class CardActionIcon extends Icon {
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
