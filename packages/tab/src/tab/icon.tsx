import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';

export interface ITabIconProps {}

export interface ITabIconState {}

export class TabIcon extends MaterialComponent<ITabIconProps, ITabIconState> {
  protected componentName = 'tab__icon';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <span className="material-icons" {...props}>
        {props.children}
      </span>
    );
  }
}
