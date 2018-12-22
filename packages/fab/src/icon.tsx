import {Icon, IIconProps, IIconState} from '@preact-material/icon';
import {h} from 'preact';

export interface IFabIconProps extends IIconProps {}

export interface IFabIconState extends IIconState {}

export class FabIcon extends Icon {
  protected componentName = 'fab__icon';
}
